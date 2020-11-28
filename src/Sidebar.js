import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'

import {useGlobalContext} from './context'

const Sidebar = () => {
  const {sidebar, toggleSidebar:toggle} = useGlobalContext();

  return (
    <aside className={`sidebar ${sidebar && "show-sidebar"}`}>
      <header className="sidebar-header">
        <img className="logo" src={logo} alt=""/>
        <button className="close-btn" onClick={toggle} aria-label="Close Sidebar">
          <FaTimes />
        </button>
      </header>

      <nav className="links">
        {links.map(({ id, url, text, icon }) => {
          return (
            <a key={id} href={url}>
              {icon}{text}
            </a>
          )
        })}
      </nav>

      <nav className="social-icons">
        {social.map(({ id, icon, url, text }) => {
          return (
            <a key={id} href={url} title={text}>
              {icon}
            </a>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
