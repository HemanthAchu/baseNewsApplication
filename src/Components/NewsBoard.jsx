import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'


export default function NewsBoard() {

    const [articles,setarticles]=useState([])
useEffect(()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=9b9ad474b5e24b338a616a4a0bf51c2c`
    fetch(url).then(response=>response.json()).then(data=>setarticles(data.articles))
   console.log(articles);
})



  return (
    <div style={{backgroundColor:"gray"}}>
      <h2 className='text-center p-3'>Latest <spam className='bg-danger text-white rounded p-2'  >News</spam> </h2>
    
    {articles?.map((news,index)=>(
  <NewsItems  key={index}  title={news.title}  description={news.description}  src={news.urlToImage}  url={news.url} />
    ))}
    </div>
  )
}
