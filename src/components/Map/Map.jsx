import LocationOnOutlineIcon from '@mui/icons-material/LocationOnOutlined'
import { Paper, Rating, Typography, useMediaQuery } from '@mui/material'
import GoogleMapReact from 'google-map-react'
import React from 'react'
import styles from './Map.module.css'

const Map = () => {
  //   const isMobile = useMediaQuery('(min-width: 600px)')
  const coordinates = { lat: 40.776676, lng: -73.971321 }
  return (
    <div className={styles.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_MAP_API_KEY}` }}
        defaultCenter={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      ></GoogleMapReact>
    </div>
  )
}

export default Map
