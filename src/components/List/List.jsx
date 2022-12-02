import { CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
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
]

// const axios = require('axios')

// const options = {
//   method: 'GET',
//   url: 'https://hotels4.p.rapidapi.com/locations/v3/search',
//   params: { q: 'new york', locale: 'en_US', langid: '1033', siteid: '300000001' },
//   headers: {
//     'X-RapidAPI-Key': '336b79b37bmsha10868f82387c93p13d5a6jsn4e81dcf082ce',
//     'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
//   },
// }

// axios
//   .request(options)
//   .then(function (response) {
//     let data = response.data.sr
//     for (let i = 0; i < data.length; i++) {
//       console.log(data[i])
//     }
//   })
//   .catch(function (error) {
//     console.error(error)
//   })

const List = () => {
  return (
    <div>
      <h1>List</h1>
      <div className={styles.list}>
        {places.map(place => (
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
