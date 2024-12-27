import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import cat from '../public/cat.png'
import ChatBox from './components/messages/ChatBox';
const App = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path='/auth' element={<Auth />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>

      {/* Home Routes */}
      <Route path='/' element={<Home />}>
        <Route index element={<ChatBox type='all' />} />
        <Route path='direct' element={<ChatBox type='direct' />} />
        <Route path='group' element={<ChatBox type='group' />} />
      </Route>

      {/* 404 Page */}
      <Route path='*' element={
        <div className="h-screen w-screen bg-gray-100 flex items-center">
          <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
            <div className="max-w-md">
              <div className="text-5xl font-dark font-bold">404</div>
              <p className="text-2xl md:text-3xl font-light leading-normal">
                Sorry we couldn't find this page.
              </p>
              <p className="mb-8">
                But don't worry, you can find plenty of other things on our homepage.
              </p>
                <button onClick={() => window.history.back()} className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
                Go back
                </button>
            </div>
            <div className="max-w-lg">
              <img src={cat} alt="" className=''/>
            </div>
          </div>
        </div>
      } />
    </Routes>
  );
}

export default App;
