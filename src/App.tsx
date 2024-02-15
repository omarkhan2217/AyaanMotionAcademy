import { Routes, Route } from 'react-router-dom';
import { AboutUS, ContactUs, HomePage, OurAchievers,OurFaculty , PrivacyPolicy,TermsAndPolicy,CareerGuidance} from './pages';

export const App = () => {
  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-achievers" element={<OurAchievers />} />
        <Route path="/our-Faculty" element={<OurFaculty/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/terms-and-Policy" element={<TermsAndPolicy/>}/>
        <Route path="/contact-Us" element={<ContactUs/>}/>
        <Route path="/about-Us" element={<AboutUS/>}/>
        <Route path="/career-Guidance" element={<CareerGuidance/>}/>
      </Routes>
    </div>
  )
}