import React, {Component} from 'react';
import { BrowserRouter, Link} from 'react-router-dom';

class Registerpage extends Component {
    
    render(){
        return(
            <div>
                <div id="form">
                    <h1>Register</h1>
                    <input className="text" type="text" name="user" placeholder="Email Id"/>
                    <input className="text" type="password" name="pass" placeholder="Password"/>
                    <input type="submit" name="submit"  value="Submit" className="submit-button"/>
                    <Link to="/Loginpage">Login</Link>
                </div>
            </div>
        )
    }
}

export default Registerpage;