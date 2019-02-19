import React from 'react';
import Wrapper from './styled/Page';
import ListContainer from '../../containers/ListContainer';
import FormContainer from '../../containers/FormContainer';

const Page = () => {
    return <Wrapper>
        <ListContainer />
        <FormContainer />
    </Wrapper>
};

export default Page;