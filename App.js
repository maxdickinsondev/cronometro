import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default class Cronometro extends Component{

  constructor(props){
    super(props);
    this.state = {
      tempo:0,
      botao:'COMEÇAR'
    };

    this.timer = null;

    this.comecar = this.comecar.bind(this);
    this.zerar = this.zerar.bind(this);
  }

  comecar(){

    let s = this.state; 

    if (this.timer != null){
      //Parar o timer
      clearInterval(this.timer);
      this.timer = null;
      s.botao = "COMEÇAR";
    }else{
      //Começar o timer
      this.timer = setInterval(()=>{
        let s = this.state;
        s.tempo += 0.1;
        this.setState(s);
      }, 100);

      s.botao = "PARAR";
    }

    this.setState(s);
  }

  zerar(){

    if (this.timer != null){
      //Para o timer
      clearInterval(this.timer);
      this.timer = null;
    }

    let s = this.state;
    s.tempo = 0;
    s.botao = 'COMEÇAR';
    this.setState(s);
  }

  render(){
    return(
      <View style={styles.body}>
          <Image style={styles.imagem} source={require('./images/hourglass.png')} />

          <View style={styles.areaTime}>
            <Text style={styles.time}> {this.state.tempo.toFixed(1)} </Text>
          </View>
          
          <View style={styles.botaoArea}>
            <TouchableOpacity style={styles.botao} onPress={this.comecar}>
              <Text style={styles.texto}> {this.state.botao} </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={this.zerar}>
              <Text style={styles.texto}>ZERAR</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.programador} >Developer by: Max Dickinson </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    paddingTop:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#6a5acd'
  },
  imagem:{
    width:150,
    height:150,
  },
  botaoArea:{
    flexDirection:'row',
    margin:20
  },
  botao:{
    flex:1,
    height:40,
    margin:10,
    marginTop:80,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'#ffa500',
  },
  texto:{
    fontSize:14,
    fontWeight:'bold',
    color:'#FFFFFF'
  },
  areaTime:{
    marginTop:70,
    justifyContent:'center',
    alignItems:'center'
  },
  time:{
    fontSize:60,
    justifyContent:'center',
    textAlign:'center',
    color:'#ffa500'
  },
  programador:{
    paddingTop:12,
    color:'#ffd700',
    fontStyle:'italic'
  }
});