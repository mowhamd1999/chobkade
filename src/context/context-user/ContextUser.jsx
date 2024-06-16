import React, { useState } from 'react'
export const ContextUserProvider = React.createContext()
const ContextUser = ({children}) => {
    const [user , setUser] = useState({})
  return (
    <ContextUserProvider.Provider value={{user , setUser}}>
        {children}
    </ContextUserProvider.Provider>
  )
}

export default ContextUser
