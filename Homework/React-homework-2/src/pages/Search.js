import { Table } from "react-bootstrap";

function Search(props) {
  // const [keyword, setKeyword] Redux 이용해서 keyword 저장한다.

  //const searchKeyword = document.querySelector('#keyword').value;
  return (
    <>
      <Table striped bordered hover>
        <tbody>
          {props.data.map(function (item, i) {
            return <FoodRow />;
          })}
          <FoodRow />
          <FoodRow />
          <FoodRow />
        </tbody>
      </Table>
    </>
  );
}

function FoodRow() {
  return (
    <>
      <tr>
        <td>음식명</td>
        <td>음식그룹</td>
        <td>제조사명</td>
      </tr>
    </>
  );
}

export default Search;
