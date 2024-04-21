// import React, { useState } from 'react';
// import { FaSearchengin } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';
// import './Navbar.css'; // Bu yerda sizning SCSS faylingizni CSS ga kompilyatsiya qilingan holatda import qilishingiz kerak
// import SaitBar from '../SaitBar/SaitBar'; // Tog'ri yo'lni ta'minlang
// import { IoMdMenu, IoMdClose } from "react-icons/io"; // Importlar qatorida ikkala iconni ham import qilish
// import { FaRegCircleUser } from "react-icons/fa6";
// function Navbar() {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const toggleModal = () => {
//         setIsModalOpen(!isModalOpen);
//     };

//     return (
//         // <div className="NavBar">

//         <div className='nav '>
//             <nav className='navbar container'>
//                 <div className="nav_right">
//                     <h1 className='p'>SRM</h1>
//                 </div>
//                 <button onClick={toggleModal} className="menu-toggle">
//                     {isModalOpen ? <IoMdClose /> : <IoMdMenu />}
//                 </button>
//                 <div className="nav_center">
//                     <input type="text" placeholder='Search...' />
//                     <button > <FaSearchengin /> </button>
//                 </div>
//                 <div className="nav_left">
//                     <NavLink to={"Oquvchi"} >
//                         <p className='p'>O'quvchi</p>
//                     </NavLink>
//                     <NavLink to={"Oqtuvchi"}>
//                         <p className='p'>O'qtuvchi</p>
//                     </NavLink>
//                     <NavLink to={"Buglator"}>
//                         <p className='p'>Bug'altor</p>
//                     </NavLink>
//                     <NavLink to={"Direktor"}>
//                         <p className='p' ><FaRegCircleUser className='user'/> User </p>
//                     </NavLink>
//                 </div>
//             </nav>
//             <div className="pozestion">
//             <SaitBar isModalOpen={isModalOpen} toggleModal={toggleModal} />
//             </div>
//         </div>
//         // {/* </div> */}
//     );
//   }


// export default Navbar;






















import React from 'react';
// import { FaSearchengin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { IoMdMenu, IoMdClose } from "react-icons/io";
// import Oquvchi from "../../Router/Oquvchi/Oquvchi"
import Search from './Search/Search';
// import Headroom from 'react-headroom'



function Navbar({ isSidebarOpen, setSidebarOpen }) {


    return (
        // <Headroom>

        <div className='container   '>
            {/* <div className="uf"> */}

            <nav className='navbar  '>
                <div className="nav_right">
                    <NavLink to={"/"}>
                        <h1 className='shifo'>CRM<p className='p'>Education</p></h1>
                    </NavLink>
                    <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="menu-toggle">
                        {isSidebarOpen ? <IoMdClose /> : <IoMdMenu />}
                    </button>
                </div>


                <ul className="nav_left">
                    <div className="nav_centers">
                        {/* <input type="text" placeholder='Search...' />
                    <button > <FaSearchengin /> </button> */}
                        <Search />
                    </div>
                    {/* <li>

                        <NavLink to={"Oquvchi"} >
                            <p className='p'>O'quvchi</p>
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to={"Oqtuvchi"}>
                            <p className='p'>O'qtuvchi</p>
                        </NavLink>
                    </li> */}
                    <li>

                        <NavLink to={"Buglator"}>
                            <p className='p'>Bug'altor</p>
                        </NavLink>
                    </li>
                    <div className='divs'>
                        {/* <div className="">

                            <Oquvchi className='user' />
                        </div> */}
                        <p className='p' >
                            User
                        </p>
                    </div>
                    {/* <Oquvchi/> */}
                </ul>
            </nav>
        </div >

        // {/* // </div> */}
        // {/* </Headroom> */}

    );
}

export default Navbar;

 




































// import React from 'react';
// // import "./nav.scss"
// import './Navbar.css'; // Stil faylini ta'kidlash kerak
// // FontAwesome ikonlarini react-icons orqali import qilish
// import { FaCodepen, FaPalette, FaImages, FaThumbtack, FaHeart, FaChartLine, FaFire, FaMagic, FaGem, FaCaretUp } from 'react-icons/fa';

// const NavBar = () => {
//     return (
//         <div id="nav-bar">
//             <input type="checkbox" id="nav-toggle" />
//             <div id="nav-header">
//                 <a id="nav-title" href="https://codepen.io" target="_blank" rel="noopener noreferrer">
//                     C<FaCodepen />DEPEN
//                 </a>
//                 <label htmlFor="nav-toggle">
//                     <span id="nav-toggle-burger"></span>
//                 </label>
//                 <hr />
//             </div>
//             <div id="nav-content">
//                 <div className="nav-button"><FaPalette /><span>Your Work</span></div>
//                 <div className="nav-button"><FaImages /><span>Assets</span></div>
//                 <div className="nav-button"><FaThumbtack /><span>Pinned Items</span></div>
//                 <hr />
//                 <div className="nav-button"><FaHeart /><span>Following</span></div>
//                 <div className="nav-button"><FaChartLine /><span>Trending</span></div>
//                 <div className="nav-button"><FaFire /><span>Challenges</span></div>
//                 <div className="nav-button"><FaMagic /><span>Spark</span></div>
//                 <hr />
//                 <div className="nav-button"><FaGem /><span>Codepen Pro</span></div>
//             </div>
//             <input type="checkbox" id="nav-footer-toggle" />
//             <div id="nav-footer">
//                 <div id="nav-footer-heading">
//                     <div id="nav-footer-avatar">
//                         <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" alt="avatar" />
//                     </div>
//                     <div id="nav-footer-titlebox">
//                         <a id="nav-footer-title" href="https://codepen.io/uahnbu/pens/public" target="_blank" rel="noopener noreferrer">uahnbu</a>
//                         <span id="nav-footer-subtitle">Admin</span>
//                     </div>
//                     <label htmlFor="nav-footer-toggle">
//                         <FaCaretUp />
//                     </label>
//                 </div>
//                 <div id="nav-footer-content">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NavBar;
