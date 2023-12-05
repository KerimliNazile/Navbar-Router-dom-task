import { useState } from 'react'
import './App.css'
import Layout from './layout/MainLayout'
import Contact from './components/Contact'
import PageImage from './components/PageImage'
import Clearing from './components/Clearing'
import Comment from './components/Comment'
import PageWithDisabled from './components/PageDisabled'
import PageMarkup from './components/PageMarkup'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import ShortcodesPage from './pages/ShortcodesPage'
import LanguagePage from './pages/LanguagesPage'
import AboutPage from './pages/AboutPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/gallery' element={<GalleryPage/>}/>
      <Route path='/shortcodes' element={<ShortcodesPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/language' element={<LanguagePage/>}/>
      <Route path='/markup' element={<PageMarkup/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/image' element={<PageImage/>}/>
      <Route path='/clearing' element={<Clearing/>}/>
      <Route path='/comments' element={<Comment/>}/>
      <Route path='/disabled' element={<PageWithDisabled/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
