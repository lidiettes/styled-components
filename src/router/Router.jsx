import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TopTitle from '../compontents/TopTitle/TopTitle'
import { Home } from '../pages/index'


const router = () => {
  return (
    <Routes>


        <Route path='/' element={<TopTitle />}>
            <Route index element={<Home />} />
        </Route>



    </Routes>
    
  )
}

export default router

