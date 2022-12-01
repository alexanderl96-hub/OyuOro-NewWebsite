import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/logo.svg'
import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'
import navIcon4 from '../../assets/img/nav-icon4.svg'


 const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);


  useEffect(()=>{
    const onScroll = () => {
      if(window.scrollY > 50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  },[])

const onUpdateActiveLink = (value) => {
     setActiveLink(value)
}

  return (
   <Navbar  expand="md" className={scrolled ? 'scrolled' : ''}>
     <Container style={{display: 'flex', flexDirection: 'row', }}>
       <Navbar.Brand href="#home">
         <img src={logo} alt='Logo'  />
       </Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav">
           <span className="navbar-toggler-icon"></span>
       </Navbar.Toggle>
       <Navbar.Collapse id="basic-navbar-nav" style={{display: 'flex', alignItems: 'center', marginLeft:'40%' }} >
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#cuba" className={activeLink === 'cuba' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('cuba')}>Cuba</Nav.Link>
            <Nav.Link href="#newyork" className={activeLink === 'newyork' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('newyork')}>NewYork</Nav.Link>
            <Nav.Link href="#galery" className={activeLink === 'galery' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('galery')}>Galery</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
               <a href="https://www.facebook.com/OYUOROAFROCUBANEXPERIMENTALDANCEENSEMBLE"><img src={navIcon1} alt='' /></a>
               <a href="https://www.facebook.com/OYUOROAFROCUBANEXPERIMENTALDANCEENSEMBLE"><img src={navIcon2}  alt='' /></a>
               <a href="https://www.facebook.com/OYUOROAFROCUBANEXPERIMENTALDANCEENSEMBLE"><img src={navIcon3}  alt='' /></a>
               <a href="https://www.facebook.com/OYUOROAFROCUBANEXPERIMENTALDANCEENSEMBLE"><img src={navIcon4}  alt=''  /></a>
            </div>
            <button className="vvd" onClick={()=> console.log('connect')} style={{cursor:'pointer'}}><span>Let's Connect</span></button>
          </span>
       </Navbar.Collapse>
     </Container>
   </Navbar>
  )
}

export default NavBar