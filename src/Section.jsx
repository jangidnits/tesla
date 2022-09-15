import React from 'react'
import HeadShake from 'react-reveal/HeadShake';
import Fade from 'react-reveal/Fade';


function Section(props) {
  let bg = {
    backgroundImage: `url('tesla images/${props.img}')`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'center'
  }
  return (
    <div className="section" style={bg} >
      <div className="description">
      <HeadShake>
      <h1>{props.title}</h1>
      </HeadShake>

      <Fade left>
      <p>{props.disc}</p>
      </Fade>
      </div>

      <div className="buttons">
      <Fade left>
        <a className='gray' href="">{props.button1}</a>
        </Fade>
        <Fade right>
        <a className='white' href="">{props.button1}</a>
        </Fade>
      </div>

    </div>
  )
}

export default Section