import React from "react"
class UserInfo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {name} = this.props
        return(
            <div className="user-card">
                <h2>{name}</h2>
                <h3>India</h3>
                <h3>xyz@react.com</h3>
            </div>
        )
    }
}

export default UserInfo