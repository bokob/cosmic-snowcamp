import "./App.css";
import { InputGroup, Button, Form } from "react-bootstrap";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import Search from "./pages/Search.js";
import Chart from "./pages/Chart.js";
import key from "./ignore/API_KEY.js";
import { useState } from "react";

function App() {
  let [selectFood, setSelectFood] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main setSelectFood={setSelectFood} />}>
          <Route path="chart" element={<Chart selectFood={selectFood} />} />
        </Route>
        <Route path="*" element={<>404임 꺼지셈</>} />
      </Routes>
    </div>
  );
}

function Main(props) {
  let [keyword, setKeyword] = useState(""); // 검색 키워드
  let [foodList, setFoodList] = useState([]); // 검색결과
  let [loading, setLoading] = useState(null); // 로딩 상태
  let [show, setShow] = useState(false); // <Search/> 보여줄지 결정하는 상태
  let data, foodLength;

  let url = `http://openapi.foodsafetykorea.go.kr/api/${key}/I2790/json/1/1000/DESC_KOR="${keyword}"`;

  const navigate = useNavigate();

  async function Request() {
    setLoading(true);
    try {
      const response = await fetch(url, { method: "GET" });
      data = await response.json();

      let copy = [];
      setFoodList(copy);
      // console.log("다 비움");
      // console.log(foodList);

      if (foodLength > 0) {
        setShow(true);
      }

      for (let i = 0; i < data["I2790"]["total_count"]; i++) {
        let temp = [
          data["I2790"]["row"][i]["DESC_KOR"],
          data["I2790"]["row"][i]["FOOD_CD"],
          data["I2790"]["row"][i]["GROUP_NAME"],
          data["I2790"]["row"][i]["MAKER_NAME"],
          data["I2790"]["row"][i]["NUTR_CONT1"],
          data["I2790"]["row"][i]["NUTR_CONT2"],
          data["I2790"]["row"][i]["NUTR_CONT3"],
          data["I2790"]["row"][i]["NUTR_CONT4"],
        ];

        copy.push(temp);
      }
      //console.log(foodList);
      foodList = [...copy];
      setFoodList(foodList);
      setLoading(false);
    } catch (error) {
      window.alert("에러");
    }
    // console.log(data);
  }

  return (
    <>
      <header style={{ textAlign: "left", fontSize: "30px" }}>음식 영양 성분 검색기</header>
      <InputGroup className="mb-3">
        <Form.Control aria-label="입력" id="keyword" onChange={(e) => setKeyword(e.target.value)} />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => {
            navigate("/");
            Request();
          }}
        >
          검색
        </Button>
      </InputGroup>
      {loading ? <div>검색 중입니다</div> : <Search foodList={foodList} setSelectFood={props.setSelectFood} />}
      <Outlet></Outlet>
    </>
  );
}

export default App;
