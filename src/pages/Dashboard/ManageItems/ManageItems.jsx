import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosFetch();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        // console.log(res.data);

        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heading={"Manage All Items"}
        subHeading={"--- Hurry Up! ---"}
      ></SectionTitle>

      <div className="p-6 shadow-lg ">
        <h2 className="font-extrabold my-4">Total Items: {menu.length}</h2>
        <div
          className="overflow-x-auto rounded-t-lg
"
        >
          <table className="table">
            {/* head */}
            <thead className=" bg-[#D1A054] text-white ">
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {menu.map((sm, idx) => (
                <tr key={sm._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={sm.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{sm.name} </td>
                  <td>$ {sm.price}</td>
                  <td>
                    <Link to={`/dashboard/updateItem/${sm._id}`}>
                      <button className="btn btn-ghost">
                        <FaEdit className="text-4xl rounded-md text-white bg-[#D1A054] p-2"></FaEdit>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(sm)}
                      className="btn btn-ghost"
                    >
                      <FaTrash className="text-4xl rounded-md text-white bg-red-700 p-2"></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
