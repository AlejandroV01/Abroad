import HotelInputBar from '../../components/HotelInputBar/HotelInputBar'
import './Home.module.css'
import styles from './Home.module.css'
const Home = () => {
  return (
    <div className={styles.container}>
      <HotelInputBar />
    </div>
  )
}

export default Home
