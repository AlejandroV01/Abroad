import SearchIcon from '@rsuite/icons/Search'
import React from 'react'
import { Button, DateRangePicker, Input, InputGroup } from 'rsuite'
import AmountGuest from '../../components/HotelInputBar/components/AmountGuest'
import styles from './HotelInputBar.module.css'
const HotelInputBar: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <InputGroup className={styles.input} size='lg'>
        <Input />
        <InputGroup.Button>
          <SearchIcon />
        </InputGroup.Button>
      </InputGroup>
      <DateRangePicker appearance='default' placeholder='Check In/Out Dates' size='lg' />
      <AmountGuest />
      <Button appearance='primary' size='lg'>
        Search
      </Button>
    </div>
  )
}

export default HotelInputBar
