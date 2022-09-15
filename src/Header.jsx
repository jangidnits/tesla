import React,{useState} from 'react'
import Fade from 'react-reveal/Fade';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
   const [first, setfirst] = useState(false);
   let rightValue = (first)? 0:"-200px"



  function hide(e){
    e.preventDefault();
    setfirst(true)

  }
  return (
    
    <div className="header">
      <Fade top>
      <div className="nav">
        <div className="logo">
          <img src="tesla images/logo.svg" alt="" />

        </div>
        <div className="left_nav">
          <ul>
            <li><a href="">Model A</a></li>
            <li><a href="">Model B</a></li>
            <li><a href="">Model C</a></li>
            <li><a href="">Model D</a></li>
            <li><a href="">Model E</a></li>
            <li><a href="">Model F</a></li>


          </ul>

        </div>
        <div className="right_nav">
          <ul>
            <li><a href="">Shop</a></li>
            <li><a href="">Account</a></li>
            <li><a href="" onClick={hide}>Menu</a></li>
          </ul>
          
        </div>
      </div>
      </Fade>
    <ul className='scroll' style={{right:rightValue}}>
      <CloseIcon onClick={()=> setfirst(false)}></CloseIcon>
      
      <li><a href="">Model A</a></li>
      <li><a href="">Model B</a></li>
      <li><a href="">Model C</a></li>
      <li><a href="">Model D</a></li>
      <li><a href="">Model E</a></li>
      <li><a href="">Model F</a></li>
      <li><a href="">Accessories</a></li>
    </ul>



    </div>
    
  )
}

export default Header