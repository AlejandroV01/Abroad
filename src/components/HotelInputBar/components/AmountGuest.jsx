import MinusIcon from '@rsuite/icons/Minus'
import PeopleFilterIcon from '@rsuite/icons/PeopleFliter'
import PlusIcon from '@rsuite/icons/Plus'
import React, { useEffect, useState } from 'react'
import { Button, IconButton, Popover, Whisper } from 'rsuite'
import styles from './AmountGuest.module.css'
const PeopleIcon = ({ size }) => <PeopleFilterIcon style={{ fontSize: size }} />

const AmountGuest = () => {
  const [numberOfAdults, setNumberOfAdults] = useState(2)
  const [numberOfChildren, setNumberOfChildren] = useState(0)
  const [numberOfRooms, setNumberOfRooms] = useState(1)
  const [totalGuests, setTotalGuests] = useState(2)
  const [displayTotalGuests, setDisplayTotalGuests] = useState(2)
  const [displayTotalRooms, setDisplayTotalRooms] = useState(1)
  const addAdult = () => {
    if (numberOfAdults < 6) {
      setNumberOfAdults(prev => prev + 1)
      setTotalGuests(prev => prev + 1)
    }
  }
  const removeAdult = () => {
    if (numberOfAdults > 1) {
      setNumberOfAdults(prev => prev - 1)
      setTotalGuests(prev => prev - 1)
    }
  }

  const addChildren = () => {
    if (numberOfChildren < 42) {
      setNumberOfChildren(prev => prev + 1)
      setTotalGuests(prev => prev + 1)
    }
  }
  const removeChildren = () => {
    if (numberOfChildren > 0) {
      setNumberOfChildren(prev => prev - 1)
      setTotalGuests(prev => prev - 1)
    }
  }

  const addRoom = () => {
    if (numberOfRooms < 6) {
      setNumberOfRooms(prev => prev + 1)
    }
  }
  const removeRoom = () => {
    if (numberOfRooms > 1) {
      setNumberOfRooms(prev => prev - 1)
    }
  }

  const updateTotalStats = () => {
    setDisplayTotalGuests(prev => (prev = totalGuests))
    setDisplayTotalRooms(prev => (prev = numberOfRooms))
  }

  const speaker = (
    <Popover className={styles.popover}>
      <div className={styles.infoRow}>
        <h3>Adults</h3>
        <div className={styles.counter}>
          <IconButton icon={<MinusIcon />} circle size='lg' onClick={removeAdult} />
          <div className={styles.numberDiv}>
            <span>{numberOfAdults}</span>
          </div>
          <IconButton icon={<PlusIcon />} circle size='lg' onClick={addAdult} />
        </div>
      </div>
      <div className={styles.infoRow}>
        <h3>Children</h3>
        <div className={styles.counter}>
          <IconButton icon={<MinusIcon />} circle size='lg' onClick={removeChildren} />
          <div className={styles.numberDiv}>
            <span>{numberOfChildren}</span>
          </div>
          <IconButton icon={<PlusIcon />} circle size='lg' onClick={addChildren} />
        </div>
      </div>
      <div className={styles.infoRow}>
        <h3>Rooms</h3>
        <div className={styles.counter}>
          <IconButton icon={<MinusIcon />} circle size='lg' onClick={removeRoom} />
          <div className={styles.numberDiv}>
            <span>{numberOfRooms}</span>
          </div>
          <IconButton icon={<PlusIcon />} circle size='lg' onClick={addRoom} />
        </div>
      </div>
      <hr></hr>
      <div className={styles.buttonRow}>
        <Button onClick={updateTotalStats} appearance='ghost'>
          RESET
        </Button>
        <Button onClick={updateTotalStats} appearance='primary'>
          APPLY
        </Button>
      </div>
    </Popover>
  )
  return (
    <div>
      <Whisper placement='bottom' trigger='click' speaker={speaker}>
        <Button color='white' appearance='ghost' style={{ padding: 0, width: '100%' }}>
          <div className={styles.staticContainer}>
            <PeopleIcon size='1.75em' />
            <div className={styles.information}>
              <p>{displayTotalRooms} Room</p>
              <p className={styles.guests}>{displayTotalGuests} Guests</p>
            </div>
          </div>
        </Button>
      </Whisper>
    </div>
  )
}

export default AmountGuest
