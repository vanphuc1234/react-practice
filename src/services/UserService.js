import axios from "axios";
const fetchAllUser = (page) => {
  return axios.get(`https://reqres.in/api/users?page=${page || 1}`);
};

export { fetchAllUser };
