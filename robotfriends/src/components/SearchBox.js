import React, { Fragment } from "react";

const SearchBox = ({ onSearch }) => {
  return (
    <Fragment>
      <div className="pa2">
        <input
          className="pa2 b--green bg-lightest-blue"
          type="search"
          placeholder="search robots"
          onChange={onSearch}
        />
      </div>
    </Fragment>
  );
};

export default SearchBox;
