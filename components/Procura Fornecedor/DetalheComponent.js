import React, { Component } from 'react';
import { View, Card, Text, StyleSheet } from 'react-native';
import { tudo } from '../../shared/dados';

class EmpresaDetalhe extends Component {
    constructor(props) {
        super(props);
        this.state= {
            dados: tudo
        };
    }

    render(){
        const empresaId = this.props.navigation.getParam('empresaId','');

        return(
        <View>
            <View style={styles.cima}>
                <Text style={styles.titulo}> {this.state.dados.empresas[+empresaId].name} 
       {/*             <Text style={styles.cidade}>{this.state.dados.empresas[+empresaId].state}</Text>         */}
                </Text>
            </View>
            <Text style={styles.desc}>{this.state.dados.empresas[+empresaId].description}</Text>
            <Text style={styles.contato}>Contato: {this.state.dados.empresas[+empresaId].contact}</Text>

        </View>)
    }

  

    static navigationOptions = {
        title: 'Detalhes'
    };

}

export default EmpresaDetalhe;

const styles = StyleSheet.create({
    cima:{
        backgroundColor: '#ff7373',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:40,

    },
    titulo: {
      fontSize: 35,
      color:'#fff',
      alignItems:'center',
      textAlign:'center',
      fontWeight:'bold'
    },
    cidade: {
        fontSize: 15,
        color: '#b8cecd',
        textAlign:'right',
        alignItems:'flex-end',
        justifyContent:'center'
    },
    desc: {
        fontSize: 20,
        color: '#000',
        textAlign:'left',
        marginTop: 10,
        marginLeft:4
    },
    contato: {
        fontSize: 20,
        color: '#78786d',
        textAlign:'center',
        marginTop: 10,

    }
    
  });