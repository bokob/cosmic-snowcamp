import { Nav, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Chart from './Chart.js'
import "./../App.css";

function Search(props) {
  let navigate = useNavigate();
  
  return (
      <>
        <Table bordered>
          <tbody>
            {props.foodList.map(function (element) {
              return (
                <tr>
                  <td className={"color"}>
                    <Nav.Link
                      onClick={() => {
                        props.setSelectFood([element[0], element[4], element[5], element[6], element[7]]);
                        navigate("/chart");
                      }}
                    >
                      {element[0]}
                    </Nav.Link>
                  </td>
                  <td>{element[2]}</td>
                  <td>{element[3]}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </>
    );
  }

export default Search;
