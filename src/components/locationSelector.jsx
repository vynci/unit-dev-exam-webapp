import { useState } from "react";

function LocationSelector(obj) {
  const [selectedLocation, setSelectedLocation] = useState([]);

  const handleOnChange = (id, e) => {
    obj.handler(id, e.target.checked);
  };

  return (
    <>
      <h2>Select Location</h2>
      {obj.list.map((location) => {
        return (
          <div key={location._id}>
            <input
              style={{ margin: "0 0.5rem 0 0" }}
              id={location._id}
              type="checkbox"
              onChange={(e) => handleOnChange(location._id, e)}
            />
            <label htmlFor={location._id}>{location.address}</label>
          </div>
        );
      })}
    </>
  );
}

export default LocationSelector;
