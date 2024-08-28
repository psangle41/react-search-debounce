import React from "react";
import { debounce } from "./utils";

function UncontrolledDebouncedInput() {
  const handleApiCall = (val) => {
    console.log(val.target.value);
  };

  const debounceSearch = debounce(handleApiCall, 1000);

  return (
    <div>
      <input placeholder="Enter City Name" onChange={debounceSearch} />
    </div>
  );
}

export default UncontrolledDebouncedInput;
