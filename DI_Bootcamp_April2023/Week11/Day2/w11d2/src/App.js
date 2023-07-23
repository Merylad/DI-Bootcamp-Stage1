import logo from './logo.svg';
import './App.css';
import { Car } from './Components/Car';
import { Garage } from './Components/Garage';
import { Events } from './Components/Events';
import { Phone } from './Components/Phone';
import { Color } from './Components/Color';
import { Languages } from './Components/Languages';


const carinfo = {name: "Ford", model: "Mustang"};




function App() {
   return (
    <div className="App">
      
        {/* <Car info = {carinfo} /> */}
        {/* <Garage /> */}
        {/* <Events /> */}
        {/* <Phone /> */}
        {/* <Color /> */}
        <Languages />
      
    </div>
  );
}

export default App;
