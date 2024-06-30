import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section className="my-8">
      <SectionTitle
        subHeading="What Our Client Say"
        heading="Testimonials"
      ></SectionTitle>

      <div className="mt-20">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-[500px]"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col space-y-4ssssssssssss justify-center items-center">
                <p>
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                  <p className="flex  items-center text-8xl justify-center ">
                    <RiDoubleQuotesL></RiDoubleQuotesL>
                  </p>
                </p>
                <p className="px-24">{review.details}</p>
                <p className="font-semibold text-xl text-center text-yellow-600">
                  {review.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
