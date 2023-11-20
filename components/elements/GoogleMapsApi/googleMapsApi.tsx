"use client";

import React from 'react'
import { GoogleMap, LoadScript, MarkerF, useJsApiLoader, InfoWindowF } from '@react-google-maps/api';
import { InterfaceMap } from "./googleMapStyles";
import { Text } from '@chakra-ui/react';
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
    googleMapsApiKey: process.env.GOOGLE_MAPS_KEY!,
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
        <InfoWindowF position={center}>
            <>
              <Text
                fontSize={16}
                as={"p"}
                align={"center"}
                fontWeight={"bold"}
                color={"green.400"}
              >
                ダンボールのエムパッケージ
              </Text>
            </>
          </InfoWindowF>
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