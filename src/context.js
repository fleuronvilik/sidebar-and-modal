import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

export const AppProvider = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <AppContext.Provider value={{
      sidebar, setSidebar, toggleSidebar
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}