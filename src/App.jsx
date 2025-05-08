import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <BrowserRouter>
        <div className="mobile-body">
          <Routes>
            <Route path="/" element={<Header />} />
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
