import HotelInputBar from '../../components/HotelInputBar/HotelInputBar'
import List from '../../components/List/List'
import Map from '../../components/Map/Map'
import './Home.module.css'
import styles from './Home.module.css'
const Home = () => {
  return (
    <div className={styles.container}>
      <HotelInputBar />
      <div className={styles.infoContainer}>
        <div className={styles.leftBox}>
          <List />
        </div>
        <div className={styles.rightBox}>
          <Map />
        </div>
      </div>
    </div>
  )
}

export default Home
