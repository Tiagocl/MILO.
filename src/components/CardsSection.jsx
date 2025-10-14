import React from 'react'
import Card from './Card'
import greenChair from '../assets/greenChair.png'
import greenChairZoom from '../assets/greenChairZoom.avif'
import yellowChair from '../assets/yellowChair.avif'
import yellowChairZoom from '../assets/yellowChairZoom.avif'
import whiteChair from '../assets/whiteChair.avif'
import whiteChairZoom from '../assets/whiteChairZoom.jpg'


const CardsSection = () => {
  return (
    <div className='flex gap-[25px] mx-auto max-w-[93%] mb-[50px]'>
        <Card image={greenChair} name="Grind" hoverImage={greenChairZoom} price="$400" category="CHAIR" />
        <Card image={yellowChair} name="Areo" hoverImage={yellowChairZoom} price="$330" category="ARMCHAIR" />
        <Card image={whiteChair} name="Andy" hoverImage={whiteChairZoom} price="$160" category="CHAIR" />
    </div>
  )
}

export default CardsSection