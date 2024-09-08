const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center">
      <p className="text-yellow-600 py-1">{subHeading}</p>
      <h3 className="text-3xl mx-auto py-2 border-y-4 w-full md:w-1/4 lg:w-1/3 uppercase">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
