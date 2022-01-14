import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}

export const TypeAssertionUser = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser)
  const handleLogin = () => {
    setUser({
      name: 'ifrat',
      email: 'ifrat@example.com'
    })
  }
//   const handleLogout = () => {
//     setUser()
//   }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is {user.name}</div>
    </div>
  )
}