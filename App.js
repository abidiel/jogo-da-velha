import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import jogodavelha from './src/jogodavelha';



type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);

    // chama a funcao start do arquivo jogodavelha.js
    jogodavelha.start();

    this.state = {
      board: jogodavelha.board,
      gameOver: jogodavelha.gameover
    }
  }

  makePlay(index){

    jogodavelha.make_play(index)

    this.setState({
      board: jogodavelha.board,
      gameOver: jogodavelha.gameover
    })
  }

  //funcao que retorna um componente, se atender a condição
  isGameOver(){
    if(this.state.gameOver){
      return <Text>Game Over</Text>
    }
  }
  render() {
    return (
      <View style={styles.container}>

        {this.state.board.map((value, index)  => (
          <TouchableOpacity key = {index} style={styles.piece} onPress = {() => this.makePlay(index)}>
            <Text style = {styles.pieceText}>
              {value}
            </Text>
          </TouchableOpacity>
        ))}

        {
          this.isGameOver()
        }



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  piece: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    backgroundColor: "#ddd",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: "#111"
  },

  pieceText: {
    fontSize: 60,
  },
});
