import React, { Component } from 'react';
import { View, Card, Text, StyleSheet } from 'react-native';
import { tudo } from '../shared/dados';

class DemandaDetalhe extends Component {
    constructor(props) {
        super(props);
        this.state= {
            dados: tudo
        };
    }

    render(){
        const empresaId = this.props.navigation.getParam('empresaId','');
        const demandaId = this.props.navigation.getParam('demandaId','');


        return(
        <View>
            <Text style={styles.titulo}> {this.state.dados[+empresaId].demands[+demandaId].title} </Text>
            <Text style={styles.desc}>{this.state.dados[+empresaId].demands[+demandaId].desc}</Text>
            <Text style={styles.empresa}> Empresa requerente: {this.state.dados[+empresaId].name}</Text>
        </View>)
    }

  

    static navigationOptions = {
        title: 'Detalhes'
    };

}

export default DemandaDetalhe;

const styles = StyleSheet.create({
    titulo: {
      fontSize: 30,
      alignItems:'center',
      justifyContent:'center'
    },
    cidade: {
        fontSize: 10,
        color: '#b8cecd'
    },
      desc: {
        fontSize: 20,
        color: '#78786d'
      },
      empresa:{
          fontSize: 17,
          marginTop:15
      }
    
  });