import React from "react"
import Child1 from "./Child1"
import Child2 from "./Child2"
class UserInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            admin : true
        } 
    }
    componentDidMount(){
        console.log("PArent did mount")
    }
    componentDidUpdate(){
        console.log("Parent did update")
    }
    componentWillUnmount(){
        console.log("Parent did unmount")
    }
    render(){
        const {name} = this.props
        const {admin} = this.state
        return(
            <div className="user-card">
                <h2>{name} - {admin ? "Admin" : "User"}</h2>
                <button className="btn type-change-button" onClick={() => this.setState({admin: !admin})}>
                    Change Privilage
                </button>
                <h3>India</h3>
                <h3>xyz@react.com</h3>
                <Child1 ></Child1>
                <Child2 ></Child2>
            </div>
        )
    }
}

export default UserInfo