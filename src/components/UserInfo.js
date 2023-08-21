import React from "react"
class UserInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            admin : true
        } 
    }
    componentDidMount(){
        console.log("Constructor -> Render -> Did Mount")
        console.log("Constructor -> REnder -> Child Constructor1 -> Child Render1 -> Child Constructor2 -> Child Render2 -> Child Did Mount1 -> Child Did Mount2 -> Parent Did Mount")
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