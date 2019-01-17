import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../../store/actions';

class Auth extends Component {
    state ={
        phone_no: "",
        password: ""
       }     
       
    handleSignIn = (e) => {
        console.log(this.state.phone_no, this.state.password);


        const values ={
            phone_no: this.state.phone_no,
            password: this.state.password
        }
        this.props.auth(this.state);
    }

    handlePassword = (e) => {
        console.log("password handled");
        this.setState({password: e.target.value});
        // console.log("password done");
    }

    handlePhoneNumber = (e) => {
        this.setState({phone_no: e.target.value})
        //console.log("phone number done");
    }

    render () {
        return (
    <div>
        <h1> Login Page</h1>
            <form>
                    <input 
                        type="number"
                        name="phone_no"
                        placeholder= "Mobile No."
                        onChange={(e) => this.handlePhoneNumber(e)}
                        />
                     <input 
                        type="password" 
                        name = "password"
                        placeholder= "Password"
                        onChange={(e) => this.handlePassword(e)}             
                        />
                    <button 
                        type="button" 
                        onClick={(e) => this.handleSignIn(e)} >Sign In
                    </button>
            </form>
    </div>
        );
       
    }
}


const mapDispatchToProps = dispatch => {
    return {
        auth: (values) => dispatch(auth(values))
    };
};

export default connect (null, mapDispatchToProps) (Auth);
