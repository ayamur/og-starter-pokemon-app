import Evolutions from "./Evolutions";

const Starter = (props) => {
  return (
    <div>
      {props.name}
      {props.evolutions?.map(evolutions =>
        <Evolutions name={evolutions}/>
        )}
    </div>
  );
}

export default Starter;