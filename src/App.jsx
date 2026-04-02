import { Suspense } from 'react'
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Status from './components/homepage/ourStatus/Status'
import PremiumTools from './components/homepage/premiumTools/PremiumTools'
import Navbar from './components/navbar/Navbar'
import LoadingSpinner from './components/Ui/LoadingSpinner'
import { ToastContainer } from 'react-toastify'


const premiumToolsPromise = fetch('/premiumtools.json')
  .then(res => res.json())



function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Status></Status>
      <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
        <PremiumTools premiumToolsPromise={premiumToolsPromise}></PremiumTools>
      </Suspense>


      {/* react tostify container */}
       <ToastContainer/>
    </>
  )
}

export default App
