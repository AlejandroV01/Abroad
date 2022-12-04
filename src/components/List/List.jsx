import { CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import styles from './List.module.css'
const places = [
  {
    name: 'Manhattan Hotel',
    price: 500,
    picture: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/69/11/69110_v4.jpeg',
  },
  {
    name: 'By The Lake Hotel',
    price: 200,
    picture: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/69/11/69110_v4.jpeg',
  },
  {
    name: 'SpiderMan House',
    price: 50,
    picture: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/69/11/69110_v4.jpeg',
  },
  {
    name: 'buba apt',
    price: 1000000,
    picture: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/69/11/69110_v4.jpeg',
  },
]

const List = () => {
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const options = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/locations/v3/search',
    params: { q: 'new york', locale: 'en_US', langid: '1033', siteid: '300000001' },
    headers: {
      'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_API_KEY}`,
      'X-RapidAPI-Host': `${process.env.REACT_APP_RAPID_API_HOST}`,
    },
  }

  axios
    .request(options)
    .then(response => {
      setIsLoading(true)
      let overallList = []
      let data = response.data.sr
      for (let i = 0; i < data.length; i++) {
        if (data[i].type === 'HOTEL') {
          let newHotelObject = {
            name: `${data[i].regionNames.shortName}`,
            coords: { lat: parseFloat(data[i].coordinates.lat), lng: parseFloat(data[i].coordinates.long) },
            hotelId: `${data[i].hotelId}`,
            cityId: `${data[i].cityId}`,
          }

          const optionOffer = {
            method: 'POST',
            url: 'https://hotels4.p.rapidapi.com/properties/v2/get-offers',
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_API_KEY}`,
              'X-RapidAPI-Host': `${process.env.REACT_APP_RAPID_API_HOST}`,
            },
            data: `{"currency":"USD","eapid":1,"locale":"en_US","siteId":${process.env.REACT_APP_SITE_ID},"propertyId":"${newHotelObject.hotelId}","checkInDate":{"day":11,"month":12,"year":2022},"checkOutDate":{"day":13,"month":12,"year":2022},"destination":{"coordinates":{"latitude":${newHotelObject.coords.lat},"longitude":${newHotelObject.coords.lng}},"regionId":"${newHotelObject.cityId}"},"rooms":[{"adults":2,"children":[]}]}`,
          }

          axios
            .request(optionOffer)
            .then(response => {
              let data = response.data.data.propertyOffers
              if (data.soldOut === true) {
                alert('sold out')
              } else {
                newHotelObject = {
                  ...newHotelObject,
                  price: data.stickyBar.displayPrice,
                  units: data.units,
                  categorizedListings: data.categorizedListings,
                  picture: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/69/11/69110_v4.jpeg',
                }
              }
              overallList.push(newHotelObject)
              setList(overallList)
            })
            .catch(function (error) {
              console.error(error)
            })
        }
      }
      setIsLoading(false)
    })
    .catch(function (error) {
      console.error(error)
    })
  console.log(list)
  return (
    <div>
      <h1>List</h1>
      <div className={styles.list}>
        {list.map(place => (
          <div className={styles.card}>
            <img src={place.picture} alt='' />
            <h1>{place.name}</h1>
            <p>{place.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
