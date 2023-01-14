import "./App.css";
import { InputGroup, Button, Form } from "react-bootstrap";
import { Routes, Route, Outlet } from "react-router-dom";
import Search from "./pages/Search.js";
import Chart from "./pages/Chart.js";
import key from "./ignore/API_KEY.js";
import { useState } from "react";

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
  let [food, setFood] = useState("");
  console.log(food);
  let data;
  return (
    <>
      <header style={{ textAlign: "left", fontSize: "30px" }}>
        음식 영양 성분 검색기
      </header>
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="입력"
          id="keyword"
          onChange={(e) => setFood(e.target.value)}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => {
            // let url =
            //   "http://openapi.foodsafetykorea.go.kr/api/" +
            //   key +
            //   '/I2790/xml/1/10/DESC_KOR="김치"';

            let url = `http://openapi.foodsafetykorea.go.kr/api/${key}/I2790/json/1/10/DESC_KOR="${food}"`;

            // console.log(url);

            async function Request() {
              const response = await fetch(url, { method: "GET" });
              data = await response.json();
            }

            Request();
            // console.log(data["I2790"]); 정상작동 코드
            console.log(data["I2790"]);
            console.log(data["I2790"]["row"].length);
            // console.log(JSON.parse(data)); 질문할 코드 [object Object]
          }}
        >
          검색
        </Button>
      </InputGroup>
      <div>{data}</div>
      <Outlet></Outlet>
    </>
  );
}

export default App;
