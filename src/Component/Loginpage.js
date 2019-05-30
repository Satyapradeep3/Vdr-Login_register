import React, {Component} from 'react';
import { Link} from 'react-router-dom';

class Loginpage extends Component {
    
    render(){
        return(
            <div>
                <div id="form">
                    <h3 className="heading">Login</h3>
                    <input className="text" type="text" name="user" placeholder="Username"/>
                    <input className="text" type="password" name="pass" placeholder="Password"/>
                    <input type="submit" name="submit"  value="Login" className="submit-button"/>
                    <br/>
                    <Link to="/" className="reditect-btn">Not a member? Register</Link>
                </div>
            </div>
        )
    }
}

export default Loginpage;