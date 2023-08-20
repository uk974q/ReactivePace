import React from "react"
class UserInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            admin : true
        } 
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
            </div>
        )
    }
}

export default UserInfo