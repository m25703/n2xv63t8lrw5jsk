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
        <li style={styles.navbarItem}><a href="/about" style={styles.navbarLink}>About</a> &nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li style={styles.navbarItem}><a href="/createCard" style={styles.navbarLink}>Create Card</a> &nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li
          style={styles.navbarItem}
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownToggle}
        >
          <a href="/chapters" style={styles.navbarLink}>Choose Chapter &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
          <ul style={{ ...styles.dropdown, display: isDropdownVisible ? 'block' : 'none', color:'white' }}>
            <li><a style={{color:'white', textDecoration:'none'}} href="/chapters/chapter1">CROP PRODUCTION AND MANAGEMENT</a></li> <hline></hline>
            <li><a style={{color:'white', textDecoration:'none'}} href="/chapters/chapter2">MICROORGANISMS : FRIEND AND FOE </a></li>
            <li><a style={{color:'white', textDecoration:'none'}} href="/chapters/chapter3">COAL AND PETROLEUM</a></li>
            <li><a style={{color:'white', textDecoration:'none'}} href="/chapters/chapter4">COMBUSTION AND FLAME</a></li>
            <li><a style={{color:'white', textDecoration:'none'}} href="/chapters/chapter5">CONSERVATION OF PLANTS AND ANIMALS</a></li>
            <li><a style={{color:'white', textDecoration:'none'}} href="/chapters/chapter6">REPRODUCTION IN ANIMALS</a></li>
            <li><a style={{color:'white', textDecoration:'none'}} href="/chapters/chapter7">REACHING THE AGE OF ADOLESCENCE</a></li>
            <li><a style={{color:'white', textDecoration:'none'}} href="/chapters/chapter8">FORCE AND PRESSURE</a></li>
            <li><a style={{color:'white', textDecoration:'none'}} href="/chapters/chapter9">FRICTION</a></li>
            <li><a style={{color:'white', textDecoration:'none'}} href="/chapters/chapter10">SOUND</a></li>
            <li><a style={{color:'white', textDecoration:'none'}} href="/chapters/chapter11">CHEMICAL EFFECTS OF ELECTRIC CURRENT</a></li>
            <li><a style={{color:'white', textDecoration:'none'}} href="/chapters/chapter12">SOME NATURAL PHENOMENA</a></li>
            <li><a style={{color:'white', textDecoration:'none'}} href="/chapters/chapter13">LIGHT</a></li>
          </ul>
        </li>
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
