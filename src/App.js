import { Component } from "react";
import uniqid from "uniqid";

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      fields: []
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {    
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      fields: this.state.fields.concat(
        this.state.firstName, 
        this.state.lastName,
        this.state.email,
        this.state.phone)
    })
  }

  handleReset = () => {
    this.setState({
      fields: []
    })
  }


  render(){
    return(
      <div className="main-container">
        <form className="form-container" >
          <h2>Personal Information</h2>
          <label htmlFor="firstName">
            First Name
            <input 
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
            name="firstName"
            id="firstName"
            required
            />
          </label>
          <label htmlFor="lastName">
            Last Name
            <input 
            type="text"
            value={this.state.lastName}
            onChange={this.handleChange}
            name="lastName"
            id="lastName"
            required
            />
          </label>
          <label htmlFor="email">
            email
            <input 
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            id="email"
            required
            />
          </label>
          <label htmlFor="phone">
            Phone
            <input 
            type="text"
            value={this.state.phone}
            onChange={this.handleChange}
            name="phone"
            id="phone"
            required
            />
          </label>
          <button type="submit" onClick={this.handleSubmit}>submit</button>
          <button onClick={this.handleReset}>clear</button>
        </form>
        <ul className="cv-container">           
          {this.state.fields.map((field)=>{ 
            return <li key={uniqid()}>{field}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default App;
