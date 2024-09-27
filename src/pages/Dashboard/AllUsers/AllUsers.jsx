import { AiFillDelete } from "react-icons/ai";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import Swal from "sweetalert2";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import { FaUsers } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const axiosSecure = useAxiosFetch();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showCancelButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle
        subHeading={"---How Many---"}
        heading={"Manage All users"}
      ></SectionTitle>

      <div className="flex users-center justify-start ml-5 mt-10">
        <h2 className="text-xl font-semibold">Total users: {users.length}</h2>
      </div>

      <div className="overflow-x-auto shadow-xl rounded-t-xl mt-4">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] ">
            <tr>
              <th>#</th>

              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}

            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>

                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-lg bg-orange-500"
                    >
                      <FaUsers className="text-white text-2xl"></FaUsers>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-600"
                  >
                    <AiFillDelete className="text-white text-2xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
