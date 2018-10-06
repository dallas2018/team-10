import React, {Component} from 'react';
import {LoginForm} from 'react-stormpath';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }

    render() {
        return(
            <div>
                <div>
                    <p>what</p>
                </div>
                <div>
                    <LoginForm/>
                </div>
                <form>
                    <label>
                        Name:
                        <input type="text" value={this.state.username} name="name"/>
                    </label>
                    <br></br>
                    <label>
                        Password:
                        <input type="password" name="password"/>
                    </label>
                    <br></br>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}

export default Login;