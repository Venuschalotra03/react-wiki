import React from 'react';
import FilterBTN from "../FilterBTN";

// Component to display status 
const Status = ({ setStatus,setPageNumber }) => {
  // List of possible status values
    let status = ["Alive","Dead", "Unknown"];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Status
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-3">

        {status.map((items, index) => (<FilterBTN task={setStatus} setPageNumber={setPageNumber} key = {index} name="status" index={index} items={items} />))}
      </div>
    </div>
  </div>
  );
}

export default Status;