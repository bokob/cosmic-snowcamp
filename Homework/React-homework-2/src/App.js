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
          <Route path="chart" element={<Chart />} />
        </Route>
        <Route path="*" element={<>404임 꺼지셈</>} />
      </Routes>
    </div>
  );
}

function Main() {
  let [food, setFood] = useState(""); // 검색 음식
  let [foodList, setFoodList] = useState([]);
  let [loading, setLoading] = useState(null);
  let [show, setShow] = useState(false);
  let data, foodLength;

  let url = `http://openapi.foodsafetykorea.go.kr/api/${key}/I2790/json/1/1000/DESC_KOR="${food}"`;

  async function Request() {
    setLoading(true);
    try {
      const response = await fetch(url, { method: "GET" });
      data = await response.json();

      foodLength = data["I2790"]["total_count"];

      let copy = [];
      setFoodList(copy);
      console.log("다 비움");
      console.log(foodList);

      if (foodLength > 0) {
        setShow(true);
      }

      for (let i = 0; i < foodLength; i++) {
        // console.log(data["I2790"]["row"][i]["DESC_KOR"]);
        // console.log(data["I2790"]["row"][i]["FOOD_CD"]);
        // console.log(data["I2790"]["row"][i]["GROUP_NAME"]);
        // console.log(data["I2790"]["row"][i]["MAKER_NAME"]);
        // console.log(data["I2790"]["row"][i]["NUTR_CONT1"]);
        // console.log(data["I2790"]["row"][i]["NUTR_CONT2"]);
        // console.log(data["I2790"]["row"][i]["NUTR_CONT3"]);
        // console.log(data["I2790"]["row"][i]["NUTR_CONT4"]);

        let foodName = data["I2790"]["row"][i]["DESC_KOR"];
        let foodCode = data["I2790"]["row"][i]["FOOD_CD"];
        let foodGroup = data["I2790"]["row"][i]["GROUP_NAME"];
        let makerName = data["I2790"]["row"][i]["MAKER_NAME"];
        let calorie = data["I2790"]["row"][i]["NUTR_CONT1"];
        let carbohydrate = data["I2790"]["row"][i]["NUTR_CONT2"];
        let protein = data["I2790"]["row"][i]["NUTR_CONT3"];
        let fat = data["I2790"]["row"][i]["NUTR_CONT4"];

        let temp = [
          foodName,
          foodCode,
          foodGroup,
          makerName,
          calorie,
          carbohydrate,
          protein,
          fat,
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
            Request();
            // console.log(data["I2790"]); 정상작동 코드
            // console.log(data["I2790"]);

            //console.log(data["I2790"]["total_count"]);

            // console.log(data["I2790"]["row"][0]);
            // console.log(foodLength);
            // console.log(JSON.parse(data)); 질문할 코드 [object Object]
          }}
        >
          검색
        </Button>
      </InputGroup>
      {loading ? (
        <div>검색 중입니다</div>
      ) : (
        <Search show={show} setShow={setShow} foodList={foodList} />
      )}
      <Outlet></Outlet>
    </>
  );
}

export default App;
