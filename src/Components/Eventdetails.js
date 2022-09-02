import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "./Loader";
import { getEventDetails } from "../configuration/requests";
import axios from "axios";
import { Requests } from "../configuration";
import CreateTeamComponent from "./CreateTeamComponent";

const Eventdetails = (props) => {
        const eventid = useParams().eventid;
        const [loading, setLoading] = useState(false);
        const [details, setDetails] = useState({});
        const name = props.userData.name;
        const email = props.userData.email;
        const userId = props.userData._id;
        const contact = props.userData.mobile;
        const [participated, setParticipated] = useState(false);

        useEffect(async() => {
            await fetchData();
            await checkParticipated();
            setLoading(false);
        }, [eventid, props.loggedIn]);

        const fetchData = async() => {
            setLoading(true);
            try {
                const res = await getEventDetails(eventid);
                if (res.status === 200) {
                    setDetails(res.data);
                }
            } catch (error) {}
        };

        const checkParticipated = async() => {
            if (props.loggedIn) {
                Requests.checkIfParticipated(userId, eventid)
                    .then((res) => {
                        setParticipated(res.data);
                    })
                    .catch((err) => {});
            }
        };

        function loadScript(src) {
            return new Promise((resolve) => {
                const script = document.createElement("script");
                script.src = src;
                script.onload = () => {
                    resolve(true);
                };
                script.onerror = () => {
                    resolve(false);
                };
                document.body.appendChild(script);
            });
        }

        async function displayRazorpay() {
            const event = { eventId: eventid };
            const res = await loadScript(
                "https://checkout.razorpay.com/v1/checkout.js"
            );
            if (!res) {
                alert("Razorpay SDK failed to load. Are you online?");
                return;
            }

            let data;
            await axios
                .post("https://xeniaverse.herokuapp.com/api/razorpay", event)
                .then((res) => {
                    data = res.data;
                })
                .catch((err) => console.log(err));

            const options = {
                // key: "rzp_test_b0RqwCHzzV88K1",
                key: "rzp_live_zGcJc2Nsun6Ljh",
                currency: data.currency,
                amount: data.amount,
                order_id: data.id,
                name: "Entry Fees",
                notes: {
                    eventId: eventid,
                    userId: userId,
                    name: props.userData.name,
                    eventName: details.name,
                },
                description: "Registration Fees",
                handler: function(response) {
                    alert("Registration Successful ! ");
                    setParticipated(true);
                    //alert(response.razorpay_order_id)
                    //alert(response.razorpay_signature)
                },

                readonly: {
                    name: true,
                    email: true,
                    contact: true,
                },
                prefill: {
                    name,
                    email,
                    contact,
                },
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        }

        return loading ? ( < div className = "flex items-center justify-center h-[70vh] w-full" >
                <
                Loader / >
                <
                /div>
            ) : ( <
                div className = { `${props.isDetailOpen
                ? "md:h-[400px] p-1 xl:p-4"
                : "h-0 p-0 overflow-hidden"
                } w-full mx-auto bg-gray-100/10 transition-all relative flex flex-col min-h-[800px] md:min-h-[500px] xl:flex-row xl:w-11/12` } >
                <
                NavLink to = "/events" >
                <
                i className = "fa fa-times absolute text-xl text-white right-2 top-1"
                style = {
                    { cursor: "pointer" }
                }
                onClick = {
                    () => props.setIsDetailOpen(false)
                } >
                <
                /i> < /
                NavLink > <
                div className = "flex flex-col m-auto items-center justify-center xl:w-4/12 space-y-8 min-h-[500px]" >
                <
                h1 className = "text-white text-4xl text-center w-full" > { details.name } <
                /h1> <
                div className = "h-[150px] w-[150px]" >
                <
                img className = "max-h-full max-w-full m-auto"
                src = { details.logo }
                alt = "eventdetail" /
                >
                <
                /div> <
                div className = "text-red-500 text p-2 px-4 border border-red-400 rounded-full" >
                Registrations Closed <
                /div> {
                /* {details.name !== "Snaphunt" ? (
                          participated ? (
                            <div className="grid gap-2">
                              <button className="p-2 text-sm text-green-500 border-green-500 border">
                                Registered Successfully
                              </button>
                              {details.teamSize > 1 && !participated.teamId && (
                                <div>
                                  <CreateTeamComponent eventId={eventid} />
                                </div>
                              )}
                              {participated.teamId && (
                                <div className="text-blue-500">
                                  TeamID: {participated.teamId}
                                </div>
                              )}
                            </div>
                          ) : (
                            <>
                              <button
                                className="text-white rounded-0
                              py-2 px-4 mt-4
                              md:py-2 md:px-4 md:mt-4
                              xl:py-2 xl:px-4 xl:mt-4 bg-blue-400 hover:bg-blue-600 transition"
                                onClick={props.loggedIn ? displayRazorpay : props.openAuthModal}
                              >
                                Register Now!
                              </button>
                              {details.teamSize > 1 && (
                                <Link to={`/jointeam/${eventid}`}>
                                  <button className="p-2 px-6 border-b border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition">
                                    Join Team
                                  </button>
                                </Link>
                              )}
                            </>
                          )
                        ) : (
                          <a href="https://play.google.com/store/apps/details?id=com.pictcsi.pcsbsnaphunt">
                            <button
                              className="text-white rounded-0
                              py-2 px-4 mt-4
                              md:py-2 md:px-4 md:mt-4
                              xl:py-2 xl:px-4 xl:mt-4 bg-blue-400 hover:bg-blue-600 transition"
                            >
                              Download App
                            </button>
                          </a>
                        )} */
            } <
            /div> <
        div className = "mt-4 overflow-auto xl:w-8/12 text-gray-200 text-sm bg-black/10 p-4 min-h-[300px]" >
            <
            div className = "grid auto-cols-auto md:grid-cols-3 gap-4" >
            <
            div className = "space-y-2" >
            <
            h3 className = "text-xl font-bold text-blue-500 border-b border-gray-400/10" >
            Schedule <
            /h3> <
        div className = "mb-4 text-smƒ" > {
                details.schedule &&
                details.schedule.map((sch, i) => ( <
                    p key = { `schedule${i}` } >
                    Round { sch.round }: { sch.datetime } <
                    /p>
                ))
            } <
            /div> < /
        div > <
            div className = "space-y-2" >
            <
            h3 className = "text-xl font-bold text-blue-500 border-b border-gray-400/10" >
            Platform <
            /h3> <
        p className = "mb-4 text-sm" > { details.platform } < /p> < /
        div > <
            div className = "space-y-2" >
            <
            h3 className = "text-xl font-bold text-blue-500 border-b border-gray-400/10" >
            Participant(s) <
            /h3> <
        p className = "mb-4 text-sm" > { details.teamSize } < /p> < /
        div > <
            div className = "space-y-2" >
            <
            h3 className = "text-xl font-bold text-blue-500 border-b border-gray-400/10" >
            Prizes <
            /h3> <
        div className = "mb-4 text-sm" > {
                details.prizes &&
                details.prizes.map((prize, i) => ( <
                    p key = { `prize${i}` } > { i + 1 }: Rs. { prize.prize } <
                    /p>
                ))
            } <
            /div> < /
        div > <
            div >
            <
            h3 className = "text-xl font-bold text-blue-500 border-b border-gray-400/10" >
            Fees <
            /h3> <
        p className = "mb-4 text-sm" >
            Rs. { details.fees } { " " } { details.teamSize > 1 ? "per team" : "per individual" } <
            /p> < /
        div > <
            /div> <
        h3 className = "text-xl font-bold text-blue-500 border-b border-gray-400/10" >
            Introduction <
            /h3> <
        p className = "mb-4" > { details.introduction } < /p> <
        h3 className = "text-xl font-bold text-blue-500 border-b border-gray-400/10" >
            Rules <
            /h3> {
        details.rules && details.rules.length === 1 ? ( <
            ul className = "mb-4 list-disc px-4" > {
                details.rules[0].roundRules &&
                details.rules[0].roundRules.map((rule, i) => ( <
                    li key = { `rule${i}` } > { rule } < /li>
                ))
            } <
            /ul>
        ) : (
            details.rules &&
            details.rules.map((rnd, i) => ( <
                div key = { `rnd${i}` }
                className = "mb-4" >
                <
                h4 className = "font-medium" >
                Round { rnd.round }
                Rules: { rnd.roundName } <
                /h4> <
                ul className = "list-disc px-4" > {
                    rnd.roundRules.map((rndrule, ind) => ( <
                        li key = { `rule${ind}` } > { rndrule } < /li>
                    ))
                } <
                /ul> < /
                div >
            ))
        )
    } <
    /div> < /
div >
);
};

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        userData: state.userData,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Eventdetails);