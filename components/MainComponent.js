import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { tudo } from '../shared/dados';
import Lista from './ListaComponent';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            dados : tudo
        }
    }

    render(){
        return(
            <Lista data={this.state.dados} />
    );
    }
}