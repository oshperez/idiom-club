const Banner = ({ vector, bgColor }) => {
  console.log(vector);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/vectors/${vector})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 90%",
        backgroundColor: `${bgColor}`,
        minWidth: "100%",
        minHeight: 400,
      }}
    ></div>
  );
};

export default Banner;
