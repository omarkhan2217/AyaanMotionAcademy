import { Routes, Route } from 'react-router-dom';
import { AboutUs, HomePage } from './pages';

export const App = () => {

  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>

  )
}