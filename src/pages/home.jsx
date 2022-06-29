import { useState, useEffect } from "react";
import Sales from "../components/sales";
import FranchiseeSelector from "../components/franchiseeSelector";
import LocationSelector from "../components/locationSelector";
import moment from "moment";
import getFranchiseeData from "../data/franchisee";
import getLocationsData from "../data/locations";

const getAPI = (franchiseeList, locationList, date) => {
  const baseUrl = "https://unitdevapi.herokuapp.com";

  let parsedDate = moment(date).format("LL"); // January 01, 2022
  parsedDate = parsedDate.replace(/\b(\d{1})\b/g, "0$1").replace(/-/g, "");

  return `${baseUrl}/sales?franchisee=${franchiseeList.join()}&location=${locationList.join()}&date=${parsedDate}`;
};

function HomePage() {
  const [sales, setSales] = useState([]);
  const [date, setDate] = useState("2022-01-11");
  const [franchiseeList, setFranchiseeList] = useState([]);
  const [locationList, setLocationList] = useState([]);

  const [selectedLocation, setSelectedLocation] = useState([]);

  const [selectedFranchisee, setSelectedFranchisee] = useState([]);

  const init = async () => {
    setFranchiseeList(getFranchiseeData());
    setLocationList(getLocationsData());
  };

  const getResult = async () => {
    const result = await fetch(
      getAPI(selectedFranchisee, selectedLocation, date)
    )
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

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleFranchiseeSelectedList = (id, isSelected) => {
    let tmpFran = selectedFranchisee;
    if (isSelected) tmpFran.push(id);
    else tmpFran = tmpFran.filter((item) => item !== id);
    setSelectedFranchisee(tmpFran);
  };

  const handleLocationSelectedList = (id, isSelected) => {
    let tmpLoc = selectedLocation;
    if (isSelected) tmpLoc.push(id);
    else tmpLoc = tmpLoc.filter((item) => item !== id);
    setSelectedLocation(tmpLoc);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <h1>UnitDevExam</h1>
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <LocationSelector
              handler={handleLocationSelectedList}
              list={locationList}
            />
          </div>
          <div className="col">
            <FranchiseeSelector
              handler={handleFranchiseeSelectedList}
              list={franchiseeList}
            />
          </div>
          <div className="col">
            <div className="lineItem">
              <div>Select Date:</div>
              <input type="date" value={date} onChange={handleDateChange} />
              <button onClick={() => getResult()}>Get Sales Report</button>
            </div>

            <div className="lineItem">
              <h2>Result:</h2>
              <Sales summary={sales} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
