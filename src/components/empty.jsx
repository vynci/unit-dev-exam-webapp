function Empty(props) {
  return (
    <div>
      <i>
        {props.response ||
          "Please select Franchisee or Location to get started."}
      </i>
    </div>
  );
}
export default Empty;
