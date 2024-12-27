
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <div className='container grid place-items-center min-h-screen'>
        <Outlet/>
    </div>
  )
}

export default Auth