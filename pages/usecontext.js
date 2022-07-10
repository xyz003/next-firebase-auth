import React, { createContext, useState } from 'react'


const UserContext = createContext({
  user: null,
  setUserDetails: userDetails => { },
})

const UserProvider = ({ children }) => {

  const setUserDetails = (user) => {
    updateUserDetails(prevState => {
      return { ...prevState, user: user }
    })
  }

  const userState = {
    user: null,
    setUserDetails
  }

  const [userDetails, updateUserDetails] = useState(userState)

  return (
    <UserContext.Provider value={userDetails}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }
