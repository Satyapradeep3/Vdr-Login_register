import React, {Component} from 'react';
import { BrowserRouter, Link} from 'react-router-dom';

class Registerpage extends Component {
    
    render(){
        return(
            <div>
                <div id="form">
                    <h3 className='heading'>Register</h3>
                    <input className="text" type="text" name="user" placeholder="Firstname"/>
                    <input className="text" type="text" name="user" placeholder="Lastname"/>
                    <input className="text" type="text" name="user" placeholder="Email Id"/>
                    <input className="text" type="password" name="pass" placeholder="Create Password"/>
                    <input className="text" type="password" name="pass" placeholder="Confirm Password"/>
                    <input type="submit" name="submit"  value="Submit" className="submit-button"/>
                    <br/>
                    <Link to="/Loginpage" className="reditect-btn">Already registered? Login</Link>
                </div>
            </div>
        )
    }
}

export default Registerpage;