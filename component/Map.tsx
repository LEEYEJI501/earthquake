import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

type props = {
  lat: number,
  lng: number,
}


const apiKey = process.env.appConfig?.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

export default function GoogleMapAPI(props: props) {
  const center = {
    lat: props.lat,
    lng: props.lng
  };

  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  })

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}
