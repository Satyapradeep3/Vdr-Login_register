import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Loginpage from './Component/Loginpage';
import Registerpage from './Component/Registerpage';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Route exact path='/' component={()=><Registerpage/>}/>
        <Route path='/Loginpage'  component={Loginpage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
