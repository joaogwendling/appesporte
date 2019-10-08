import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Lista(props) {

    const renderizar = ({item, index}) => {
        return (
            <ListItem 
                key={index}
                title={item.name}
                subtitle={item.description}
                bottomDivider
            />
        );
    };

    return(
        <FlatList 
            data={props.data}
            renderItem={renderizar}
        />
    )
}

export default Lista;