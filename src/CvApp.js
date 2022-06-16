import { Component } from "react";
import Form from "./components/Form";
import ShowCV from "./components/ShowCV";
import Header from "./components/Header";


class CvApp extends Component {
  constructor(props){
    super(props)

    this.state = {
      firstName: "", 
      lastName: "", 
      email: "", 
      birthday: "", 
      schoolName: "",
      titleStudy: "",
      studyFrom: "",
      studyTo: "",
      company: "",
      position: "",
      workFrom: "",
      workTo: "",
      mainTasks: "",
      myArr: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    
    // pass an array instead of an object in order to have
    // the state render immediately
    this.setState(() => ({
      myArr: [
        this.state.firstName, 
        this.state.lastName, 
        this.state.email,
        this.state.birthday,
        this.state.schoolName, 
        this.state.titleStudy, 
        this.state.studyFrom, 
        this.state.studyTo, 
        this.state.company, 
        this.state.position, 
        this.state.workFrom, 
        this.state.workTo, 
        this.state.mainTasks, 
      ]
    }), ()=>
    console.log("ignore this")   
    )
  };

  handleDelete = () => {
    this.setState(()=>({
      firstName: "", 
      lastName: "", 
      email: "", 
      birthday: "", 
      schoolName: "",
      titleStudy: "",
      studyFrom: "",
      studyTo: "",
      company: "",
      position: "",
      workFrom: "",
      workTo: "",
      mainTasks: "",
      myArr: [ 
      ]
    }), () => console.log(this.state.myArr))
  };

  render(){
    
    return(
      <div className="main-container">
        <Header />
        <Form 
          data={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
          
        />
        <ShowCV 
          myArr={this.state.myArr} 
        />
      </div>

    )
  };
};

export default CvApp;
