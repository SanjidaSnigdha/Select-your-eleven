
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Navbar from './components/Navbar/Navbar'

const fetchPlayers = async () =>{
  const res = await fetch("/players.json")
  return res.json()
}

function App() {

const playersPromise = fetchPlayers()
  return (
    <>
   <Navbar></Navbar>

<AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
{/* <SelectedPlayers></SelectedPlayers> */}

     
    </>
  )
}

export default App
