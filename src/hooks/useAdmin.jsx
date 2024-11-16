import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosFetch from "./useAxiosFetch";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosFetch();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      // console.log(res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
