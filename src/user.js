import React from 'react';
import PropTypes from 'prop-types';
import './user.css';
/*
 * props: userObject: user object
 *        numGamesIsVisible: display number of games
 *        index: line index it is on
 * display:
 *   userName, first, last, numGames : depending on numGamesIsVisible
 */
/*
<li key={props.index}>{props.userObject.first} {props.userObject.last}
  {props.userObject.username}
  {props.isDisplayNumGames === 1? props.userObject.numGames:''} </li>
*/

const User = (props) => {
//    console.log("props.userObject: " + JSON.stringify(props.userObject));
//    console.log("index: " + props.index);
    return(
        <li index={props.index}><span>{props.userObject.first}</span><span>{props.userObject.last}</span>
         <span> {props.userObject.username}</span>
          {props.displayNumGames === 1? <span>{props.userObject.numGames}</span>:''} </li>
    );
}

User.propTypes = {
    userObject: PropTypes.object,
    displayNumGames: PropTypes.number,
    index: PropTypes.number,
};

export default User;
