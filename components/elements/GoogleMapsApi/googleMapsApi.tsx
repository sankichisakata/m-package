"use client";

import React from 'react'
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { InterfaceMap } from "./googleMapStyles";
 const googleMapOptions = {
  styles: InterfaceMap,
};

const containerStyle = {
  width: '100%',
  height: '100%'
};

// 初期表示する座標
const center = {
  lat: 43,
  lng: 141,
};

function GoogleMapsApi() {
  const { isLoaded , loadError } = useJsApiLoader({
    id: 'google-map-script',
    language: 'ja',
    // googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!,
    // 下は個人のapiキー　アカウント作成後、削除する！
    googleMapsApiKey: "AIzaSyATucYkuY37O3MEJlYiOvBfKlCgKxXWKsg",
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!

    setMap(map)

  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  if (loadError) return 'Error'
  if (!isLoaded) return 'Load中'
  return isLoaded ? (
      <GoogleMap
        options={googleMapOptions}
        id='map'
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <MarkerF
          position={{
            lat: 43,
            lng: 141,
          }}
          onLoad={onLoad}
        />
      </GoogleMap>
  ) : <></>
}

export default React.memo(GoogleMapsApi)