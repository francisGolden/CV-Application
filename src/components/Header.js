import {Component} from "react";

class Header extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super()
    };

    render(){
        return(
            <div id="header">
                <h1 id="title">CV App</h1>
                <div id="sub-header">
                    <h3 style={{color: "white"}}>with</h3>
                    <h3>React</h3>
                </div>
                
            </div>
            
        )
    };

}

export default Header;