import React from 'react';
import './SaitBar.css'; // CSS faylining yo'lini tekshiring
import { FaUser, FaLaptop, FaClone, FaStar, FaTrash } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

function SaitBar() {
  return (
    <div className=" container  sidebar">
      <aside className="menu" id="menu app">
      <h4>Sidebar</h4>
        <NavLink to="/my-drive" className="span" activeClassName="active">
          <FaUser /> My drive
        </NavLink>
        <NavLink to="/computers" className="span" activeClassName="active">
          <FaLaptop /> Computers
        </NavLink>
        <NavLink to="/shared-with-me" className="span" activeClassName="active">
          <FaClone /> Shared with me
        </NavLink>
        <NavLink to="/starred" className="span" activeClassName="active">
          <FaStar /> Starred
        </NavLink>
        <NavLink to="/trash" className="span" activeClassName="active">
          <FaTrash /> Trash
        </NavLink>
         
      </aside>
    </div>
  );
}

export default SaitBar;

 

 
// Modal.js

// import React from 'react';
// import { FaUser, FaLaptop, FaClone, FaStar, FaTrash } from 'react-icons/fa';

// function Modal({ toggleModal }) {
//   return (
//     <div className="modal">
//       <button onClick={toggleModal}>Close</button>
//       <aside className="menu">
//         <p>Menu</p>
//         <span className="span">
//           <FaUser />
//           My drive
//         </span>
//         <span className="span">
//           <FaLaptop />
//           Computers
//         </span>
//         <span className="span">
//           <FaClone />
//           Shared with me
//         </span>
//         <span className="span">
//           <FaStar />
//           Starred
//         </span>
//         <span className="span">
//           <FaTrash />
//           Trash
//         </span>
//       </aside>
//     </div>
//   );
// }
 
// export default Modal;
