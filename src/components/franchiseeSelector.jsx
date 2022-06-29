import { useState } from "react";

function FranchiseeSelector(obj) {
  const [selectedFranchisee, setSelectedFranchisee] = useState([]);

  const handleOnChange = (id, e) => {
    obj.handler(id, e.target.checked);
  };

  return (
    <>
      <h2>Select Franchisee</h2>
      {obj.list.map((franchisee) => {
        return (
          <div key={franchisee._id}>
            <input
              style={{ margin: "0 0.5rem 0 0" }}
              id={franchisee._id}
              type="checkbox"
              onChange={(e) => handleOnChange(franchisee._id, e)}
            />
            <label htmlFor="franchiseeSelect">
              {franchisee.first_name} {franchisee.last_name}
            </label>
          </div>
        );
      })}
    </>
  );
}

export default FranchiseeSelector;
