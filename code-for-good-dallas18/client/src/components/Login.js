import React, {Component} from 'react';

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
                <form>
                    <label>
                        Name:
                        <input type="text" name="name"/>
                    </label>
                    <br></br>
                    <label>
                        Password:
                        <input type="text" name="password"/>
                    </label>
                    <br></br>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}

export default Login;