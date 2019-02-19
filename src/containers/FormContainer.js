import React, {Component} from 'react';
import {connect} from "react-redux";
import Form from '../components/Form';
import { actionGetRepositories } from '../ducks/repositories';

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            repositoryName: '',
        };
        this.inputChange = this.inputChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
    inputChange(e) {
        const { repositoryName } = e.formData;
        this.setState({
            repositoryName: repositoryName
        });
    }
    formSubmit(e) {
        const { repositoryName } = e.formData;
        this.props.dispatch(actionGetRepositories(repositoryName));

    }
    render() {
        return <Form inputChange={this.inputChange} repositoryName={this.state.repositoryName} formSubmit={this.formSubmit}/>;
    }
}

function mapStateToProps(state) {
    return {
        repositoryName: state.repositoryName,
    }
}


export default connect(mapStateToProps)(FormContainer);