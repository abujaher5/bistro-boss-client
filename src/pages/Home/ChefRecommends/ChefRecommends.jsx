import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const ChefRecommends = () => {
  const [cardDetails, setCardDetails] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setCardDetails(data);
      });
  }, []);
  console.log(cardDetails);

  return (
    <section>
      <SectionTitle
        subHeading={"---Should Tri---"}
        heading={"Chef Recommends"}
      ></SectionTitle>

      <div className="grid grid-cols-3 gap-6">
        {cardDetails.map((cardDetail) => (
          <div key={cardDetail._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={cardDetail.image} className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{cardDetail.name}</h2>
                <p>{cardDetail.recipe}</p>
                <div className="card-actions">
                  <button className=" btn border-b-4 border-black outline-none  uppercase">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChefRecommends;
