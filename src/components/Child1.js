import React from "react"
class Child1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "Child 1"
        }
    }

    componentDidMount(){
        console.log("Child1 component did mount")
    }
    
    componentDidUpdate(prev, prevState){
        // if(this.state.name != prevState.name){
            // setTimeout(() => {
                console.log("Child1 component did update")
                // this.setState({
                //     name: "Child1"
                // })
            // }, 1000)
        // }
    }
    
    componentWillUnmount(){
        console.log("Child1 component unmount")
    }
    render(){
        console.log("Child1 called again")

        return (
            <div>
                <p>Child 1 component</p>
                <button className="btn type-change-button" onClick={() => this.setState({name: "Child 1"})}>
                    Child1 to Child 1
                </button>
            </div>
        )
    }
}

export default Child1