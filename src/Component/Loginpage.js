import React, {Component} from 'react';
import { Link} from 'react-router-dom';

class Loginpage extends Component {
    
    render(){
        return(
            <div>
                <div id="form">
                    <h1>Login</h1>
                    <input className="text" type="text" name="user" placeholder="Username"/>
                    <input className="text" type="password" name="pass" placeholder="Password"/>
                    <input type="submit" name="submit"  value="Login" className="submit-button"/>
                    <Link to="/">Register</Link>
                </div>
            </div>
        )
    }
}

export default Loginpage;