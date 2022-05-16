import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'

export const GifExpertApp = () => {
  const [categories,setCategories] = useState([''])
  return (
    <>
        <h2 className='title'>Gif expert app</h2>
        <AddCategory setCategories={setCategories} />
        <hr />
        <hr />
        <ol>
          {
            categories.map((category) => <GifGrid category={category} key={category} />)
          }
        </ol>
    </>
  )
}
