import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);
  const [isEdit, setIsEdit] = useState(null);

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
  };
  const handleClearClick = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const onAdd = () => {
    setArr([...arr, text]);
  };
  const onDelete = (ind) => {
    console.log(ind);
    setArr(
      arr.filter((el, index) => {
        return ind !== index;
      })
    );
  };
  const upDate = (ind) => {
    setIsEdit(ind);
    console.log({ ind });
  };

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            type="text"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={onAdd}>
          add santext
        </button>
      </div>
      <div className="container my-3">
        <h2>my text summary</h2>
        <p>
          {text?.split(" ").lenght} words and {text?.length} charecter
        </p>
      </div>
      <div className="container">
        <h3>tudo list</h3>
        {arr?.map((element, ind) => {
          console.log(element);
          return (
            <div>
              {console.log({ bool: isEdit === ind, isEdit, ind })}
              {isEdit === ind ? (
                <div>
                  <input value={element} onChange={() => "hello"} />
                </div>
              ) : (
                <p>
                  <input type="checkbox" id="vehicle1" value="arr" />

                  {element}
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => {
                      onDelete(ind);
                    }}
                  >
                    delete
                  </button>
                  <button
                    className="btn btn-sm btn-success mx-2"
                    onClick={() => {
                      upDate(ind);
                    }}
                  >
                    update
                  </button>
                </p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
