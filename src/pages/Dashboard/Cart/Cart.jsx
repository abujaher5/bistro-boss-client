import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { AiFillDelete } from "react-icons/ai";
import useAxiosFetch from "../../../hooks/useAxiosFetch";

const Cart = () => {
  const [cart, refetch] = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const axiosSecure = useAxiosFetch();

  const handleDelete = (id) => {
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
        axiosSecure.delete(`/carts/${id}`).then((res) => {
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
        subHeading={"---My Cart---"}
        heading={"WANNA ADD MORE?"}
      ></SectionTitle>

      <div className="flex items-center justify-evenly mt-10">
        <h2 className="text-xl font-semibold">Total Orders: {cart.length}</h2>
        <h2 className="text-xl font-semibold">Total Price: {totalPrice}</h2>
        <button className="btn text-xl text-white bg-[#D1A054]">Pay</button>
      </div>
      <div className="overflow-x-auto shadow-xl rounded-t-xl mt-4">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] ">
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}

            {cart.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
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

export default Cart;
