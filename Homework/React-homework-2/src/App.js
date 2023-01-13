import "./App.css";
import { InputGroup, Button, Form } from "react-bootstrap";
import Search from "./pages/Search.js";
import Chart from "./pages/Chart.js";
import { Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="search" element={<Search />} />
          <Route path="chart" element={<Chart />} />
        </Route>
        <Route path="*" element={<>404임 꺼지셈</>} />
      </Routes>
    </div>
  );
}

function Main() {
  return (
    <>
      <header style={{ textAlign: "left", fontSize: "30px" }}>
        음식 영양 성분 검색기
      </header>
      <InputGroup className="mb-3">
        <Form.Control aria-label="입력" id="keyword" />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => {}}
        >
          검색
        </Button>
      </InputGroup>
      <Outlet></Outlet>
    </>
  );
}

export default App;
