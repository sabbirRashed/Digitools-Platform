import './App.css'
import Banner from './components/homepage/banner/Banner'
import Status from './components/homepage/ourStatus/status'
import PremiumTools from './components/homepage/premiumTools/PremiumTools'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
     <Banner></Banner>
     <Status></Status>
     <PremiumTools></PremiumTools>
    </>
  )
}

export default App
