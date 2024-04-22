import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import SaitBar from './Components/SaitBar/SaitBar';
import Oquvchi from './Router/Oquvchi/Oquvchi';
import Oqtuvchi from './Router/Oqtuvchi/Oqtuvchi';
import Buglator from './Router/Bugaltor/Buglator';
import Direktor from './Router/Direktor/Direktor';
import Home from './Router/Home/Home';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [content, setContent] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
console.log(content);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleMenuClick = (item) => {
    setContent(item);
    setSidebarOpen(false);
  };
  console.log(handleMenuClick);

  const sidebarStyle = {
    width: '250px',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: isSidebarOpen ? 0 : '-250px',
    transition: 'left 0.5s ease',
    color: '#fff',
    background: "local",

  };
 
  const contentStyle = {
    marginLeft: isSidebarOpen ? '249px' : 0,
    transition: 'margin-left 0.5s ease',
    background: "#1e8fff",
    padding: '20px',
    
  };
  // const contentSettings = {
  //   marginLeft: isSidebarOpen ? '249px' : 0,
  //   transition: 'margin-right 0.5s ease', 
  //   background: "#1e8fff",
  //   padding: '20px',
    
  // };

  const smallScreenStyle = {
    marginLeft: 0,
    transition: 'margin-left 0.5s ease',
    background: "#1e8fff",
    padding: '20px',
  };

  return (
    <div className='color'>
      <div style={sidebarStyle}>
        <SaitBar />
      </div>
      <div className="position">
        <div>
          <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
        <div style={isSmallScreen ? smallScreenStyle : contentStyle}>
          <div className="padding">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Oquvchi' element={<Oquvchi />} />
              <Route path='/Oqtuvchi' element={<Oqtuvchi />} />
              <Route path='/Buglator' element={<Buglator />} />
              <Route path='/Direktor' element={<Direktor />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;








// import React from 'react'

// function App() {
//   return (
//     <div><input type="text" name="" id="" /></div>
//   )
// }

// export default App








































































































// import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import SaitBar from './Components/SaitBar/SaitBar';
// import Oquvchi from './Router/Oquvchi/Oquvchi';
// import Oqtuvchi from './Router/Oqtuvchi/Oqtuvchi';
// import Buglator from './Router/Bugaltor/Buglator';
// import Direktor from './Router/Direktor/Direktor';
// import Home from './Router/Home/Home';
 
// const App = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(true);
//   const [content, setContent] = useState('');
//   console.log(content);
//   const handleMenuClick = (item) => {
//     setContent(item);
//     setSidebarOpen(false);
//   };
//   console.log(handleMenuClick);
  // const sidebarStyle = {
  //   width: '250px',
  //   height: '100vh',
  //   position: 'fixed',
  //   top: 0,
  //   left: isSidebarOpen ? 0 : '-250px',
  //   transition: 'left 0.5s ease',
  //   color: '#fff',
  //   background: "local",

  // };
 
  // const contentStyle = {
  //   marginLeft: isSidebarOpen ? '249px' : 0,
  //   transition: 'margin-left 0.5s ease',
  //   background: "#1e8fff",
  //   padding: '20px',
    
  // };
//  const positions = {
//   "@media screen and (max-width:1000px) ": {
//     contentStyle ishlamasin deim 
//   }
//  }
  
//   return (
//     <div style={positions} >
//       <div
//         style={sidebarStyle}
//       >
        
//         <SaitBar />
//       </div>
//         <div className="position">
//         <div 
// >          
//       <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
//         </div>
//       <div
//        style={contentStyle}
//        >
// <div className="padding">

//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='Oquvchi' element={<Oquvchi />} />
//           <Route path='/Oqtuvchi' element={<Oqtuvchi />} />
//           <Route path='/Buglator' element={<Buglator />} />
//           <Route path='/Direktor' element={<Direktor />} />
//         </Routes>
// </div>
//         </div>
 

//       </div>
//     </div>
//   );
// };


// export default App;


// import React, { useState, useEffect } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import SaitBar from './Components/SaitBar/SaitBar';
// import Oquvchi from './Router/Oquvchi/Oquvchi';
// import Oqtuvchi from './Router/Oqtuvchi/Oqtuvchi';
// import Buglator from './Router/Bugaltor/Buglator';
// import Direktor from './Router/Direktor/Direktor';
// import Home from './Router/Home/Home';

// const App = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(true);
//   const [content, setContent] = useState('');
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth <= 1000);
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize();

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleMenuClick = (item) => {
//     setContent(item);
//     setSidebarOpen(false);
//   };

//   const sidebarStyle = {
//     width: '250px',
//     height: '100vh',
//     position: 'fixed',
//     top: 0,
//     left: isSidebarOpen ? 0 : '-250px',
//     transition: 'left 0.5s ease',
//     color: '#fff',
//     background: "local",
//   };

//   const contentStyle = {
//     marginLeft: '249px',
//     transition: 'margin-left 0.5s ease',
//     background: "#1e8fff",
//     padding: '20px',
//   };

//   const smallScreenStyle = {
//     marginLeft: 0,
//     transition: 'margin-left 0.5s ease',
//     background: "#1e8fff",
//     padding: '20px',
//   };

//   return (
//     <div className='color'>
//       <div style={sidebarStyle}>
//         <SaitBar />
//       </div>
//       <div className="position">
//         <div>
//           <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
//         </div>
//         <div style={isSmallScreen ? smallScreenStyle : contentStyle}>
//           <div className="padding">
//             <Routes>
//               <Route path='/' element={<Home />} />
//               <Route path='/Oquvchi' element={<Oquvchi />} />
//               <Route path='/Oqtuvchi' element={<Oqtuvchi />} />
//               <Route path='/Buglator' element={<Buglator />} />
//               <Route path='/Direktor' element={<Direktor />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;








// import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import SaitBar from './Components/SaitBar/SaitBar';
// import Oquvchi from './Router/Oquvchi/Oquvchi';
// import Oqtuvchi from './Router/Oqtuvchi/Oqtuvchi';
// import Buglator from './Router/Bugaltor/Buglator';
// import Direktor from './Router/Direktor/Direktor';
// import Home from './Router/Home/Home';

// const App = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(true);
//   const [content, setContent] = useState('');
//   console.log(content);
//   const handleMenuClick = (item) => {
//     setContent(item);
//     setSidebarOpen(false);
//   };
//   console.log(handleMenuClick);
//   const sidebarStyle = {
//     width: '250px',
//     height: '100vh',
//     position: 'fixed',
//     top: 0,
//     left: isSidebarOpen ? 0 : '-250px',
//     transition: 'left 0.5s ease',
//     color: '#fff',
//     background: "local",
//     backgroundColor: "red"

//   };
 
//   const contentStyle = {
//     marginLeft: isSidebarOpen ? '250px' : 0,
//     transition: 'margin-left 0.5s ease',
//     background: "#1e8fff",
//     padding: '20px',
    
//   };
 
  
//   return (
//     <div className=' position ' >
//       <div
//         style={sidebarStyle}
//       >
        
//         <SaitBar />
//       </div>
//         <div className="position">
//         <div 
// >          
//       <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
//         </div>
//       <div style={contentStyle}>
// <div className="padding">

//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='Oquvchi' element={<Oquvchi />} />
//           <Route path='/Oqtuvchi' element={<Oqtuvchi />} />
//           <Route path='/Buglator' element={<Buglator />} />
//           <Route path='/Direktor' element={<Direktor />} />
//         </Routes>
// </div>
//         </div>
 

//       </div>
//     </div>
//   );
// };


// export default App;













































// import React from 'react';
// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// // import Home from './Router/Home/Home';
// // import Login from './Router/Login/Login';
// // import Cart from './Router/Cart/Cart';
// // import Wishes from './Router/Wishes/Wishes';
// // import Navbar from './Components/Navbr/Navbar';
// import Oquvchi from './Router/Oquvchi/Oquvchi';
// import Oqtuvchi from './Router/Oqtuvchi/Oqtuvchi';
// import Buglator from './Router/Bugaltor/Buglator';
// import Direktor from './Router/Direktor/Direktor';
// import Navbar from './Components/Navbr/Navbar';
// import Home from './Router/Home/Home';
// // import Main from './Components/Main/Main';

// function App() {
//   return (
//     <div className="app container">
//        {/* <Main/> */}
//        <Navbar/>

// <Routes>
//   <Route  path='/' element={<Home/>}/>
//   <Route  path='Oquvchi' element={<Oquvchi/>}/>
//    <Route  path='/Oqtuvchi' element={<Oqtuvchi/>}/>
//    <Route  path='/Buglator' element={<Buglator/>}/>
//   <Route  path='/Direktor' element={<Direktor/>}/>
// </Routes>

//     </div>
//   );
// }

// export default App;







 

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// export default function RightTemporaryDrawer() {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setIsOpen(open);
//   };

//   const list = () => (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       <Button onClick={toggleDrawer(true)}>Right</Button>
//       <Drawer
//         anchor="right"
//         open={isOpen}
//         onClose={toggleDrawer(false)}
//       >
//         {list()}
//       </Drawer>
//     </div>
//   );
// }





 







// import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import SaitBar from './Components/SaitBar/SaitBar';
// import Oquvchi from './Router/Oquvchi/Oquvchi';
// import Oqtuvchi from './Router/Oqtuvchi/Oqtuvchi';
// import Buglator from './Router/Bugaltor/Buglator';
// import Direktor from './Router/Direktor/Direktor';
// import Home from './Router/Home/Home';

// const App = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className='container'>
//       <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} toggleSidebar={toggleSidebar} />
//       <div className="main-container">
//         <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
//           <SaitBar />
//         </div>
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="Oquvchi" element={<Oquvchi />} />
//             <Route path="/Oqtuvchi" element={<Oqtuvchi />} />
//             <Route path="/Buglator" element={<Buglator />} />
//             <Route path="/Direktor" element={<Direktor />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;




        // {/* <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
        //   {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
        // </button> */}


 




// import React from 'react'
// import Navbar from './Components/Navbar/Navbar'

// function App() {
//   return (
//     <div><Navbar/></div>
//   )
// }

// export default App










// import React, { useState } from 'react';
// import { AiOutlineEye, AiOutlineDelete } from 'react-icons/ai';
// import { Modal } from 'antd';
// import { FaRegUserCircle } from "react-icons/fa";

// const ImageUploader = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const handleImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       let reader = new FileReader();
//       reader.onload = (e) => {
//         setSelectedImage(e.target.result);
//       };
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   const handleDeleteImage = () => {
//     setSelectedImage(null); // Rasimni o'chirish
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
//       {!selectedImage && (
//         <label htmlFor="upload-button" style={{ marginRight: '10px', cursor: 'pointer' }}>
//           <FaRegUserCircle style={{ fontSize: '50px', color: '#1890ff' }} />
//         </label>
//       )}
//       <input id="upload-button" type="file" onChange={handleImageChange} style={{ display: 'none' }} />
//       {selectedImage && (
//         <div style={{ position: 'relative', display: 'inline-block', borderRadius: '50%', overflow: 'hidden' }}>
//           <img src={selectedImage} alt="Selected" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
//           <div 
//             style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', opacity: 0, transition: 'opacity 0.3s' }} 
//             onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
//             onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
//           >
//             <AiOutlineEye
//               style={{ color: 'dodgerblue', fontSize: '24px', cursor: 'pointer', marginRight: '10px' }}
//               onClick={showModal}
//             />
//             <AiOutlineDelete
//               style={{ color: 'red', fontSize: '24px', cursor: 'pointer' }}
//               onClick={handleDeleteImage}
//             />
//           </div>
//         </div>
//       )}
//       <Modal title="Selected Image" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
//         <img src={selectedImage} alt="Modal Preview" style={{ width: '100%' }} />
//       </Modal>
//     </div>
//   );
// };

// export default ImageUploader;





















































// import React, {useState}from 'react';
// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// // import Home from './Router/Home/Home';
// // import Login from './Router/Login/Login';
// // import Cart from './Router/Cart/Cart';
// // import Wishes from './Router/Wishes/Wishes';
// // import Navbar from './Components/Navbr/Navbar';
// import Oquvchi from './Router/Oquvchi/Oquvchi';
// import Oqtuvchi from './Router/Oqtuvchi/Oqtuvchi';
// import Buglator from './Router/Bugaltor/Buglator';
// import Direktor from './Router/Direktor/Direktor';
// import Navbar from './Components/Navbr/Navbar';
// import Home from './Router/Home/Home';
// // import Main from './Components/Main/Main';

// function App() {const [isOpen, setIsOpen] = useState(false); 
//  const toggleSidebar = () => {  setIsOpen(!isOpen);};
//  console.log(toggleSidebar);
//   return (
//     <div className="apps container">
//        {/* <Main/> */}
//        <Navbar/>

// <Routes>
//   <Route  path='/' element={<Home/>}/>
//   <Route  path='Oquvchi' element={<Oquvchi/>}/>
//    <Route  path='/Oqtuvchi' element={<Oqtuvchi/>}/>
//    <Route  path='/Buglator' element={<Buglator/>}/>
//   <Route  path='/Direktor' element={<Direktor/>}/>
// </Routes>

//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';

// const ImageUploader = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       let reader = new FileReader();
//       reader.onload = (e) => {
//         setSelectedImage(e.target.result);
//       };
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleImageChange} />
//       {selectedImage && (
//         <img src={selectedImage} alt="Selected" style={{ width: '100px', marginTop: '20px' }} />
//       )}
//     </div>
//   );
// };

// export default ImageUploader;














// import React, { useState } from 'react';
// import { FaHome, FaSearch, FaBriefcase, FaInfoCircle, FaSignInAlt } from 'react-icons/fa';
// import './App.css';

// const App = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const [content, setContent] = useState('');

//   const handleMenuClick = (item) => {
//     setContent(item);
//     setSidebarOpen(false);
//   };

//   const sidebarStyle = {
//     width: isSidebarOpen ? '250px' : '50px',
//     height: '100vh',
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     transition: 'width 0.5s ease',
//     backgroundColor: '#333',
//     color: '#fff',
//     padding: '20px',
//     zIndex: 1,
//   };

//   const contentStyle = {
//     marginLeft: isSidebarOpen ? '250px' : '50px',
//     transition: 'margin-left 0.5s ease',
//     padding: '20px',
//   };

//   const menuItems = [
//     { label: 'Home', icon: <FaHome /> },
//     { label: 'Search', icon: <FaSearch /> },
//     { label: 'Services', icon: <FaBriefcase /> },
//     { label: 'About', icon: <FaInfoCircle /> },
//     { label: 'Login', icon: <FaSignInAlt /> }
//   ];

//   return (
//     <div>
//       <div style={sidebarStyle}>
//         <h2 style={{ display: 'none' }}>Sidebar</h2>
//         <ul>
//           {menuItems.map((item, index) => (
//             <li key={index} onClick={() => handleMenuClick(item.label)}>
//               <span  >{item.icon}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div style={contentStyle}>
//         <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
//           {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
//         </button>
//         <p>          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, enim? Itaque dolorum veniam deleniti voluptatibus beatae dolorem molestias, perferendis in ad deserunt voluptas? Quaerat, quis laborum eius facilis culpa quasi.</p>
//         <p>          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, enim? Itaque dolorum veniam deleniti voluptatibus beatae dolorem molestias, perferendis in ad deserunt voluptas? Quaerat, quis laborum eius facilis culpa quasi.</p>
//         <p>          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, enim? Itaque dolorum veniam deleniti voluptatibus beatae dolorem molestias, perferendis in ad deserunt voluptas? Quaerat, quis laborum eius facilis culpa quasi.</p>
//         <p>          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, enim? Itaque dolorum veniam deleniti voluptatibus beatae dolorem molestias, perferendis in ad deserunt voluptas? Quaerat, quis laborum eius facilis culpa quasi.</p>
//         <p>          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, enim? Itaque dolorum veniam deleniti voluptatibus beatae dolorem molestias, perferendis in ad deserunt voluptas? Quaerat, quis laborum eius facilis culpa quasi.</p>
//         <p>          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, enim? Itaque dolorum veniam deleniti voluptatibus beatae dolorem molestias, perferendis in ad deserunt voluptas? Quaerat, quis laborum eius facilis culpa quasi.</p>
//         <p>          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, enim? Itaque dolorum veniam deleniti voluptatibus beatae dolorem molestias, perferendis in ad deserunt voluptas? Quaerat, quis laborum eius facilis culpa quasi.</p>
//         <p>          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, enim? Itaque dolorum veniam deleniti voluptatibus beatae dolorem molestias, perferendis in ad deserunt voluptas? Quaerat, quis laborum eius facilis culpa quasi.</p>
//         <p>          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, enim? Itaque dolorum veniam deleniti voluptatibus beatae dolorem molestias, perferendis in ad deserunt voluptas? Quaerat, quis laborum eius facilis culpa quasi.</p>
//         <p>          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, enim? Itaque dolorum veniam deleniti voluptatibus beatae dolorem molestias, perferendis in ad deserunt voluptas? Quaerat, quis laborum eius facilis culpa quasi.</p>
//         <p>          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, enim? Itaque dolorum veniam deleniti voluptatibus beatae dolorem molestias, perferendis in ad deserunt voluptas? Quaerat, quis laborum eius facilis culpa quasi.</p>
//         <p>          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, enim? Itaque dolorum veniam deleniti voluptatibus beatae dolorem molestias, perferendis in ad deserunt voluptas? Quaerat, quis laborum eius facilis culpa quasi.</p>
//         <p>          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, enim? Itaque dolorum veniam deleniti voluptatibus beatae dolorem molestias, perferendis in ad deserunt voluptas? Quaerat, quis laborum eius facilis culpa quasi.</p>
//         <p>          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, enim? Itaque dolorum veniam deleniti voluptatibus beatae dolorem molestias, perferendis in ad deserunt voluptas? Quaerat, quis laborum eius facilis culpa quasi.</p>
//         <p>          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, enim? Itaque dolorum veniam deleniti voluptatibus beatae dolorem molestias, perferendis in ad deserunt voluptas? Quaerat, quis laborum eius facilis culpa quasi.</p>
//         <p>          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, enim? Itaque dolorum veniam deleniti voluptatibus beatae dolorem molestias, perferendis in ad deserunt voluptas? Quaerat, quis laborum eius facilis culpa quasi.</p>
//         <p>          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, enim? Itaque dolorum veniam deleniti voluptatibus beatae dolorem molestias, perferendis in ad deserunt voluptas? Quaerat, quis laborum eius facilis culpa quasi.</p>
//         <p>          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, enim? Itaque dolorum veniam deleniti voluptatibus beatae dolorem molestias, perferendis in ad deserunt voluptas? Quaerat, quis laborum eius facilis culpa quasi.</p>
//         <p>          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, enim? Itaque dolorum veniam deleniti voluptatibus beatae dolorem molestias, perferendis in ad deserunt voluptas? Quaerat, quis laborum eius facilis culpa quasi.</p>
//         <p>          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, enim? Itaque dolorum veniam deleniti voluptatibus beatae dolorem molestias, perferendis in ad deserunt voluptas? Quaerat, quis laborum eius facilis culpa quasi.</p>
//       </div>
//     </div>
//   );
// };

// export default App;
