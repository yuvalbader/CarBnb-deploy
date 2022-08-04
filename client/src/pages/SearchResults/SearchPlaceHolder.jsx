import Countdown from "react-countdown"
const SearchPlaceHolder = () => {
  const renderer = ({ seconds }) => {
    // Render a countdown
    return <span>{seconds}</span>
  }
  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="trips-view-container-img"
    >
      <img
        style={{ width: "50%", marginTop: "2%" }}
        src="https://resources.turo.com/client/v2/builds/assets/il_car_on_the_desert_@2xc6729191106bba04b948.png"
        alt=""
      />
      <div className="no-past-container">
        <p className="no-past title"> No cars to show </p>
        <label className="no-past-label"></label>
      </div>
      <div>
        You will be back to search in{" "}
        {<Countdown renderer={renderer} date={Date.now() + 3000} />}
      </div>
    </div>
  )
}

export default SearchPlaceHolder
