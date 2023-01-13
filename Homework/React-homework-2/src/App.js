import "./App.css";
import { InputGroup, Button, Form } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header style={{ textAlign: "left", fontSize: "30px" }}>
        음식 영양 성분 검색기
      </header>

      <InputGroup className="mb-3">
        <Form.Control aria-label="입력" />
        <Button variant="outline-secondary" id="button-addon2">
          검색
        </Button>
      </InputGroup>
    </div>
  );
}

export default App;
