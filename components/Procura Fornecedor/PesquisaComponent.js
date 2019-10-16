import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { tudo } from '../../shared/dados';

class Pesquisa extends Component{

    static navigationOptions = {
        title: 'Escolha a Categoria'
    };

    render(){

        const categorias = ['Todas as empresas','Artigos Desportivos', 'Uniformes', 'Bola', 'Chuteira']

        const renderizar = ({item, index}) => {

            const { navigate } = this.props.navigation;

            return (
                <ListItem 
                    key={index}
                    title={item}
                    onPress={() => navigate('Lista', {categoria: categorias[index]})}
                    bottomDivider
                />
            );
        };


        return(
            <View style={styles.container}>

            <FlatList 
                data={categorias}
                renderItem={renderizar}
                keyExtractor={(item, index) => 'key'+index}
            />

            </View>
        )
    }
}

export default Pesquisa;

const styles = StyleSheet.create({
    container: {
      flex:1,
      padding:20,
      fontSize: 18,
      backgroundColor: '#ff7373',
      color: '#ffffff'
    }
  });