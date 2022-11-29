import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import React, { useState } from 'react'
//drawer elements used
import CloseIcon from '@mui/icons-material/Close'
import CottageIcon from '@mui/icons-material/Cottage'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import styles from './SideDrawer.module.css'
export default function SideDrawer() {
  const [open, setState] = useState(false)

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState(open)
  }

  return (
    <div className={styles.container}>
      <IconButton
        onClick={toggleDrawer(true)}
        color='inherit'
        sx={{
          p: 0,
        }}
      >
        <MenuIcon fontSize='large' />
      </IconButton>
      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        <Box
          sx={{
            p: 2,
            height: 1,
            backgroundColor: '#fff',
          }}
        >
          <IconButton sx={{ mb: 2 }}>
            <CloseIcon onClick={toggleDrawer(false)} />
          </IconButton>

          <Divider sx={{ mb: 2 }} />

          <Box sx={{ mb: 2, p: 3 }} className={styles.buttonBox}>
            <ListItemButton>
              <ListItemIcon>
                <CottageIcon sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <SearchIcon sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText primary='Search' />
            </ListItemButton>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translate(-50%, 0)',
              marginBottom: '2rem',
            }}
          >
            <Button variant='contained' sx={{ m: 1, width: 0.5 }}>
              Register
            </Button>
            <Button variant='outlined' sx={{ m: 1, width: 0.5 }}>
              Login
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>
  )
}
