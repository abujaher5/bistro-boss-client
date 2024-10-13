import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, price, recipe, _id } = useLoaderData();
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosFetch();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url

    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      //now send the menuItem data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);

      if (menuRes.data.modifiedCount > 0) {
        // show success popup
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div>
      <SectionTitle
        heading={"Update An Item"}
        subHeading={"Refresh Info"}
      ></SectionTitle>

      <div className="  mt-6 bg-[#F3F3F3] p-10 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              defaultValue={name}
              {...register("name", { required: true })}
              className="input input-bordered w-full "
            />
          </div>

          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                // defaultValue={"selected"}

                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="selected">
                  Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                required
                placeholder="Price"
                defaultValue={price}
                {...register("price", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
          </div>

          <div className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
              defaultValue={recipe}
            ></textarea>
          </div>
          <div className="form-control w-full max-w-xs my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>

          {/* <input className="btn btn-outline" type="submit" value={"Add Item"} /> */}

          <div className="flex form-control mt-6 justify-center items-center">
            <button className="btn bg-green-400">Update Menu Item</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
