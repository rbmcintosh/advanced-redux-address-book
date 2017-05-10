import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setCurrentUser} from '../actions';
import {setSearchText} from '../actions'

class ListOfUsers extends Component {
  constructor(){
    super();
    this.state =  {visible:true};
  }
  render(){ 
    var buttonText = "Hide";
    var userDivs = "";
    if(this.state.visible){
      buttonText = "Hide";
      const filterUsers = this.props.users.filter((u) => {
        return u.first_name.indexOf(this.props.searchText) > -1;
      });
      userDivs = filterUsers.map((user) => {
        return <div>
          {user.first_name} - {user.last_name}
          <a href="#" onClick={
            (e)=>{
              e.preventDefault();
              this.props.setUser(user);
            }
          }> View </a>
       </div>
      });
    }else{
      buttonText = "Show";
      userDivs = "";
    } 
    return (<div>
            <input onChange={
              (e) => {
                  this.props.setSearchText(e.target.value)
              }
            } />
            <button onClick={()=>{
                this.setState({
                  visible:!this.state.visible
                });
              }
            }>
              {buttonText}
            </button>
            {userDivs}
          </div>)
  }
}

function mapStateToProps(state){
  return {
    users:state.users,
    searchText:state.searchText
  }
}

function mapDispatchToProps(dispatch){
  return {
    // returns an object that we call an action
    setUser:function(user){
      let action = setCurrentUser(user);
      dispatch(action);
    },
    setSearchText:function(text){
      let action = setSearchText(text);
      dispatch(action);
    }
  }
}

const ListOfUsersContainer = connect(mapStateToProps,mapDispatchToProps)(ListOfUsers);
export default ListOfUsersContainer

