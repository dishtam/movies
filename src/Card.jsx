import React from 'react'

const Cards = (props) => {
  return (
    <>
      <div className='box'>
        <div className="card">
          <img src={props.imgsrc} alt="img" className="card-image" />
          <div className="card-cotent">
            <h2 className="card-title">{props.title}</h2>
            <p><a href={props.link} className='card-link' target='_blank'>WATCH NOW</a></p>
          </div>
        </div>
        </div>
    </>
  )
}

export default Cards
