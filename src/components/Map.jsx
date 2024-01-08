import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  // our location
  const defaultProps = {
    center: {
      lat: 9.0760818,
      lng: 7.4641472,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={9.0760818} lng={7.4641472} text="042 Devs HQ" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
