import React from 'react'

const FilterBTN = ({ name, index, items, task, setPageNumber }) => {
  return (
    <div>
    <style jsx>
      {`
      /* Highlight label when radio button is checked */
      .x:checked + label {
        background-color: #007bff;
        color: white; 
      }
      /* Hide default radio buttons */
      input[type="radio"]{
        display: none;
      }
      `}
    </style>
<div className="form-check">
  <input onClick={() => {
    setPageNumber(1)
    task(items);
  }} className="form-check-input" type="radio" name={name} id={`${name}-${index}`} />
  <label className="btn btn-outline-primary" for={`${name}-${index}`}>
    {items}
  </label>
</div>
</div>
  );
};

export default FilterBTN; 