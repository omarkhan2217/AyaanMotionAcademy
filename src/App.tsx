import { Routes, Route } from 'react-router-dom';
import { HomePage, OurAchievers } from './pages';

export const App = () => {
  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-achievers" element={<OurAchievers />} />
      </Routes>
    </div>

  )
}