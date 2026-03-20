
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Navbar from './components/Navbar/Navbar'
import { Suspense } from 'react'

const fetchPlayers = async () =>{
  const res = await fetch("/players.json")
  return res.json()
}

function App() {

const playersPromise = fetchPlayers()
  return (
    <>
   <Navbar></Navbar>
   <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
    <h1>Available players</h1>
    <div>
      <button className='py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 bg-[#E7FE29]'>Available</button>
      <button className='py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0'>Selected <span>(0)</span></button>
    </div>

   </div>
   <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>
}>
    <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
</Suspense>

{/* <SelectedPlayers></SelectedPlayers> */}

     
    </>
  )
}

export default App
