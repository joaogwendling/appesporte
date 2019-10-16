import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { tudo } from '../../shared/dados';

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

            return (
                <ListItem 
                    key={index}
                    title={<Text style={styles.titulo}>{item.title}</Text>}
                    subtitle={item.desc}
                    onPress={() => navigate('DemandaDetalhe', {empresaId: item.idempresa, demandaId: item.id})}
                    bottomDivider
                />
            );
            }; 

            

                    


        return(
            <View style={styles.container}>

            <FlatList 
                data={this.state.dados.demandas}
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
    },
    titulo: {
        fontWeight: 'bold'
    }
  });