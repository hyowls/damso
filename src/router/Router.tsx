import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Mypage from '../pages/Mypage'
import NotFound from '../pages/NotFound'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/mypage/:id' element={<Mypage />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router