
import './App.css'
import navImg from "./assets/logo.png"
import dollarImg from "./assets/dollar-1.png"

function App() {


  return (
    <>
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="text-xl">
      <img className="w-60 h-60" src={navImg} alt="" />
    </a>
  </div>
  <div className="flex items-center">
   <span>60000000000</span>
   <span>Coin</span>
   <img className="w-10 h-10" src={dollarImg} alt="" />
  </div>
</div>

     
    </>
  )
}

export default App
