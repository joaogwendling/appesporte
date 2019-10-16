import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { tudo } from '../../shared/dados';

class Lista extends Component {
    
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

            if (this.props.navigation.getParam('categoria','') == 'Todas as empresas') {
                return (
                    <ListItem 
                        key={index}
                        title={<Text style={styles.titulo}>{item.name}</Text>}
                        subtitle={<Text style={styles.subtitulo}>{item.description}</Text>}
                        onPress={() => navigate('EmpresaDetalhe', {empresaId: item.id})}
                        bottomDivider
                    />
                );
            }

            else if (item.category != this.props.navigation.getParam('categoria','')) {
                return;
            } else {

            return (
                <ListItem 
                    key={index}
                    title={<Text style={styles.titulo}>{item.name}</Text>}
                    subtitle={<Text style={styles.subtitulo}>{item.description}</Text>}
                    onPress={() => navigate('EmpresaDetalhe', {empresaId: item.id})}
                    bottomDivider
                />
            );
        };

        }

        return(
            <View style={styles.container}>

            <FlatList 
                data={this.state.dados.empresas}
                renderItem={renderizar}
                keyExtractor={item => item.id.toString()}
            />

            </View>
        )
    }
}

export default Lista;

const styles = StyleSheet.create({
    container: {
        flex:1,
      fontSize: 18,
      backgroundColor: '#ff7373',
      color: '#ddd'
    },
    titulo: {
        fontSize:18,
        fontWeight:'bold',
    },
    subtitulo: {
        fontSize:13,
       color: '#555555'
    }
  });