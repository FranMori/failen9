import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute () {
  const isAuthenticated = localStorage.user

  if(isAuthenticated) {
  return <Outlet />

  } else {
    return <Navigate to ='/login' />
  }

}
export default PrivateRoute