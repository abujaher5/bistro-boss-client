import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item bg-fixed pt-6 bg-slate-300 bg-opacity-60  text-white space-y-2 ">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="flex justify-center items-center bg-slate-700 bg-opacity-30 p-20 gap-10 mx-20 ">
        <div className="ml-20 bg-fixed">
          <img className="w-3/2 h-1/2" src={featuredImage} alt="" />
        </div>

        <div className="text-left space-y-3 py-20 mr-20">
          <p>Date March 20,2024</p>
          <h2 className="uppercase text-xl font-semibold">
            Where Can I Get Some?
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            dolore repudiandae eos dolor non aspernatur molestias inventore cum
            voluptate placeat vero, saepe illum quas quibusdam aliquid, ratione
            similique facere odit.
          </p>
          <div>
            <button className="font-semibold py-3 px-4 text-center   uppercase border-white outline-none border-b-4 rounded-md ">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
