import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import About from './Components/About'
import Registrations from './Components/Registrations'
import Timeline from './Components/Timeline'
import Front from './Components/Front'
import Navbar from './Components/Navbar'
import Partaners from './Components/Partaners'
import Footerb  from './Components/Footerb'
// import Leaderboard from './Components/Leaderboard'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import LeaderboardN from './Components/LeaderboardN'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Teams from './Components/Teams'
import Projects from './Components/Projects'
import Faqs from './Components/Faqs'
import Ques from './Components/Ques'


function App() {
 
  const [count, setCount] = useState(0)

  return (
  <div>
    
    {/* <h1 className='text-red-700'>Hello</h1> */}
   
     {/* <Navbar/>
    <Front/> */}

    {/* <About/> */}
    {/* <Registrations/> */}
    {/* <Timeline/> */}
    {/* <LeaderboardN/> */}
    {/* <Leaderboard/> */}
    {/* <Partaners/> */}
    {/* <Footerb/> */}

    <Router>
    {/* <Howtip/> */}
    {/* <Success/> */}
    {/* <Failure/> */}
        <Routes>

          
          <Route exact path="/" element={<><Navbar/><Front/></>} />

          <Route exact path="/LeaderboardN" element={<><Navbar/><LeaderboardN/></>} />
          <Route exact path="/Teams" element={<><Navbar/><Teams/></>} />
          <Route exact path="/Projects" element={<><Navbar/><Projects/> </>} />
          <Route exact path="/Faqs" element={<><Navbar/><Ques/> </>} />
         

        </Routes>
      </Router>
         
  </div>
  )
}

export default App
