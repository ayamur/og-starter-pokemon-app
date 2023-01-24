import Starter from "./Starter";

const Pokemon = (props) => {
  return (
    <div>
      {props.name}
      <Starter name="Bulbasaur" evolutions={['Ivysaur', 'Venusaur']}/>
      <Starter name="Squirtle" evolutions={['Wartortle', 'Blastoise']}/>
      <Starter name="Charmander" evolutions={['Charmeleon', 'Charizard']}/>
    </div>
  );
}

export default Pokemon;