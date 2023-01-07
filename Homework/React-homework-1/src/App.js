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
import Introduce from './pages/Introduce';
import { useState } from 'react';

function App() {
  let [tab, setTab] = useState(0);

  return (
    <div className="App">
      <div>{/*공통된 부분*/}</div>
      {/* <Introduce /> */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Common />
            </div>
          }
        >
          <Route path="info" element={<div>소개</div>} />
          <Route path="articles" element={<div>글</div>} />
          <Route path="works" element={<div>사진</div>} />
        </Route>
        <Route path="*" element={<div>404임 꺼지셈</div>} />
      </Routes>
    </div>
  );
}

function Common() {
  return (
    <>
      <ServiceHeaderHome />
      <WrapSideMenu />
      <WrapHome />
      <Layer />
      <TabContent />
      <Outlet></Outlet>
    </>
  );
}

function Debug() {
  console.log('확인');
  return <div>확인</div>;
}

function TabContent(props) {
  return (
    <>
      <div className="tab_contents">
        <strong className="screen_out">작가프로필 하위메뉴</strong>
        <ul id="contentsTab" className="list_tab">
          <li>
            <Link to="info" className="infoTab link_tab #info_open">
              <span className="txt_tab">작가소개</span>
            </Link>
          </li>
          <li className="articles">
            <Link to="articles" className="articleTab link_tab">
              <span className="txt_tab">글 (개수)</span>
            </Link>
          </li>
          <li>
            <Link to="works" className="magazineTab link_tab">
              <span className="txt_tab">작품 (개수)</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* 구분선 밑부분 부터 main 태그   article 들어가는 곳임*/}
    </>
  );
}

export default App;
