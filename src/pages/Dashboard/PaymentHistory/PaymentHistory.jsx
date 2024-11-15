import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import { Link } from "react-router-dom";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosFetch();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  console.log(payments);
  return (
    <div>
      <SectionTitle
        heading={"Payment History"}
        subHeading={"---At a Glance---"}
      ></SectionTitle>

      <div className="flex flex-start mt-10">
        <h2 className="text-xl font-semibold">
          Total Payments: {payments.length}
        </h2>
      </div>

      <div className="overflow-x-auto shadow-xl rounded-t-xl mt-4">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] ">
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Transaction Id</th>
              <th>Total Price</th>
              <th>Payment Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}

            {payments.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.email}</td>
                <td>{item.transactionId}</td>
                <td>$ {item.price}</td>
                <td>{item.data}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
