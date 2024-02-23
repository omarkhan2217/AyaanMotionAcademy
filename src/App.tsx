import { Routes, Route } from 'react-router-dom';
import { AboutUS, ContactUs, HomePage, OurAchievers,OurFaculty , PrivacyPolicy,TermsAndPolicy,CareerGuidance, OurBatches,Foundationbatch } from './pages';

export const App = () => {
  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-achievers" element={<OurAchievers />} />
        <Route path="/our-faculty" element={<OurFaculty/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/terms-and-policy" element={<TermsAndPolicy/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/about-us" element={<AboutUS/>}/>
        <Route path="/career-guidance" element={<CareerGuidance/>}/>
        <Route path="/our-batches" element={<OurBatches/>}/>
        <Route path="/our-batches/foundation-batch" element={<Foundationbatch/>}/>

      </Routes>
    </div>
  )
}