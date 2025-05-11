import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Survey from './pages/Survey/Survey'
import SurveyNotice from './components/SurveyNotice/SurveyNotice'
import Recommendation from './pages/Recommendation/Recommendation'
import Home from './pages/Home/Home'
import Dashboard from "./pages/Dashboard/Dashboard";
import { useState, useEffect } from 'react'

function App() {
  const [showSurveyNotice, setShowSurveyNotice] = useState(null)

  useEffect(() => {
    const storedNoticeAction = sessionStorage.getItem('showNotice')
    if (storedNoticeAction === 'false') {
      setShowSurveyNotice(false)
    } else {
      setShowSurveyNotice(true)
    }
  }, [])

  const handleSurveyNoticeEnd = () => {
    sessionStorage.setItem('showNotice', 'false')
  }


  return (
    <BrowserRouter>
        <div className="mobile-body">
          {showSurveyNotice && 
            <SurveyNotice handleSurveyNoticeEnd={handleSurveyNoticeEnd} />
          }
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/survey" element={<Survey />} />
              <Route path="/recommendation" element={<Recommendation />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
