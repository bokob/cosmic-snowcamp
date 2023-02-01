import './App.css';

function App() {
  async function AddFood(addFoodName, foodDescription) {
    let url = 'http://127.0.0.1:8000/addfood';
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // 이거 없으면 오류남
      // https://www.youtube.com/watch?v=IiiC-h_GPtk 참고
      body: JSON.stringify({
        food_name: addFoodName,
        description: foodDescription,
      }),
    });

    let result = response.json();
    console.log(result);
  }

  async function DeleteFood(deleteFoodName) {
    let url = 'http://127.0.0.1:8000/deletefood';
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        food_name: addFoodName,
        description: foodDescription,
      }),
    });
    let result = response.json();
    console.log(result);
  }

  async function GetFoods() {
    let url = 'http://127.0.0.1:8000/foods';
    const response = await fetch(url, {
      method: 'GET',
    });
    let result = await response.json();
    console.log(result);
  }

  async function GetFoodNum() {
    let url = 'http://127.0.0.1:8000/foods-num';
    const response = await fetch(url, {
      method: 'GET',
    });

    let result = await response.json();
    window.alert(`음식 개수는 ${result.foodsNum}개`);
  }

  let addFoodName;
  let foodDescription;
  let deleteFoodName;
  let getFoodName;
  let foodCount;

  return (
    <div className="App">
      <h1>재식이의 냉장고</h1>

      <>
        <input
          type="text"
          placeholder="음식명"
          onChange={e => {
            addFoodName = e.target.value;
          }}
        />{' '}
        &nbsp;
        <input
          type="text"
          placeholder="음식 설명"
          onChange={e => {
            foodDescription = e.target.value;
          }}
        />
        <button
          onClick={() => {
            AddFood(addFoodName, foodDescription);
          }}>
          추가
        </button>
      </>
      <br />
      <>
        <input
          type="text"
          placeholder="음식명"
          onChange={e => {
            deleteFoodName = e.target.value;
          }}
        />
        <button
          onClick={() => {
            DeleteFood(deleteFoodName);
          }}>
          삭제
        </button>
      </>
      <br />
      <>
        <button
          onClick={() => {
            GetFoods();
          }}>
          전체 음식 조회
        </button>
      </>
      <br />
      <>
        <button
          onClick={() => {
            GetFoodNum();
          }}>
          음식 개수
        </button>
      </>
    </div>
  );
}

export default App;
