import { Routes, Route } from 'react-router-dom';
import { ContactUs, HomePage, OurAchievers,OurFaculty , PrivacyPolicy,TermsAndPolicy} from './pages';

export const App = () => {
  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-achievers" element={<OurAchievers />} />
        <Route path="/our-Faculty" element={<OurFaculty/>}/>
        <Route path="/Privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/Terms-and-Policy" element={<TermsAndPolicy/>}/>
        <Route path="/contact-Us" element={<ContactUs/>}/>
      </Routes>
    </div>
  )
}