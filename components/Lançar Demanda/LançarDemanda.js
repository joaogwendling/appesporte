import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, TextInput, Button, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import { tudo } from '../../shared/dados';

class LancaDemanda extends Component {

  constructor(props){
    super(props);
    this.state = {
      dados: tudo,
      nomeempresa: '',
      titulodemanda: '',
      descdemanda:''
    }
  }

    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Lançar Demanda'
        };
      };

  

    render(){
       
      const { navigate } = this.props.navigation;

      const apertar = () => {
        this.setState({dados : this.state.dados.demandas+{
          id: 4,
          idempresa:1,
          title: 'demanda nova',
          desc: 'deu certo éosguri'
        }})
        Alert.alert(
          ''+this.state.nomeempresa+' '+this.state.titulodemanda
        )
        navigate('DemandaDetalhe', {demandaId: this.state.dados.demandas[4].id, empresaId: this.state.dados.demandas[4].idempresa})
      };


      return(
          <View style={styles.container}>
              <Text>Nome da empresa:</Text>
              <TextInput style={styles.caixinha}  ref= {(el) => {this.nomeempresa = el;}}
                onChangeText={(nomeempresa) => this.setState({nomeempresa})}
                value={this.state.nomeempresa}/>
              <Text>Título:</Text>
              <TextInput style={styles.caixinha}  ref= {(el) => {this.titulodemanda = el;}}
                onChangeText={(titulodemanda) => this.setState({titulodemanda})}
                value={this.state.titulodemanda}/>
              <Text>Descrição:</Text>
              <TextInput style={styles.caixadesc}  ref= {(el) => {this.descdemanda = el;}}
                onChangeText={(descdemanda) => this.setState({descdemanda})}
                value={this.state.descdemanda}/>
              <Button title="Adicionar" onPress={apertar} />
          </View>
      );
    }
}

export default LancaDemanda;


const styles = StyleSheet.create({
    container: {
      flex:1,
      padding:20,
      fontSize: 18,
      backgroundColor: '#ff7373',
      color: '#ffffff'
    },
    caixinha: {
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      backgroundColor: '#fff'
    },
    caixadesc:{
      height: 160, 
      borderColor: 'gray', 
      borderWidth: 1, 
      marginTop:10, 
      backgroundColor: '#fff' 
    }
  });