import React from "react"
class Child2 extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log("Child2 component did mount")
    }
    
    componentDidUpdate(){
        console.log("Child2 component did update")
    }
    
    componentWillUnmount(){
        console.log("Child2 component unmount")
    }

    render(){
        return (
            <div>
                <p>Child 2 component</p>
            </div>
        )
    }
}

export default Child2