import { Component } from "react";

class Temp extends Component{
    constructor(){
        super();
        this.state = {color: 'Yellow'}
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({color: "Blue"})
        }, 5000)
    }
    
    
    render(){
        return (
            <div>
                <p>Hello I am from Temp. the color is: {this.state.color}</p>
            </div>
        )
    }
}

export default Temp;