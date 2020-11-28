import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

export const AppProvider = (props) => {
  const [modal, setModal] = useState(false);

  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);

  const value = {
    modal,
    sidebar,
    setSidebar,
    toggleSidebar,
    setModal
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}