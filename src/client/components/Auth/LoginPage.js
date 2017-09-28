import React from 'react';

import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

    }

    handleSubmit(event) {
        event.preventDefault();

    }

    render() {

        return (
            <div className="row justify-content-center">
                <div className="col-10 col-sm-7 col-md-5 col-lg-4">
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup>

                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="Username"
                            />
                        </FormGroup>
                        <FormGroup>

                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="Password"
                            />
                        </FormGroup>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(LoginPage);
