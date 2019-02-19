import styled from 'styled-components';
import Form from 'react-jsonschema-form';

const StyledForm = styled(Form)`
    max-width: 200px;
    width: 100%;
    
    fieldset {
        border: none;
    }
    
    label {
        display: none;
    }

    input {
        border: 1px solid rgba(0,0,0,0.3);
        padding: 4px 8px;
    }
    
    button[type="submit"] {
        display: block;
        max-width: 150px;
        padding: 4px 16px;
        margin: 0 auto;
        border: none;
        background: #6593f5;
        color: #000;
        cursor: pointer;
    }
`;
export default StyledForm;