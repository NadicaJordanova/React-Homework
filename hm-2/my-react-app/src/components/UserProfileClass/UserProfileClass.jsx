import { Component } from "react";
import "../UserProfileClass/UserProfileClass.css"

class UserProfileClass extends Component{
    render(){
        const {name, age, hobby } = this.props
        return(
           
            <div className="card">
                  <h2>Name: {this.props.name}</h2>
                  <p>Age: {this.props.age}</p>
                  <p>Hobby: {this.props.hobby}</p>
            </div>
       
        )
    }
}

export default UserProfileClass