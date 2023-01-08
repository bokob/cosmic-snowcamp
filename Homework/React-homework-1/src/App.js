import './App.css';
import { Routes, Route, Link, useNavigate, Outlet, useParams, useLocation } from 'react-router-dom';
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
import { prependToMemberExpression } from '@babel/types';
import { Work, WorkItem } from './pages/Work';
import { Article, ArticleItem } from './pages/Article';
import { works, articles } from './data/data.js';

function App() {
  return (
    <div className="App">
      <div>{/*공통된 부분*/}</div>
      {/* <Introduce /> */}
      <Routes>
        <Route path="/" element={<Common />}>
          <Route path="/info" element={<Introduce />} />
          <Route path="/articles" element={<Article articles={articles} />} />
          <Route path="/works" element={<Work works={works} />} />
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

function TabContent() {
  return (
    <>
      <div className="tab_contents">
        <strong className="screen_out">작가프로필 하위메뉴</strong>
        <ul id="contentsTab" className="list_tab">
          <li className="on">
            <Link to="info" className="infoTab link_tab #info_open">
              <span className="txt_tab">작가소개</span>
            </Link>
          </li>
          <li className="">
            <Link to="articles" className="articleTab link_tab">
              <span className="txt_tab">글 (개수)</span>
            </Link>
          </li>
          <li className="">
            <Link to="works" className="magazineTab link_tab">
              <span className="txt_tab">작품 (개수)</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
