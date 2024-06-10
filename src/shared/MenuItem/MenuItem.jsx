const MenuItem = ({ item }) => {
  const { image, price, recipe, name } = item;

  return (
    <section>
      <div className="flex gap-2 p-2 ">
        <img
          style={{ borderRadius: "0px  200px  200px  200px" }}
          className="w-[120px] "
          src={image}
          alt=""
        />
        <div className="px-3 ">
          <h3 className="uppercase font-semibold">{name}----------</h3>
          <p>{recipe}</p>
        </div>
        <p className="text-yellow-400">{price}</p>
      </div>
    </section>
  );
};

export default MenuItem;
