import { Routes, Route } from 'react-router-dom';
import { AboutUS, ContactUs, HomePage, OurAchievers,OurFaculty , PrivacyPolicy,TermsAndPolicy,CareerGuidance, OurBatches,Foundationbatch, RankersBatch, TargetBatch, ScholarBatch, Lakshyabatch, StarBatch } from './pages';

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
        <Route path="/our-batches/star-batch" element={<StarBatch/>}/>
        <Route path="/our-batches/lakshya-batch" element={<Lakshyabatch/>}/>
        <Route path="/our-batches/scholar-batch" element={<ScholarBatch/>}/>
        <Route path="/our-batches/target-batch" element={<TargetBatch/>}/>
        <Route path="/our-batches/rankers-batch" element={<RankersBatch/>}/>
      </Routes>
    </div>
  )
}