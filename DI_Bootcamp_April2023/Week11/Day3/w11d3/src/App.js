import logo from './logo.svg';
import './App.css';
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './ErrorBoundaries';
import Form from './components/Form';


 //W11 Day 3 XP EXERCISE 1

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <ErrorBoundary>
//             <BuggyCounter />
//             <BuggyCounter />
//         </ErrorBoundary>
        
//         <ErrorBoundary>
//             <BuggyCounter />
//         </ErrorBoundary>
//         <ErrorBoundary>
//             <BuggyCounter />
//         </ErrorBoundary>

//         <BuggyCounter />
//       </header>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    
      
        <Form />
      
    
  );
}

export default App;
