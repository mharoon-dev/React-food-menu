export default function FoodOptionsFunction({ food, category, setCategory }) {
  const { name, image } = food;

  return (
    <>
      <div
        onClick={() => {
          setCategory(name.toLowerCase());
        }}
        className="foodImage col-md-12 col-4 mt-3 p-0 d-flex justify-content-center align-items-center"
        style={{ position: "relative", height: "fit-content" }}
      >
        <img src={image} width="100%" alt="" />
        <div
          className="itemNameDiv"
          style={{
            position: "absolute",
            top: "70%",
            left: "20%",
            transform: "translate(-50%, -50%)",
            color: "white",
            zIndex: 1,
          }}
        >
          <h3 className="mb-1 foodName">{name}</h3>
          {/* <p style={{ fontSize: '10px', textAlign: 'center' }}>Order Now</p> */}
        </div>
      </div>
    </>
  );
}
