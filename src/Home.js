import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'

import {useGlobalContext} from './context'

const Home = () => {
  const {toggleSidebar:toggle} = useGlobalContext();

  return (
    <button className="sidebar-toggle" onClick={toggle}>
      <i><FaBars /></i>
    </button>
  )
}

export default Home
