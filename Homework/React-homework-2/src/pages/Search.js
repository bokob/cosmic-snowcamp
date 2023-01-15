import { Nav, Table } from "react-bootstrap";
import { useNavigate, Route } from "react-router-dom";
import { useState } from "react";
import "./../App.css";
import Chart from "./Chart.js";

function Search({ show, foodList }) {
  const [removeSearch, setRemoveSearch] = useState(null);
  const [foodInfo, setFoodInfo] = useState([]);

  console.log(show);

  if (show === false && removeSearch === null) {
    // 검색결과 보여줄지 말지 결정하는 부분이다.
    return <></>;
  } else if (removeSearch === true) {
    return <Chart foodInfo={foodInfo} />;
  } else if (show === true) {
    return (
      <>
        <Table bordered>
          <tbody>
            {foodList.map(function (element, i) {
              return (
                <FoodRow
                  key={i}
                  foodName={element[0]}
                  foodGroup={element[2]}
                  makerName={element[3]}
                  calorie={element[4]}
                  carbohydrate={element[5]}
                  protein={element[6]}
                  fat={element[7]}
                  setRemoveSearch={setRemoveSearch}
                  setFoodInfo={setFoodInfo}
                />
              );
            })}
          </tbody>
        </Table>
      </>
    );
  }
}

function FoodRow(props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  let navigate = useNavigate();

  return (
    <>
      <tr>
        <td
          hover
          className={isHovering ? "color" : ""}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <Nav.Link
            onClick={() => {
              props.setRemoveSearch(true); // <Search/> 컴포넌트 없애기 위해 올리기
              props.setFoodInfo([
                props.foodName,
                props.calorie,
                props.carbohydrate,
                props.protein,
                props.fat,
              ]);
              navigate("/chart");
            }}
          >
            {props.foodName}
          </Nav.Link>
        </td>
        <td>{props.foodGroup}</td>
        <td>{props.makerName}</td>
      </tr>
    </>
  );
}

export default Search;
