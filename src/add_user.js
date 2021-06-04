import React from 'react';
import PropTypes from 'prop-types';

import './add_user.css';

/*
<h1>Add User</h1>
<h3>Technical</h3>
<ul>
    <li key={0}>if duplicate username, do not save</li>
    <li key={1}>form : gather user info</li>
    <li key={2}>Check for duplicate username</li>
</ul>
*/

class AddUser extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            userfirst:'',
            userlast:'',
            username:'',
            numGames:0
        }
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        let user = {
            first: this.state.userfirst,
            last: this.state.userlast,
            username:this.state.username,
            numGames: this.state.numGames
        }
        this.props.onAddUser(user);
    }

    handleInputChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    isInputEmpty = (e) => {
        // Check if user info is empty return true if it is.
        return this.state.username === '';
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" name="userfirst" id="userfirst"
                        placeholder="First Name"
                        value={this.state.userfirst}
                        onChange={this.handleInputChange}
                        />
                    <input type="text" name="userlast" id="userlast"
                        placeholder="Last Name"
                        value={this.state.userlast}
                        onChange={this.handleInputChange}
                    />
                    <input type="text" name="username" id="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                    <input type="text" name="numGames" id="numGames"
                        placeholder="numGames"
                        value={this.state.numGames}
                        onChange={this.handleInputChange}
                        
                    />
                <button disabled={this.isInputEmpty()}>Add User</button>
                </form>
            </div>
        );
    }
}

AddUser.propTypes = {
    onAddUser: PropTypes.func.isRequired,
}
export default AddUser;
