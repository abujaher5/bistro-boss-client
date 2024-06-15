import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Cover from "../../shared/Cover/Cover";
import contactUsImg from "../../assets/contact/banner.jpg";
import { FaPhone } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <Cover img={contactUsImg} title={"Contact Us"}></Cover>
      <SectionTitle
        subHeading={"visit us"}
        heading={"Our Location"}
      ></SectionTitle>
      <div>
        <div className="bg-black px-20 py-4 w-1/4">
          <FaPhone></FaPhone>
        </div>
        <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
          <div className="space-y-4 text-center divide-y dark:divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">Phones</h2>
              <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                ++9977 05095809358
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
