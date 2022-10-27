import React from "react";
import { useState } from "react";
import UpDateRow from "./UpdateRow";

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
  const onClickAdd = () => {
    onAdd(text);
    setText("");
  };

  const onDelete = (ind) => {
    // console.log(ind);
    setArr(
      arr.filter((item, id) => {
        return ind !== id;
      })
    );
  };
  const onEdit = (id) => {
    setIsEdit(id);
  };
  const closeEdit = () => {
    setIsEdit(null);
  };

  const updateDB = (value, index) => {
    const updateDB = arr.map((element, id) => {
      if (id === index) {
        return value;
      }
      return element;
    });
    setArr([...updateDB]);
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
        <button className="btn btn-primary mx-1" onClick={onClickAdd}>
          add us
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
              {isEdit === ind ? (
                // <div>
                <UpDateRow
                  value={element}
                  closeEdit={closeEdit}
                  index={ind}
                  updateDB={updateDB}
                />
              ) : (
                //   <input value={element} onChange={() => "hello"} />
                // </div>
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
                      onEdit(ind);
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
