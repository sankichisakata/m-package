"use client";

import React from 'react'
import { GoogleMap, LoadScript, MarkerF, useJsApiLoader, InfoWindowF } from '@react-google-maps/api';
import { InterfaceMap } from "./googleMapStyles";
import { Logo } from '../icon';
 const googleMapOptions = {
  styles: InterfaceMap,
  mapTypeControl: false,
  streetViewControl: false,
};

const containerStyle = {
  width: '100%',
  height: '100%',
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
        zoom={14}
      >
        <InfoWindowF position={center}>
            <>
            <div className='flex justify-center items-center gap-1'>
              <div className="">
                  <Logo className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[60px] lg:h-[60px]" />
              </div>
              <div className="block flex flex-col md:gap-1">
                  <p className="text-[0.4rem] lg:text-[0.55rem] font-semibold">ダンボールのエムパッケージ</p>
                  <p className="text-[0.6rem] lg:text-[0.8rem] font-bold">株式会社エムパッケージ</p>
              </div>
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