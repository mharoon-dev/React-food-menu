export default function FoodFunction(foodItem) {
  console.log(foodItem);

  // Check if foodItem and foodItem.foodItem are defined
  if (!foodItem || !foodItem.foodItem) {
    // Handle the case when data is not available
    return null;
  }

  return (
    <>
      <div className="col-lg-6 mt-4 flex-warp col-12">
        <div
          className="card mb-3 w-100"
          style={{
            overflow: "hidden",
            maxWidth: "540px",
            backgroundColor: "transparent",
            color: "white",
          }}
        >
          <div className="row g-0">
            <div className="col-4  d-flex justify-content-center align-items-center">
              {/* Check if foodItem.foodItem.image is defined */}
              {foodItem.foodItem.image && (
                <img
                  src={foodItem.foodItem.image}
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                  className="w-100 rounded-start"
                />
              )}
            </div>
            <div className="col-8">
              <div className="card-body p-0 ps-1 pt-0">
                {/* food name */}
                <h5 className="card-title mb-0">{foodItem.foodItem.name}</h5>

                {/* food detail */}
                <p className="card-text mb-1 mt-1" style={{ fontSize: "10px" }}>
                  {foodItem.foodItem.desc}
                </p>

                {/* food rating */}
                <p
                  className="mb-0 ratingOfItem"
                  style={{ fontSize: "small", color: "rgb(182, 180, 180)" }}
                >
                  4.5 &nbsp;
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  &nbsp; (548 reviews)
                </p>

                <p className="card-text price" style={{ color: "white" }}>
                  <small
                    className="text-body-secondary mt-1"
                    style={{ color: "white !important" }}
                  >
                    {foodItem.foodItem.price}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
