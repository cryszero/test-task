import React from 'react';
import Wrapper from './styled/List';
import Item from './styled/ListItem';
import ItemTitle from './styled/ItemTitle';
import ItemDescription from './styled/ItemDescription';

const List = (props) => {
    const listItems = props.repositories.map((item, i) => {
        return (
            <Item key={i}>
                <ItemTitle>{item.name}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
            </Item>
        );
    });

    return(
    <Wrapper>
        {listItems}
    </Wrapper>
    );

};


export default List;