import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

type props = {
  lat: number;
  lng: number;
  width: number;
  height: number;
};

// const apiKey = process.env.appConfig?.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
const apiKey = "AIzaSyC-aqE96a8SXbdqFuFrldQzKFnjCGD4j8U";

const position = {
  lat: -3.745,
  lng: -38.523,
};

export default function GoogleMapAPI(props: props) {
  const { lat, lng, width, height } = props;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds({
      lat,
      lng,
    });
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: width, height: height }}
      center={{ lat, lng }}
      zoom={50}
      onLoad={onLoad}
      onUnmount={onUnmount}
    ></GoogleMap>
  ) : (
    <></>
  );
}
