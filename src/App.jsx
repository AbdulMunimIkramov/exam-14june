import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './components/Home/Home'
import { Shop } from './components/Shop/Shop'

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>

    </>
  )
}