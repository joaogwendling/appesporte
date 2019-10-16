import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Picker } from 'react-native';
import { ListItem } from 'react-native-elements';
import { tudo } from '../shared/dados';
import { createStackNavigator } from 'react-navigation';


class MenuPrincipal extends Component{

    static navigationOptions = {
        title: 'Principal'
    };

    render(){

        const menuopcoes = ['Procurar Fornecedor', 'Lançar Demanda', 'Verificar Demandas', 'Divulgar Oferta'];

        const componentes = ['Pesquisa','LancaDemanda','ListaDemandas','Ofertas'];

        const renderizar = ({item, index}) => {

            const { navigate } = this.props.navigation;

            return (
                <ListItem 
                    key={index}
                    title={item}
                    onPress={() => navigate(componentes[index].toString())}
                    bottomDivider
                />
            );
        };

        return(
            <View style={styles.container}>

            <FlatList 
                data={menuopcoes}
                renderItem={renderizar}
                keyExtractor={(item, index) => 'key'+index}
            />

            </View>
        )
    }
}

export default MenuPrincipal;


const styles = StyleSheet.create({
    container: {
      flex:1,
      padding:20,
      fontSize: 18,
      backgroundColor: '#ff7373',
      color: '#ffffff'
    }
  });