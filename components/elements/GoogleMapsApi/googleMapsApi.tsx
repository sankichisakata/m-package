"use client";

import React from 'react'
import { GoogleMap, LoadScript, MarkerF, useJsApiLoader, InfoWindowF } from '@react-google-maps/api';
import { InterfaceMap } from "./googleMapStyles";
 const googleMapOptions = {
  styles: InterfaceMap,
  mapTypeControl: false,

};

const containerStyle = {
  width: '100%',
  height: '100%'
};

// 初期表示する座標
const center = {
  lat: 35.80462646484375,
  lng: 139.73667907714844,
};

function GoogleMapsApi() {
  const mapsKey:string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY ?? "";
  const { isLoaded , loadError } = useJsApiLoader({
    id: 'google-map-script',
    language: 'ja',
    googleMapsApiKey: mapsKey,
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
        zoom={15}
      >
        <InfoWindowF position={center}>
            <>
            <div className='p-1'>
              <p className="
              block
              bg-white
              w-15
              p-[0.1rem] md:p-[0.2rem]
              text-center text-xxs md:text-xs lg:text-base font-bold
              border-sub-color border-t-2 border-l-2 border-r-2
              ">
                  ダンボールの
              </p>
              <p className="
              bg-sub-color
              p-[0.1rem] md:p-[0.2rem]
              text-center text-white font-bold 
              text-xxs md:text-xs lg:text-base
              border-2 border-sub-color
              ">
                  エムパッケージ
              </p>
            </div>
            </>
          </InfoWindowF>
        { /* Child components, such as markers, info windows, etc. */ }
        <MarkerF
          position={{
            lat: 35.80462646484375,
            lng: 139.73667907714844,
          }}
          onLoad={onLoad}
        />

      </GoogleMap>
  ) : <></>
}

export default React.memo(GoogleMapsApi)