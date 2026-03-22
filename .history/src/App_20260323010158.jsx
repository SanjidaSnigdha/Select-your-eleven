
import './App.css'
import { ToastContainer } from 'react-toastify';

import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Navbar from './components/Navbar/Navbar'
import { Suspense, useState } from 'react'
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import NewsLetter from './components/NewsLetter/NewsLetter';

const fetchPlayers = async () =>{
  const res = await fetch("/players.json")
  return res.json()
}
const playersPromise = fetchPlayers()


function App() {
  const [toggle,setToggle] = useState(true)
  const [availableBalance,setAvailableBalance] = useState(600000)
  const [purchasedPlayers,setPurchasedPlayers] = useState([])
  const removePlayer = (p) =>{
    const filteredData = purchasedPlayers.filter(ply=> ply.player_name!==p.player_name)
    console.log(filteredData)
    setPurchasedPlayers(filteredData)
    setAvailableBalance(availableBalance+parseInt(p.price.split("USD").join("").
                split(",").join("")))

  }

  return (
    <>
   <Navbar availableBalance={availableBalance}></Navbar>
   <Banner></Banner>
   <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
    <h1 className='font-bold text-2xl'>{
    toggle===true?"Available players":`Selected players(${purchasedPlayers.length}/6)`}</h1>
    <div className='font-bold'>
      <button onClick={()=>setToggle(true)} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle===true?"bg-[#E7FE29]":""}`}>Available</button>
      <button onClick={()=>setToggle(false)} className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle===false?"bg-[#E7FE29]":""}`}>Selected <span>({purchasedPlayers.length})</span></button>
    </div>

   </div>

     {
      toggle === true?<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>
}>
    <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
</Suspense>:<SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers} setToggle={setToggle}></SelectedPlayers>

     }

  

      <ToastContainer></ToastContainer>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
     
    </>
  )
}

export default App
