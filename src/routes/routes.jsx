import { Route, Routes } from 'react-router-dom'
import Signup from '../pages/SignUp/signUp'
import Home from '../pages/Home/home'

export default function RoutesMainApp() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="register" element={<Signup />} />
      </Route>
    </Routes>
  )
}
