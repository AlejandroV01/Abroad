import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { DateRange, DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'
import { Dayjs } from 'dayjs'
import * as React from 'react'
import styles from './HotelInputBar.module.css'

const HotelInputBar: React.FunctionComponent = () => {
  const [value, setValue] = React.useState<DateRange<Dayjs>>([null, null])
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} localeText={{ start: 'Check-in', end: 'Check-out' }}>
      <DateRangePicker
        className={styles.container}
        value={value}
        onChange={newValue => {
          setValue(newValue)
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  )
}

export default HotelInputBar
