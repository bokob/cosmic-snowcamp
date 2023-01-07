import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>안녕</div>
      <Routes>
        <Route path="/" element={<div>ㅋ</div>} />
        <Route path="/1" element={<div>1</div>} />
      </Routes>
    </div>
  );
}

export default App;
