import React from 'react'
import './Home.css'
import CusNavbar from '../../Components/Common/CusNavbar/CusNavbar'
import CustomCurousal from '../../Components/CustomCurousal/CustomCurousal'
import Blocks from '../../Components/Blocks/Blocks'
import UspBlocks from '../../Components/UspBlocks/UspBlocks'

function Home() {
  return (
    <div>
      <CusNavbar/>
      <CustomCurousal/>
      <Blocks/>
      <UspBlocks/>
    </div>
  )
}

export default Home
