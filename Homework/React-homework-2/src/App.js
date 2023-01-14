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
  let [food, setFood] = useState(""); // 검색 음식
  let data, foodLength;

  let foodList = [];

  let url = `http://openapi.foodsafetykorea.go.kr/api/${key}/I2790/json/1/100/DESC_KOR="${food}"`;

  async function Request() {
    const response = await fetch(url, { method: "GET" });
    data = await response.json();

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
            foodLength = data["I2790"]["row"].length;
            console.log(foodLength);

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

              foodList.push(temp);
            }

            console.log(foodList);

            // console.log(data["I2790"]["row"][0]);
            // console.log(foodLength);
            // console.log(JSON.parse(data)); 질문할 코드 [object Object]
          }}
        >
          검색
        </Button>
      </InputGroup>
      {/* {data["I2790"]["row"].map(function (a, i) {
        return <div>안녕</div>;
      })} */}
      <Outlet></Outlet>
    </>
  );
}

export default App;
