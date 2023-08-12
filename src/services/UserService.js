import axios from "./customize-axios";
const fetchAllUser = (page) => {
  return axios.get(`/api/users?page=${page || 1}`);
};

export { fetchAllUser };
