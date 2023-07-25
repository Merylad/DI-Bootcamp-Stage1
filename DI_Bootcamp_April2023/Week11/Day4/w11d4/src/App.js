import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Profile from './components/Profile';
import Shop from './components/Shop';
import PostList from './components/PostList';
import Example from './components/Example';

// EXERCISE 1 XP 

// function App() {
//   return (
//     <>
//         <nav>
//         <NavLink to="/"> Home </NavLink>{'  '}
//         <NavLink to="/profile"> Profile </NavLink>{'  '}
//         <NavLink to="/shop"> Shop </NavLink>{'  '}

//         </nav>
//         <ErrorBoundary>
//         <Routes>
//           <Route path ='/' element = {<Home />}/>
//           <Route path ='/profile' element = {<Profile />}/>
//           <Route path ='/shop' element = {<Shop />}/>
//         </Routes>
//         </ErrorBoundary>
//     </>
//   );
// }

// export default App;

function App() {
  return (
    <>
      {/* <PostList /> */}
      <Example />
    </>
  );
}

export default App;
