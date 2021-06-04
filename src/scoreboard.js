import React from 'react';

import AddUser from './add_user';
import User from './user';
import  './scoreboard.css';
/*TODO: find out why index error still occurs */


const users = [
    {username: "one", first: "oneFirst", last: "oneLast", numGames:0},
    {username: "two", first: "twoFirst", last: "twoLast", numGames:0},
    {username: "three", first: "threeFirst", last: "threeLast", numGames:0},
    {username: "four", first: "fourFirst", last: "fourLast", numGames:0},
];
/*
<h1>Scoreboard</h1>
    <h3>Features</h3>
    <ul>
        <li key={0}><strike>Display user list and games</strike></li>
        <li key={1}><strike>optional num games displayed</strike></li>
        <li key={2}><strike>check to control optional numgames</strike></li>
    </ul>
    <h3>Technical</h3>
    <ul>
        <li key={0}>Controls state</li>
    </ul>
*/

class Scoreboard extends React.Component {
    constructor() {
        super();
        this.state = {
            userList: [],
            showNumGames: 1
        };
    }

    handleNumGames = (e) => {
        if (this.state.userList.length  && this.state.showNumGames === 1?this.setState({showNumGames: 0}):this.setState({showNumGames:1}));
    }

    handleAddUser = (user) => {
        let userList = this.state.userList;
        // Check if username has already been used
        const dupUser = userList.filter( (usrInList) => usrInList.username === user.username);

        if (dupUser.length > 0) {
            alert("duplicate user.");
        } else {
            this.setState(state => ({userList: [...state.userList,user]}));
        }

    }

    render() {
        let users = this.state.userList;
        return(
            <div>
                <AddUser onAddUser={this.handleAddUser}/>
                <h2>List</h2>
                <span>first name</span><span>last name</span><span>username</span>{this.state.showNumGames?<span>games played</span>:''}
                <ul>
                    {users.map((user,index) => {
                        console.log("user.map.index: " + index);
                        return(
                        <User index={index} userObject={user} displayNumGames={this.state.showNumGames}/>
                        );
                    })}
                </ul>
                <button onClick={this.handleNumGames}>ShowNumGames</button>

            </div>
        );
    }
}

export default Scoreboard;
