import React, { useState } from "react";
import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Plan from "./Plan";
import { Button } from "antd";

const TodayPlan = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = (_e) => {
    if (text !== "") {
      setItems([...items, text]);
      setText("");
    }
  };
  const handleDelete = (id) => {
    const olditems = [...items];
    const updatedItems = olditems.filter((_element, i) => {
      return i !== id;
    });
    setItems(updatedItems);
  };
  return (
    <>
      <div className="container-fluid my-5 ">
        <div className="row">
          <div className="bg-secondary rounded-5 col-sm-6 mx-auto text-white shadow-lg p-4">
            <div className="text-center">
              <h2> Today's Plan </h2>
              <div className="row">
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control mx-2 my-1"
                    placeholder="Write Plan Here"
                    value={text}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-2">
                  <Button
                    className="btn btn-primary p-1 my-2 mx-2 col-sm-12"
                    onClick={handleAdd}
                  >
                    Add
                  </Button>
                </div>
                <div className="container-fluid bg-secondary">
                  <ul className="list-unstyled row m-5">
                    {items.map((value, i) => {
                      return (
                        <Plan
                          key={i}
                          id={i}
                          sendData={handleDelete}
                          value={value}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayPlan;
