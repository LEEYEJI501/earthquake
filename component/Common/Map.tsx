import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

type props = {
  lat: number,
  lng: number,
}


const apiKey = process.env.appConfig?.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

export default function GoogleMapAPI(props: props) {
  const { lat, lng } = props

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  })

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds({
      lat,
      lng
    });
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={{ lat, lng }}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}
