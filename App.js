import React, { Component } from 'react';
import { Text, View, Image ,TouchableOpacity} from 'react-native';
import {styles} from './assets/Estilos';
import Relogio from './Relogio';

export default class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      timer: null,
      number: 0,
      inicioParaText: 'Iniciar',
    }
    this.inicioParaBotao = this.inicioParaBotao.bind(this);
    this.limpaBotao = this.limpaBotao.bind(this);

  }

  //comeca ou para o cronometro
  inicioParaBotao(){
    if(this.state.timer == null){
      //Inicia cronometro
      
      let newP = this.state;
      newP.inicioParaText = 'Parar';
      this.setState(newP);
      
      this.state.timer = setInterval(() => {
        let newState = this.state;
        newState.number += 0.1;
        this.setState(newState);
      }, 100);

    }else{
      //para cronometro
      clearInterval(this.state.timer);
      let newState = this.state;
      newState.inicioParaText = 'Iniciar';
      this.state.timer = null;
      this.setState(newState);
    }
  }

  limpaBotao(){
    clearInterval(this.state.timer);
    let newState = this.state;
    newState.inicioParaText = 'Iniciar';
    newState.timer = null;
    newState.number = 0;
    this.setState(newState);
  }

  render (){
    return (
      <View style={styles.body}>

        <View style={styles.container_0}>
          <Image 
            style={styles.img}
            source={require('./assets/tempo02.png')}
          />
        </View>

        <View style={styles.container_2}>
          <Relogio />
        </View>

        <View style={styles.container_1}>
          <Text style={styles.txt}>Cronômentro!!!</Text>
          <Text style={styles.counterText}>{this.state.number.toFixed(1)}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={this.inicioParaBotao}>
                <Text style={styles.buttonText}>{this.state.inicioParaText}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={this.limpaBotao}>
                <Text style={styles.buttonText}>Zerar</Text>
              </TouchableOpacity>
            </View>
        </View>

        

        <View style={styles.footer}>
          <Text style={styles.footerText}>@JessProgrammer</Text>
        </View>

      </View>
    );
  }
}

