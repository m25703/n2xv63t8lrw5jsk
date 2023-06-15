import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navbarList}>
        <li style={styles.navbarItem}><a href="/" style={styles.navbarLink}>Home</a> &nbsp;&nbsp;&nbsp;&nbsp;</li> 
        <li style={styles.navbarItem}><a href="/createCard" style={styles.navbarLink}>Create Card</a> &nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li style={styles.navbarItem}><a href="/createCard" style={styles.navbarLink}> Options&nbsp; </a> &nbsp;&nbsp;&nbsp;&nbsp;</li>
      </ul>
    </nav>
  );
};

const styles = {
    navbar: {
      zIndex: '2',
      position: 'relative',
      backgroundColor: '#333',
      padding: '10px',
    },
    navbarList: {
        color: '#fff',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      display: 'flex'
    },
    navbarItem: {
        color: '#fff',
      position: 'relative',
      marginRight: '10px',
    },
    navbarLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
    },
    dropdown: {
        color: '#fff',
      zIndex: '2',
      position: 'absolute',
      top: '100%',
      left: 0,
      fontSize: '12px',
      backgroundColor: '#333',
      listStyleType: 'none',
      padding: '1vw',
      margin: 0,
      display: 'none',
    },
    navbarItemHover: {
        color: '#fff',
      display: 'block',
    },
  };
  

export default Navbar;
