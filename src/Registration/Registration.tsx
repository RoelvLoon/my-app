import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { initRegistrationState, RegistrationState } from "./registration.state";

export class RegistraionForm extends React.Component<{},RegistrationState> {
    constructor(props:{}){
        super(props);
        this.state = initRegistrationState
    }

    render():JSX.Element {
        return(
            <div className="d-flex justify-content-center align-items-center p-2 m-5 h-100 flex-column bg-light rounded">
                <div>
                    Welcome to our Registration Page
                </div>
                <div>
                    Name:
                    <input
                        value={"Some value"}
                        onChange={(e) => this.setState({ name: e.currentTarget.value })}
                    />
                </div>
            </div>
        )
    }
}