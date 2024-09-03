async function SelectComponent(props) {
  return(
    <>
    <h6> {props.label}</h6>
    <select name={props.name}>
      {props.options}
    </select>
  </>
  
  );
}
export default SelectComponent
