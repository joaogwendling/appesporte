import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { tudo } from '../shared/dados';

class ListaDemandas extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            dados: tudo,
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('categoria',''),
        };
      };
   

    render(){
        const renderizar = ({item, index}) => {

            const { navigate } = this.props.navigation;

            if(item.demands[0]!=null){
                for (i=0; i<item.demands.length; i++){
                return (
                    <ListItem 
                        key={index}
                        title={item.demands[i].title}
                        subtitle={item.demands[i].description}
                        onPress={() => navigate('DemandaDetalhe', {empresaId: item.id}, {demandaId: i})}
                        bottomDivider
                    />
                );
            };}
            }

    

        

        return(
            <View style={styles.container}>

            <FlatList 
                data={this.state.dados}
                renderItem={renderizar}
                keyExtractor={item => item.id.toString()}
            />

            </View>
        )
    }
}

export default ListaDemandas;

const styles = StyleSheet.create({
    container: {
        flex:1,
      fontSize: 18,
      backgroundColor: '#ff7373',
      color: '#ddd'
    }
  });