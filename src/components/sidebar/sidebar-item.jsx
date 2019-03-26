import React from 'react';
// <div className="sidebar-icon">{icon}</div>
const SidebarItem = ({icon, content, handleSubmit}) => {
  return(
    <div className="sidebar-item">

      <a className="sidebar-text" onClick={handleSubmit(content)}>{content}</a>
    </div>
  )
}

export default SidebarItem;

// <svg className="sidebar-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" aria-hidden="true"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
// <rect width="3" height="1" fill="#fff">
// </rect>
// <rect y="4" width="3" height="1" fill="#fff"></rect><rect y="8" width="3" height="1" fill="#fff"></rect><rect x="5" width="10" height="1" fill="#fff"></rect><rect x="5" y="4" width="10" height="1" fill="#fff"></rect><rect x="5" y="8" width="10" height="1" fill="#fff">
// </rect>
// </g></g></svg>
