import React from 'react'
import { FaBars } from 'react-icons/fa'

import {useGlobalContext} from './context'

const Home = () => {
  const {
    modal,
    setModal,
    toggleSidebar:toggle
  } = useGlobalContext();

  return (
    <>
      <button className="sidebar-toggle" onClick={toggle} aria-label="Show Sidebar">
        <i><FaBars /></i>
      </button>
      {!modal &&
        <button className="btn" onClick={() => setModal(!modal)}>
          Show Modal
        </button>
      }
    </>
  )
}

export default Home
