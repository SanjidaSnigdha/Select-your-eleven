
import './App.css'
import navImg from "./assets/logo.png"
import dollarImg from "./assets/dollar-1.png"
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
   <Navbar></Navbar>

<AvailablePlayers></AvailablePlayers>
<SelectedPlayers></SelectedPlayers>

     
    </>
  )
}

export default App
