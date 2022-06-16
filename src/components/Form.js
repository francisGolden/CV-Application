import {Component} from "react";

class Form extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render(){
        const {data, handleSubmit, handleChange, handleDelete} = this.props

        return(
            <div className="form-container">
                
                <form className="form-box" onSubmit={handleSubmit}>
                    <h3>Personal Information</h3>
                    <div className="section-container">
                        <label htmlFor="firstName">
                            First Name<br></br>
                            <input 
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={data.firstName}
                            onChange={handleChange}
                            required
                            autoFocus
                            />
                        </label>
                        <label htmlFor="lastName">
                            Last name<br></br>
                            <input 
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={data.lastName}
                            onChange={handleChange}
                            required
                            />
                        </label>
                        <label htmlFor="email">
                            Email<br></br>
                            <input 
                            type="text"
                            name="email"
                            id="email"
                            value={data.email}
                            onChange={handleChange}
                            required
                            />
                        </label>
                        <label htmlFor="birthday">
                            Birthday<br></br>
                            <input 
                            type="date"
                            name="birthday"
                            id="birthday"
                            value={data.birthday}
                            onChange={handleChange}
                            required
                            />
                        </label>
                    </div>
                    <hr></hr>
                    <h3>Education</h3>
                    <div className="section-container">
                        <label htmlFor="schoolName">
                            School Name<br></br>
                            <input 
                            type="text"
                            name="schoolName"
                            id="schoolName"
                            value={data.schoolName}
                            onChange={handleChange}
                            required
                            />
                        </label>
                        <label htmlFor="titleStudy">
                            Study title<br></br>
                            <input 
                            type="text"
                            name="titleStudy"
                            id="titleStudy"
                            value={data.titleStudy}
                            onChange={handleChange}
                            required
                            />
                        </label>
                        <label htmlFor="studyFrom">
                            From<br></br>
                            <input 
                            type="date"
                            name="studyFrom"
                            id="studyFrom"
                            value={data.studyFrom}
                            onChange={handleChange}
                            required
                            />
                        </label>
                        <label htmlFor="studyTo">
                            To<br></br>
                            <input 
                            type="date"
                            name="studyTo"
                            id="studyTo"
                            value={data.studyTo}
                            onChange={handleChange}
                            required
                            />
                        </label>
                    </div>
                    <hr></hr>
                    <h3>Work</h3>
                    <div className="section-container">
                        <label htmlFor="company">
                            Company<br></br>
                            <input 
                            type="text"
                            name="company"
                            id="company"
                            value={data.company}
                            onChange={handleChange}
                            required
                            />
                        </label>
                        <label htmlFor="position">
                            Position<br></br>
                            <input 
                            type="text"
                            name="position"
                            id="position"
                            value={data.position}
                            onChange={handleChange}
                            required
                            />
                        </label>
                        <label htmlFor="workFrom">
                            From<br></br>
                            <input 
                            type="date"
                            name="workFrom"
                            id="workFrom"
                            value={data.workFrom}
                            onChange={handleChange}
                            required
                            />
                        </label>
                        <label htmlFor="workTo">
                            To<br></br>
                            <input 
                            type="date"
                            name="workTo"
                            id="workTo"
                            value={data.workTo}
                            onChange={handleChange}
                            required
                            />
                        </label>
                        <label htmlFor="mainTasks">
                            Main Tasks<br></br>
                            <textarea 
                            name="mainTasks"
                            id="mainTasks"
                            value={data.mainTasks}
                            onChange={handleChange}
                            required
                            />
                        </label>
                    </div>
                    <div id="btns">
                        <button type="submit">Submit</button>
                        <button onClick={handleDelete}>Delete</button>   
                    </div>         
                </form>
            </div>
        )
    }
}

export default Form;