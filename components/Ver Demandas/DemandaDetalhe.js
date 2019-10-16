import React, { Component } from 'react';
import { View, Card, Text, StyleSheet } from 'react-native';
import { tudo } from '../../shared/dados';

class DemandaDetalhe extends Component {
    constructor(props) {
        super(props);
        this.state= {
            dados: tudo
        };
    }

    render(){
        var empresaId = this.props.navigation.getParam('empresaId','');
        var demandaId = this.props.navigation.getParam('demandaId','');
        const { navigate } = this.props.navigation;


        return(
        <View>
            <Text style={styles.titulo}> {this.state.dados.demandas[+demandaId].title} </Text>
            <Text style={styles.desc}>{this.state.dados.demandas[+demandaId].desc}</Text>
            <Text style={styles.empresa}> Empresa requerente: 
                <Text style={styles.link} onPress={() => navigate('EmpresaDetalhe', {empresaId: empresaId})}>{this.state.dados.empresas[+empresaId].name}</Text>
            </Text>
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
        alignItems:'center',
        color: '#b8cecd'
    },
      desc: {
        fontSize: 20,
        color: '#78786d'
      },
      empresa:{
          fontSize: 17,
          marginTop:30
      },
      link:{
          fontSize: 17,
          color:'#000080',
          marginTop:30,
          textDecorationLine:'underline'
      }
    
  });