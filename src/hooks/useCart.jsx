// import { useQuery } from "@tanstack/react-query";
// import useAxiosFetch from "./useAxiosFetch";

import { useQuery } from "@tanstack/react-query";
import useAxiosFetch from "./useAxiosFetch";
import useAuth from "./useAuth";

// const useCart = () => {
//   const axiosSecure = useAxiosFetch();
//   // tan stack query

//   const { data: cart = [] } = useQuery({
//     queryKey: ["cart"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/carts");
//       return res.data;
//     },
//   });
//   return [cart];
// };

// export default useCart;

const useCart = () => {
  const axiosSecure = useAxiosFetch();
  const { user } = useAuth();

  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
