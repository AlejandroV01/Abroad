import { Button } from '@mui/material'
import Stack from '@mui/material/Stack'
import React from 'react'
import { Link } from 'react-router-dom'
import SideDrawer from '../SideDrawer/SideDrawer'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <h1>
          <a href='https://google.com'>Abroad.</a>
        </h1>

        <div className={styles.links}>
          <Link to='/'>Home</Link>
          <Link to='/MapSearch'>Map</Link>
        </div>

        <div className={styles.buttons}>
          <Stack direction='row' spacing={2}>
            <Button variant='contained'>Get Started</Button>
            <Button variant='contained'>Login</Button>
          </Stack>
        </div>

        <div className={styles.navMenu}>
          <SideDrawer />
        </div>
      </div>
    </div>
  )
}
export default Header
