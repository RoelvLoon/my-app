import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

export class RegistraionForm extends React.Component<{},{}> {
    constructor(props:{}){
        super(props);
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
                        value = {"Some value"}>
                        {/* onChange=(this.state.name = e.currentTarget.value) */}
                    </input>
                </div>
            </div>
        )
    }
}