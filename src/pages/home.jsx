import { useState, useEffect } from "react";
import Sales from "../components/sales";
import moment from "moment";

const getAPI = (resource, resourceId, date) => {
  let parsedDate = moment(date).format("LL"); // January 01, 2022
  parsedDate = parsedDate.replace(/\b(\d{1})\b/g, "0$1").replace(/-/g, "");
  return `http://localhost:3001/sales/${resource}/${resourceId}?date=${parsedDate}`;
};

function HomePage() {
  const [sales, setSales] = useState([]);
  const [date, setDate] = useState("2022-01-11");
  const [resource, setResource] = useState("franchisee");
  const [resourceId, setResourceId] = useState("62b04a71d808a04afe83d49e");

  const fetchSales = async () => {
    const result = await fetch(getAPI(resource, resourceId, date))
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        return { total: 0, message: "Something went wrong" };
      });

    const finalResult = result.message
      ? { total: 0, message: result.message }
      : result.data[0];

    setSales(finalResult);
  };

  const handleResourceChange = (event) => {
    setResource(event.target.value);
  };

  const handleResourceIdChange = (event) => {
    setResourceId(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  useEffect(() => {
    fetchSales();
  }, []);

  return (
    <>
      <h1>UnitDevExam</h1>

      <div className="lineItem">
        <label htmlFor="resource">I want to get the sales by: </label>
        <select id="resource" value={resource} onChange={handleResourceChange}>
          <option value="franchisee">Franchisee</option>
          <option value="location">Locaton</option>
        </select>
      </div>

      <div className="lineItem">
        <div>By this specific {resource} ID:</div>
        <input
          type="text"
          value={resourceId}
          onChange={handleResourceIdChange}
        />
      </div>

      <div className="lineItem">
        <div>On this Date:</div>
        <input type="date" value={date} onChange={handleDateChange} />
      </div>

      <button onClick={() => fetchSales()}>Search</button>
      <h2>Result:</h2>
      <Sales summary={sales} />
    </>
  );
}

export default HomePage;
