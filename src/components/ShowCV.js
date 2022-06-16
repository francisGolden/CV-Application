import {Component} from "react";

class ShowCV extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render(){
        const {myArr} = this.props;
        
        
        
        if (myArr.length > 0) {return(
            <div id="show-cv">
                <br />
                <hr></hr>
                <h1 style={{color: "white"}}>{myArr[0]} {myArr[1]}'s CV</h1>
                <div className="cv-container">
                <div className="cv-box">
                    <h2 >Personal Information</h2>
                    <ul className="cv-line">
                        <li><b>First Name: </b> {myArr[0]}</li>
                        <li><b>Last Name: </b> {myArr[1]}</li>
                        <li><b>Email: </b> {myArr[2]}</li>
                        <li><b>Birthday:</b> {myArr[3]}</li>
                    </ul>
                </div>
                
                <div className="cv-box">
                    <h2>Education</h2>
                    <ul className="cv-line">
                        <li><b>School Name:</b> {myArr[4]}</li>
                        <li><b>Study Title:</b> {myArr[5]}</li>
                        <li><b>From:</b> {myArr[6]}</li>
                        <li><b>To: </b>{myArr[7]}</li>
                    </ul>
                </div>
                <div className="cv-box">
                    <h2>Work</h2>
                    <ul className="cv-line">
                        <li><b>Company: </b>{myArr[8]}</li>
                        <li><b>Position:</b> {myArr[9]}</li>
                        <li><b>From:</b> {myArr[10]}</li>
                        <li><b>To: </b> {myArr[11]}</li>
                        <li><b>Main Tasks:</b> {myArr[12]}</li>
                    </ul>
                </div>
            </div>
            </div>
            
        )}
    }
}

export default ShowCV;