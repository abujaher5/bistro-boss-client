import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Cover from "../../shared/Cover/Cover";
import contactUsImg from "../../assets/contact/banner.jpg";
import { FaClock, FaPhone } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Contact Us</title>
      </Helmet>
      <Cover img={contactUsImg} title={"Contact Us"}></Cover>
      <SectionTitle
        subHeading={"visit us"}
        heading={"Our Location"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 px-20 gap-10 my-10">
        <div className="">
          <div className="bg-[#D1A054] flex justify-center items-center  px-20 py-4 ">
            <FaPhone className="text-center text-white text-2xl"></FaPhone>
          </div>

          <div className="flex flex-col justify-center  px-4 pb-6 shadow-md rounded-xl ">
            <div className="space-y-4 text-center divide-y dark:divide-[#D1A054]">
              <div className=" space-y-1 p-6 shadow-lg bg-[#F3F3F3]">
                <h2 className="text-xl font-semibold sm:text-2xl uppercase">
                  Phone
                </h2>

                <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                  +38 (012) 34 56 789
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#D1A054] flex justify-center items-center  px-20 py-4 ">
            <FaLocationDot className="text-center text-white text-2xl"></FaLocationDot>
          </div>

          <div className="flex flex-col justify-center  px-4 pb-6 shadow-md rounded-xl">
            <div className="space-y-4 text-center divide-y dark:divide-[#D1A054]">
              <div className=" space-y-1 lg:p-6 shadow-lg bg-[#F3F3F3]">
                <h2 className="text-xl font-semibold sm:text-2xl uppercase">
                  Address
                </h2>
                <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                  +38 (012) 34 56 789
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[#D1A054] flex justify-center items-center  px-20 py-4 ">
            <FaClock className="text-center text-white text-2xl"></FaClock>
          </div>

          <div className="flex flex-col justify-center  px-4 pb-6 shadow-md rounded-xl ">
            <div className="space-y-4 text-center divide-y dark:divide-[#D1A054]">
              <div className=" space-y-1 p-6 shadow-lg bg-[#F3F3F3]">
                <h2 className="text-xl font-semibold sm:text-2xl uppercase">
                  Working Hours
                </h2>
                <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                  Mon-Fri 08:00-22:00 <br />
                  Sat-Sun 10:00-23:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* form information */}
      <div>
        <SectionTitle
          subHeading={"---send us a Message---"}
          heading={"Contact Form"}
        ></SectionTitle>
      </div>
    </div>
  );
};

export default ContactUs;
