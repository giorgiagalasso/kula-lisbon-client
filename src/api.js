import axios from "axios";
const baseURL = `${process.env.REACT_APP_SERVER_HOSTNAME}/api`;

//http://localhost:5000/api/

/* CLASS ROUTES */
export const getAllClasses = () => {
  return axios.get(`${baseURL}/classes`);
};

export const addClass = (addAClass) => {
  return axios.post(`${baseURL}/classes`, addAClass, {withCredentials: true});
};

export const getClass = (classId) => {
  return axios.get(`${baseURL}/classes/${classId}`);
};

export const deleteClass = (deleteClassId) => {
  return axios.delete(`${baseURL}/classes/${deleteClassId}`, {withCredentials: true});
};

export const updateClass = (updatedClass) => {
  return axios.put(`${baseURL}/classes/${updatedClass.id}`, updatedClass, {withCredentials: true});
};

export const uploadFile = (uploadData) => {
  return axios.post(`${baseURL}/upload`, uploadData, {withCredentials: true});
};



/* TEACHER ROUTES */

export const getAllTeachers = () => {
  return axios.get(`${baseURL}/teachers`)
};

export const addTeacher = (addATeacher) => {
  return axios.post(`${baseURL}/teachers`, addATeacher, {withCredentials: true});
};

export const getTeacher = (teacherId) => {
  return axios.get(`${baseURL}/teachers/${teacherId}`);
};

export const deleteTeacher = (deleteTeacherId) => {
  return axios.delete(`${baseURL}/teachers/${deleteTeacherId}`, {withCredentials: true});
};

export const updateTeacher = (updatedTeacher) => {
  return axios.put(`${baseURL}/teachers/${updatedTeacher.id}`, updatedTeacher, {withCredentials: true});
};





/* AUTHENTICATION API ROUTES */

export const signup = (user) => {
  return axios.post(`${baseURL}/signup`, user);
};

export const login = (user) => {
  return axios.post(`${baseURL}/login`, user, { withCredentials: true });
};

export const loggedIn = () => {
  return axios.get(`${baseURL}/loggedin`, { withCredentials: true });
};

export const logout = (user) => {
  return axios.post(`${baseURL}/logout`, null, { withCredentials: true });
};



