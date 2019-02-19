import React from 'react';
import Wrapper from './styled/Form';
import jsonSchema from './schemas/json-schema.json';
import uiSchema from './schemas/ui-schema.json';

const Form = (props) =>
    <Wrapper
        schema={jsonSchema}
        uiSchema={uiSchema}
        showErrorList={false}
        formData={{repositoryName: props.repositoryName}}
        onChange={props.inputChange}
        onSubmit={props.formSubmit}/>;

export default Form;