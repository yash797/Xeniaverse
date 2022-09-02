import React, { useEffect, useState } from "react";
import { ReactComponent as WorkIcon } from "../Assets/Images/work.svg";
import { ReactComponent as SchoolIcon } from "../Assets/Images/school.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Requests } from "../configuration";
import Loader from "../Components/Loader";

function Schedule() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    Requests.getSchedule().then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <div className="flex items-center justify-center h-[80vh]">
      <Loader />
    </div>
  ) : (
    <div className="font-sans text-xl pb-10">
      <h1
        className="title text-6xl font-semibold text-center text-white pb-12 mt-8"
        style={{ fontFamily: "Quicksand" }}
      >
        SCHEDULE
      </h1>

      {data.length > 0 ? (
        <VerticalTimeline>
          {" "}
          {data.map((event, i) => {
            let isWorkIcon = event.icon === "work";

            return (
              <VerticalTimelineElement
                key={`element${i}`}
                date={event.date}
                dateClassName=" text-2xl font-bold text-white"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                contentStyle={{
                  background: "rgba(0,0,0,0.2)",
                  color: "#fff",
                  backdropFilter: "blur(5px)",
                }}
                textClassName="font-family"
                contentArrowStyle={{}}
                className="space-y-4"
              >
                <div className="vertical-timeline-element-title pt-1 font-bold text-blue-500 text-2xl border-b mb-4">
                  {event.title}
                </div>
                <div>{event.location}</div>
                <div
                  className="mx-0 mt-6"
                  style={{ marginBottom: 20 }}
                  id="description"
                >
                  {event.description}
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      ) : (
        <div className="h-[400px] flex items-center md:text-6xl text-gray-200">
          Coming Soon
        </div>
      )}
    </div>
  );
}

export default Schedule;
