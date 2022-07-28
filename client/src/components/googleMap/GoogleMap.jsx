import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function PersonalMap(props) {
  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyA6dNOZxGxxRdBsHGAzAVH25lDYk1GQgAY',
        }}
        defaultCenter={{ lat: 31.705356, lang: 35.009597 }}
        center={{ lat: 31.705356, lng: 35.009597 }}
        defaultZoom={7}
      >
        {props.locations.map((location) => (
          <LocationOnIcon lat={location.lat} lng={location.lng} />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default PersonalMap;
