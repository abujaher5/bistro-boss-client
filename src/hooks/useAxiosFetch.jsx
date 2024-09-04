import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:9000",
});
const useAxiosFetch = () => {
  return axiosSecure;
};

export default useAxiosFetch;
