import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Survey from './pages/Survey/Survey'

function App() {

  return (
    <BrowserRouter>
        <div className="mobile-body">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Survey />} />
              <Route path="/recommendation" element={<p>Recommendation</p>} />
            </Routes>
          </main>
        </div>
    </BrowserRouter>
  )
}

export default App
