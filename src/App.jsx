import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Status from './components/homepage/ourStatus/Status'
import PremiumTools from './components/homepage/premiumTools/PremiumTools'
import Navbar from './components/navbar/Navbar'
import LoadingSpinner from './components/Ui/LoadingSpinner'
import { ToastContainer } from 'react-toastify'
import Step from './components/homepage/Step/Step'
import Pricing from './components/homepage/Pricing/Pricing'
import Footer from './components/homepage/Footer/Footer'
import Workflow from './components/homepage/Workflow/Workflow'


const premiumToolsPromise = fetch('/premiumtools.json')
  .then(res => res.json());

const fetchPricng = fetch("/pricingData.json")
  .then(res => res.json());




function App() {
  const [selectedTools, setSelectedTools] = useState([]);


  return (
    <>
      <Navbar selectedTools={selectedTools}></Navbar>
      <Banner></Banner>
      <Status></Status>
      <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
        <PremiumTools
          premiumToolsPromise={premiumToolsPromise}
          selectedTools={selectedTools}
          setSelectedTools={setSelectedTools}
        >
        </PremiumTools>
      </Suspense>
      <Step></Step>
      <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
        <Pricing pricingPromise={fetchPricng}></Pricing>
      </Suspense>
      <Workflow></Workflow>
      <Footer></Footer>


      {/* react tostify container */}
      <ToastContainer />
    </>
  )
}

export default App
