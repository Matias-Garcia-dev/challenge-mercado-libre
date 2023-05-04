import React , { useState } from 'react'
import Header from '../components/common/Header'
import { Outlet } from 'react-router-dom'

const  SearchBox = () => {

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default SearchBox