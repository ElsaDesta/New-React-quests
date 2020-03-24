
import React, {Component} from "react";

class SignUp extends Component {
    state= {
        email: ""
    }

    updateEmailField = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

      

    render  () {
        return (
            <div>
                new component
              <input 
              placeholder="test@test.com" 
              value = {this.state.email}
              onChange = {e=> this.updateEmailField(e)}
              type="email" name="email" />
            </div>
        );
    }
}



export default SignUp;