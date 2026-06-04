import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import ProductGrid from './component/ProductGrid'
import DetanDefense from './component/DetanDefense'
import Banner2 from './component/Banner2'
import ExploreCategories from './component/ExploreCategories'
import InstagramGrid from './component/instagramPosts'
import Footer from './component/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className='ban'>
        <Banner/>
        <ProductGrid/>
        <DetanDefense/>
        <Banner2/>
        <ExploreCategories/>
        <InstagramGrid/>
        <Footer/>
      </div>
    </>
  )
}

export default App
