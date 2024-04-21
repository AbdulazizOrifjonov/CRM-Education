import React from 'react'
import SaitBar from '../SaitBar/SaitBar'
import NavBar from '../Navbr/Navbar'
import "./Main.css"
import Dashboard from '../Dashboard/Dashboard'
// import Sidebar from '../sa/Sidebar'
 

function Main() {
  return (<>
    <div className='mains '>
      <div className="">

        {/* <Sidebar/> */}
      <NavBar/>
      </div>
      <div className="m">

        <SaitBar/>
      </div>
        
    </div>
      <Dashboard/>
  </>
  )
}

export default Main