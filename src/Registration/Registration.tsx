import React from "react";
import { initRegistrationState, RegistrationState } from "./registration.state";
import 'bootstrap/dist/css/bootstrap.min.css';
export interface RegistrationProps {
    
}

export class RegistrationForm extends React.Component<{},RegistrationState> {
    constructor(props:{}) {
        super(props);
        this.state = initRegistrationState
    }

    render(): JSX.Element {
        return (
            <div>
                <div className="d-flex align-items-center justify-content-center flex-column mt-5">
                    Welcome to our Registration Page
                </div>
                <form className="m-5 p-2 bg-light rounded">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            id="name"
                            className="form-control"
                            value={this.state.name}
                            onChange={e => this.setState(this.state.updateName(e.currentTarget.value))}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last name:</label>
                        <input
                            id="lastname"
                            className="form-control"
                            value={this.state.lastname}
                            onChange={e => this.setState(this.state.updateLastname(e.currentTarget.value))}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input
                            id="age"
                            className="form-control"
                            value={this.state.age}
                            type="number"
                            onChange={e => this.setState(this.state.updateAge(Number(e.currentTarget.value)))}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary mt-2"
                        onClick={e => this.setState(this.state.insertPerson)}
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}