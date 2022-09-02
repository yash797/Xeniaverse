import axiosInstance from "./configure"

export const getEvents =() =>{
    return axiosInstance.get("/events");
}