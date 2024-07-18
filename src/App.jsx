
import '../src/App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Archives from './pages/Archives'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/archives' element={<Archives/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Route>
    )
  )

  return (
      <RouterProvider router={router}></RouterProvider>
  )
}

export default App
