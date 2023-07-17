import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals'
import Exercise from './Exercise3';
import CarouselDC from './CarouselDC';
//Exercise 1XP

// const myelement = <h1>I Love JSX!</h1>;
// const sum = 5+5

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <>
//         {myelement}
//         <h1>React is {sum} times better with JSX</h1>
//         </>
//       </header>
//     </div>
//   );
// }


//Exercise 2XP

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <>
//         <h3>{user.firstName} </h3>
//         <h3>{user.lastName} </h3>
//         </>
//       </header>
//     </div>
//   );
// }



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         < UserFavoriteAnimals favs={user.favAnimals}/>
        
        
//       </header>
//     </div>
//   );
// }

//EXERCISE 3

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         < Exercise />
        
        
//       </header>
//     </div>
//   );
// }

//Daily Challenge

function App() {
  return (
    <CarouselDC/>
   );
}

export default App;



