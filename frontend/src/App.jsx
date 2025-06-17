import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import EditPage from './pages/EditPage';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vehicles/:id" element={<DetailPage />} />
        <Route path="/vehicles/:id/edit" element={<EditPage />} /> 
        <Route path="/create" element={<EditPage />} /> 
      </Routes>
  );
}