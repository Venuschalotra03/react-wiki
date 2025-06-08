import React from 'react';
import FilterBTN from "../FilterBTN";

// Component for filtering characters by species
const Species = ({ setSpecies, setPageNumber }) => {
  // List of available species options
  let species = ["Human", "Alien", "Humanoid", "Poopybutthole", "Mythological", "Unknown","Animal", "Disease", "Robot", "Crornenberg", "Planet"];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Species
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-3">
        {species.map((items, index) => (
          <FilterBTN key={index} name="species" index={index} items={items} task={setSpecies} setPageNumber={setPageNumber} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default Species;