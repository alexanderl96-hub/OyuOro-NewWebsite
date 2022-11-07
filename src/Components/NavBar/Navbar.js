import React from 'react'
import { FaHouseUser,} from 'react-icons/fa';
// FaHamburger FaHouseDamage, FaHouseUser,
const Navbar = () => {
  return (
    <div style={{height: '54px', border: '1px solid black', backgroundColor: '#0000005c', padding: '10px', display: 'flex', position: 'sticky', top: '0', pointerEvents: 'auto'}}>
        <h1 style={{fontFamily: 'serif', fontStyle: 'oblique', marginTop: '7px', position: 'absolute'}}>OYU ORO</h1>
        <div style={{display: 'flex',  margin: 'auto',  marginTop: '-3px'}}>     
            <h3>Companies</h3>
        </div>
        <div ><FaHouseUser  style={{fontSize: '20px', marginTop: '14px', marginRight: '15px' }}/> </div>
    </div>
  )
}

export default Navbar