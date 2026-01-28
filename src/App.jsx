import './App.css'
import DownloadPage from './component/DownloadPage'
import LandingPage from './component/LandingPage'
import { BrowserRouter, Route, Routes } from "react-router";
import PrivacyPolicy from './component/PrivacyPolicy';
import Layout from './component/Layout';
import Home from './component/Home';

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}



export default App
