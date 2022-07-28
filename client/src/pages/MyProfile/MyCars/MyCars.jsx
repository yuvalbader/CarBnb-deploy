import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VehicleListContainer from "../../../components/vehicles-list/VehiclesListContainer";
import { vehicleModelsWithPhotos } from "../../../components/browseByBrand/dummyData";
import Button from "@mui/material/Button";

const MyCars = (props) => {
  const [data, setData] = useState([0]);
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate("/add-vehicle");
  };
  useEffect(() => {
    console.log("data", vehicleModelsWithPhotos);
  });

  //this is what we render if there is no data  (the user has no cars).
  // we should render a "add car" button here that will open the add car dialog.
  // you can try to set the data with some dummy data and see if it renders you the "test" div from line 38

  const userHadNoCars = () => {
    return (
      <div className="trips-view-container-img">
        <img
          src="https://resources.turo.com/client/v2/builds/assets/il_car_on_the_desert_@2xc6729191106bba04b948.png"
          alt=""
        />
        <div className="no-past-container">
          <p className="no-past title"> No cars to show </p>
          <label className="no-past-label"></label>
        </div>
        <div>This is where you can access information about your cars</div>
      </div>
    );
  };

  //this is what we render if there is data (the user has cars).
  // implement here the logic to display the data in the UI
  // using roni`s componnents
  return (
    <div className="details-view-container">
      <p className="title"> My cars </p>
      {/* {data.length === 0 && userHadNoCars()} */}
      {data.length !== 0 && <VehicleListContainer/>}
      <Button variant="contained" onClick={navigateToContacts}>
        Add car
      </Button>
    </div>
  );
};

export default MyCars;
