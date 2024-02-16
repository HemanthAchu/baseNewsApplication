import React from 'react'

export default function NewsItems({title,description,src,url}) {
  return (
   <div className='d-inline-block'>
     <div className="card m-3 p-2 bg-dark text-light " style={{maxWidth:"340px", height:"500px"}}>
    <img src={src} style={{height:"250px"}} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title?.slice(0,50)}</h5>
      <p className="card-text">{description?.slice(0,100)}</p>
      <a href={url} className="btn btn-primary">Read More</a>
    </div>
  </div>
   </div>
  )
}
