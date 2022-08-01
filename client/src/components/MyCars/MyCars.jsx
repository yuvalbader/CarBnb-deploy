import { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import VehicleListContainer from "../vehicles-list/VehiclesListContainer";
import { vehicleModelsWithPhotos } from "../browseByBrand/dummyData";
import Button from "@mui/material/Button";
import ListVahicleDialog from "../list-new-vehicle-form/ListVehicleDialog";

const MyCars = () => {
  let data = useSelector((state) => state.vehiclesSlice);
  data = Object.values(data);
  console.log(data);
  const [isAddCarPressed, setIsAddCarPressed] = useState(false);
  const openFormHandler = () => setIsAddCarPressed(true);
  const closeFormHandler = () => setIsAddCarPressed(false);
  const handleOutletChange = useOutletContext();

  handleOutletChange("mycars");

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
      {data.length === 0 && userHadNoCars()}
      {data.length !== 0 && <VehicleListContainer vehicles={data} />}
      <Button variant="contained" onClick={openFormHandler}>
        Add car
      </Button>
      <ListVahicleDialog open={isAddCarPressed} onClose={closeFormHandler} />
    </div>
  );
};

export default MyCars;
