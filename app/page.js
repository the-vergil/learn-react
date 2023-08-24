"use client"
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
  const [images, setImages] = useState([])
  
  const getImages = async () => {
    try {
      const response = await axios.get('https://picsum.photos/v2/list?page=5&limit=20')
      const data = response.data
      setImages(data)
    } 
    catch (error) {
      console.error("Error fetching pictures")
    }
  }
  return (
      <>
        <div className='flex flex-col justify-center items-center'>

          <button onClick={getImages} className='font-serif bg-teal-800 px-5 py-5 m-6 hover:bg-teal-400 hover:scale-125 transition duration-500 text-cyan-200'>Show pictures</button>

        </div>     

        <div>
          {images.map((elem, index) => {
            return <img key={index} src={elem.download_url} width={250} height={250} className='m-10 inline-block'/>
          })}
        </div>
      </>
  )
}

export default page