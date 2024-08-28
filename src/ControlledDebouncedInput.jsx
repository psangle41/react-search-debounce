import React, { useCallback, useEffect, useRef, useState } from "react";
import { debounce } from "./utils";

function ControlledDebouncedInput() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    debounceSearch(search);
  }, [search]);

  const handleApiCall = async (val) => {
    console.log("Searched Value : ", val);
  };

  const debounceSearch = useCallback(debounce(handleApiCall, 500), []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        value={search}
        placeholder="Enter City Name"
        onChange={handleSearch}
      />
    </div>
  );
}

export default ControlledDebouncedInput;
