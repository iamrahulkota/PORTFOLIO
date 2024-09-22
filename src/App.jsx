import { Routes, Route } from 'react-router-dom'
import Home from './Screens/Home'
import About from './Screens/About'
import Project from './Screens/Project'
import Contact from './Screens/Contact'

function App() {

  return (
    <>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact  />} />
        </Routes>

    </>
  )
}

export default App
