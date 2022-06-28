import Empty from "./empty";

function Sales(props) {
  if (props.summary.totalSales && props.summary.totalFranchiseeFee) {
    return (
      <>
        <div className="lineItem">
          <b>Date:</b> {props.summary._id}
        </div>

        <div className="lineItem">
          <b>Total sales:</b> {props.summary.totalSales}
        </div>

        <div className="lineItem">
          <b>Total franchisee fee:</b> {props.summary.totalFranchiseeFee}
        </div>
      </>
    );
  } else {
    return <Empty response={props.summary.message} />;
  }
}

export default Sales;
