// // import React from 'react';
// // import ReactDOM from 'react-dom';

// // import './index.css'

// // // Declaring Variables

// // const booksApi = [

// //   {
// //   id:1,
// //   img: 'https://www.asme.org/getmedia/c2c8ea5a-b690-4ba7-92bb-34bd1432862b/book_guide_hero_books.png?width=300&height=315&ext=.png',
// //   title: 'Image - 1',
// //   author: 'Written by Fredrick Achiever'
// // },

// // {
// //   id: 2,
// //   img: 'https://cdn.shopify.com/s/files/1/0064/5342/8271/collections/Taschen-Atm-Navy_540x.jpg?v=1556744191',
// //   title: 'Image - 2',
// //   author: 'Written by Fredrick Achiever'
// // }
// // ,

// // {
// //   id: 3,
// //   img: 'https://cdn.shopify.com/s/files/1/0064/5342/8271/collections/Classics-of-History_540x.jpg?v=1571866175',
// //   title: 'Image - 3',
// //   author: 'Written by Fredrick Achiever'
// // }

// // ]

// // function BookList() {
// //     return (
// //         <section className="booklist">
// //           {booksApi.map((book) => {
// //             // const {img, author, title} = book
// //           return (
// //                     // <Book book={book} key={book.id}/>
// //                     <Book {...book} key={book.id}/>
// //                  )
// //           } )}
// //         </section>
// //     )
// // }

// // const Book = (props) => {

// //   const {img, title, author} = props

// //   const change = (e)=>{
// //     console.log(e.target);
// //     console.log("Hello!!!");

// //   }
// //     return (
// //         <article className="card" onClick={()=>{console.log(title)}} onMouseOver={change}>
// //             <img src={img} alt=""/>
// //             <h2 style={{color:'red'}}>{title}</h2>
// //             <h1 style={{letterSpacing:'5px'}}>{author}</h1>
// //         </article>
// //     )
// // }

// // ReactDOM.render(<BookList />, document.getElementById('root'))

//=================================================================== sample 2

// import React from "react";
// import ReactDOM from "react-dom";

// // function OurApp() {
// //   return React.createElement('div', {}, [
// //     React.createElement('h1', null, 'App Brew Header'),
// //     React.createElement('p', null, `Our current time is ${new Date().toLocaleString()}`),
// //     React.createElement('small', null, 'Copyright 2020.'),
// //   ])
// // }
// // function OurApp() {
// //   return (
// //             <React.Fragment>
// //               <div style={{border:'1px solid grey', textAlign: "center", width: 450, height: 200, backgroundColor: '#000', color:'#fff', margin: '0px auto'}}>
// //                 <h1>App Brew Header</h1>
// //                 <p>Our current time is {new Date().toLocaleString()}</p>
// //                 <small>Copyright 2020.</small>
// //               </div>
// //             </React.Fragment>
// //   )
// // }

// const useState = React.useState;
// // function OurApp() {
// //   return (
// //     <React.Fragment>
// //       <Content />
// //       <Pet name="Dog" species="Domestic" age="10" />
// //       <Pet name="Lion" species="Wild" age="10" />
// //       <Pet name="Eagle" species="Terrestial" age="10" />
// //     </React.Fragment>
// //   );
// // }

// function OurApp() {
//   const [pets, setPets] = useState([
//     { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
//     { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
//     { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
//     { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
//     { name: "Paws", species: "dog", age: "6", id: 789789789 },
//   ]);

//   return (
//     <React.Fragment>
//       <Content />
//       <AddPetForm setPets={setPets} />
//       <ul>
//         {pets.map((pet) => (
//           <Pet
//             name={pet.name}
//             species={pet.species}
//             age={pet.age}
//             key={pet.id}
//           />
//         ))}
//       </ul>
//     </React.Fragment>
//   );
// }

// function AddPetForm(props) {
//   const [name, setName] = useState();
//   const [species, setSpecies] = useState();
//   const [age, setAge] = useState();

//   function handleSubmit(e) {
//     e.preventDefault();

//     props.setPets(function (prev) {
//       prev.concat({ name, species, age, id: Date.now() });
//     });
//     setName("");
//     setSpecies("");
//     setAge("");
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <fieldset>
//         <legend>Add New Pet</legend>
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Name"
//         />
//         <input
//           value={species}
//           onChange={(e) => setSpecies(e.target.value)}
//           placeholder="species"
//         />
//         <input
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//           placeholder="age in years"
//         />
//         <button>Add Pet</button>
//       </fieldset>
//     </form>
//   );
// }

// const Content = () => {
//   const [time, setTheTime] = useState(new Date().toLocaleString());

//   // setInterval(() => setTheTime(new Date().toLocaleString()), 1000);
//   setTimeout(() => setTheTime(new Date().toLocaleString()), 1000);

//   return (
//     <div
//       style={{
//         border: "1px solid grey",
//         textAlign: "center",
//         width: 450,
//         height: 200,
//         backgroundColor: "#000",
//         color: "#fff",
//         margin: "0px auto",
//       }}
//     >
//       <h1>App Brew Header</h1>
//       {/* <p>Our current time is {new Date().toLocaleString()}</p> */}
//       <p>Our current time is {time}</p>
//       <small>Copyright 2020.</small>
//       <LikeArea />
//     </div>
//   );
// };

// const LikeArea = () => {
//   const [likeCount, setLikeCount] = useState(0);

//   function increaseHandler() {
//     setLikeCount((prev) => prev + 1);
//   }

//   function decreaseHandler() {
//     setLikeCount((prev) => {
//       if (prev <= 0) {
//         return 0;
//       } else {
//         return prev - 1;
//       }
//     });
//   }

//   return (
//     <React.Fragment>
//       <div>
//         <p>This page has been liked {likeCount} times</p>
//         <button onClick={increaseHandler}>Like</button>
//         <button onClick={decreaseHandler}>Unlike</button>
//       </div>
//     </React.Fragment>
//   );
// };

// const Pet = (props) => {
//   const { name, species, age } = props;
//   return (
//     <ul>
//       <li>
//         {name} is a {species} animal and is {age} years old.
//       </li>
//     </ul>
//   );
// };

// setInterval(() => {
//   ReactDOM.render(<OurApp />, document.querySelector("#root"));
// }, 1000);

// ReactDOM.render(<OurApp />, document.querySelector("#root"));

//=================================================================== sample 3

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
