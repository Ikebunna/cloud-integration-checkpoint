import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const LocPointer = ({ text }) => (
    <>
      <p>{text}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-bullseye"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
        <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
      </svg>
    </>
  );

  // our location
  const defaultProps = {
    center: {
      lat: 9.0760818,
      lng: 7.4641472,
    },
    zoom: 15,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAq8PlIEfG9w7Q-_mU0i6EbvBGHhQorGAU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <LocPointer lat={9.0760818} lng={7.4641472} text="042 HQ" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
