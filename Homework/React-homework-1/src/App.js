import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import ServiceHeaderHome from './components/ServiceHeaderHome';
import WrapSideMenu from './components/WrapSideMenu';
import WrapHome from './components/WrapHome';
import Layer from './components/Layer';
import './css/B.Font.min.css';
import './css/B.Home.min.css';
import './css/B.Message.min.css';
import './css/B.min.css';

function App() {
  return (
    <div className="App">
      <div>
        {/*공통된 부분*/}
        <ServiceHeaderHome />
        <WrapSideMenu />
        <WrapHome />
        <Layer />
      </div>

      <Routes>
        <Route path="/" element={<div>ㅋ</div>} />
        <Route path="1" element={<div>1</div>} />
        <Route path="*" element={<div>404임 꺼지셈</div>} />
      </Routes>
    </div>
  );
}

export default App;
