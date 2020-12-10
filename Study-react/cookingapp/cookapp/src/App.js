import React from "react";
import ReactDOM from "react-dom";

const useState = React.useState;

function OurApp() {
  const [pets, setPets] = useState([
    { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
    { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
    { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
    { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
    { name: "Paws", species: "dog", age: "6", id: 789789789 },
  ]);

  return (
    <>
      <OurHeader />
      <LikeArea />
      <TimeArea />
      <AddPetForm setPets={setPets} />
      <ul>
        {pets.map((pet) => (
          <Pet
            name={pet.name}
            species={pet.species}
            age={pet.age}
            key={pet.id}
          />
        ))}
      </ul>
      <Footer />
    </>
  );
}

function AddPetForm(props) {
  const [name, setName] = useState();
  const [species, setSpecies] = useState();
  const [age, setAge] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    props.setPets((prev) =>
      prev.concat({ name, species, age, id: Date.now() })
    );
    setName("");
    setSpecies("");
    setAge("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New ...</legend>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          placeholder="species"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="age in years"
        />
        <button>Add </button>
      </fieldset>
    </form>
  );
}

function LikeArea() {
  const [likeCount, setLikeCount] = useState(0);

  function increaseLikeHandler() {
    setLikeCount(function (prev) {
      return prev + 1;
    });
  }

  function decreaseLikeHandler() {
    setLikeCount((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return 0;
    });
  }
  return (
    <>
      <button onClick={increaseLikeHandler}>Increase likes</button>
      <button onClick={decreaseLikeHandler}>Decrease likes</button>
      <h2>This page has been liked {likeCount} times.</h2>
    </>
  );
}

function Pet(props) {
  return (
    <li>
      {props.name} is a {props.species} and is {props.age} years old.
    </li>
  );
}

function Footer() {
  return <small>Copyright Footer Text</small>;
}

function TimeArea() {
  const [theTime, setTheTime] = useState(new Date().toLocaleString());

  setTimeout(function () {
    setTheTime(new Date().toLocaleString());
  }, 1000);

  return <p>The current time is {theTime}.</p>;
}

function OurHeader() {
  return <h1 className="special">Our Amazing App Header</h1>;
}

ReactDOM.render(<OurApp />, document.querySelector("#root"));
