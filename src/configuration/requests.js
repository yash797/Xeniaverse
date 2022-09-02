import axiosInstance from "./configure";

export const register = (data) => {
  return axiosInstance.post("/auth/signup", data);
};
export const login = (data) => {
  return axiosInstance.post("/auth/login", data);
};
export const getUserByToken = (token) => {
  return axiosInstance.get("/auth/profile", {
    headers: { authorization: token },
  });
};
export const getAllParticipants = () => {
  return axiosInstance.get("/participant");
};

export const getEventParticipants = (eventId) => {
  return axiosInstance.get(`/participant/event/${eventId}`)
}

export const GetAllUsers = () => {
  return axiosInstance.get("/auth");
};

export const forgotPassword = (email) => {
  return axiosInstance.post("/auth/forgot", { email });
};

export const getAllEvents = () => {
  return axiosInstance.get("/event");
};

export const setRegisteredEvents = (data, token) => {
  return axiosInstance.post(
    `/user/register-event`,
    { eventId: data },
    {
      headers: { Authorization: token },
    }
  );
};

export const getEventDetails = (id) => {
  return axiosInstance.get(`/event/${id}`);
};

export const getSeminarDetails = () => {
  return axiosInstance.get("/seminar");
};

export const getSeminarMoreInfo = (id) => {
  return axiosInstance.get(`/seminar/${id}`);
};

export const contactus = (data) => {
  return axiosInstance.post("/contact-us", data);
};

export const resetPassword = (id, token, password) => {
  return axiosInstance.post(`/auth/reset/${id}/${token}`, {
    password,
  });
};

export const checkIfParticipated = (userId, eventId) => {
  return axiosInstance.get(
    `/participant/checkParticipant/${userId}/${eventId}`
  );
};

export const createTeam = (userId, name, eventId) => {
  return axiosInstance.post("/teams", { userId, name, eventId });
};
export const joinTeam = (userId, eventId, teamId, name) => {
  return axiosInstance.post("/participant/jointeam", {
    userId,
    eventId,
    teamId,
    name,
  });
};

export const getRegisteredEvents = (userId) => {
  return axiosInstance.get(`/participant/${userId}`);
};

export const getTeamById = (teamId) => {
  return axiosInstance.get(`/teams/${teamId}`);
};

export const getSchedule = () => {
  return axiosInstance.get("/schedule");
};
