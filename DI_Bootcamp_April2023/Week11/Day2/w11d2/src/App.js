import logo from './logo.svg';
import './App.css';
import { Car } from './Components/Car';
import { Garage } from './Components/Garage';
import { Events } from './Components/Events';
import { Phone } from './Components/Phone';
import { Color } from './Components/Color';
import { Languages } from './Components/Languages';
import Book from './Components/Gold2Ex1';
import WelcomeForm from './Components/Gold2Ex2';


const carinfo = {name: "Ford", model: "Mustang"};




function App() {
   return (
    <div className="App">
      
        {/* <Car info = {carinfo} /> */}
        {/* <Garage /> */}
        {/* <Events /> */}
        {/* <Phone /> */}
        {/* <Color /> */}
        {/* <Languages /> */}
        <Book />
        <WelcomeForm />
      
    </div>
  );
}

export default App;