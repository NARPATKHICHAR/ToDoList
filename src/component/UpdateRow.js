import React, { useState } from "react";

const UpDateRow = ({ value, index, updateDB, closeEdit }) => {
  const [updatedText, setUpdatedText] = useState(value);
  console.log(value);
  const discard = () => {
    setUpdatedText(value);
    closeEdit();
  };
  const onSave = () => {
    if (updatedText) {
      updateDB(updatedText, index);
      closeEdit();
    }
  };
  return (
    <div>
      <input
        value={updatedText}
        onChange={(event) => setUpdatedText(event.target.value)}
      />
      <button onClick={discard}>discard</button>
      <button onClick={onSave}>save</button>
    </div>
  );
};

export default UpDateRow;
