import TextField from '@mui/material/TextField'
import React from 'react'
import HotelInputBar from '../../components/HotelInputBar/HotelInputBar'
import './Home.module.css'
import styles from './Home.module.css'
const Home = () => {
  return (
    <div className={styles.container}>
      <HotelInputBar />
      <TextField id='outlined-basic' label='Outlined' variant='outlined' />
    </div>
  )
}

export default Home
