import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Survey from './pages/Survey/Survey'
import SurveyNotice from './components/SurveyNotice/SurveyNotice'
import Recommendation from './pages/Recommendation/Recommendation'
import { useState, useEffect } from 'react'

function App() {
  const [showSurveyNotice, setShowSurveyNotice] = useState()

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

  // Add delete icon/function to SurveyNotice;

  return (
    <BrowserRouter>
        <div className="mobile-body">
          {showSurveyNotice && 
            <SurveyNotice handleSurveyNoticeEnd={handleSurveyNoticeEnd} />
          }
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Recommendation />} />
              <Route path="/survey" element={<Survey />} />
              <Route path="/recommendation" element={<p>Recommendation</p>} />
            </Routes>
          </main>
        </div>
    </BrowserRouter>
  )
}

export default App
