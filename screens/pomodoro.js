import React from 'react'
import {StyleSheet, Text, Button, View, TouchableOpacity,Image} from 'react-native'
import {css} from './css';

const MAX_SECONDS = 1500 //25min
const REST_SECONDS = 300 //5min
const DURATION = 1000

/* timer/pomodoro screen */

class Count extends React.Component {
  constructor() {
    super()
    this.state = {
      count: MAX_SECONDS, 
      breakCount: REST_SECONDS,
      isCountingDown: false,
    }
    this.interval = null

    this.startCounter = this.startCounter.bind(this)
    this.stopCounter = this.stopCounter.bind(this)
    this.resetCounter = this.resetCounter.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
    this.startBreakCounter = this.startBreakCounter.bind(this)
    this.decrementBreakCount = this.decrementBreakCount.bind(this)
  }

  startCounter () {
    if(this.state.isCountingDown) {
      console.log('already decrementing')
    } else {
      this.interval = setInterval(this.decrementCount, 1000)
      this.setState({isCountingDown: true, status: 'working'}) 
    }
    if(this.state.isCountingDown) {
      console.log('already decrementing')
    } else {
      if(this.state.count <= 0 && this.state.breakCount > 0) { 
        clearInterval(this.interval)
        this.startBreakCounter()
      }
      if(this.state.count <= 0 && this.state.breakCount <= 0) {
        this.resetCounter()
      }
    }
  }

  resetCounter () { 
    this.stopCounter()
    this.setState({ 
      count: MAX_SECONDS,
      breakCount: REST_SECONDS,
      status: 'idle'
    })
  }

  stopCounter () {
    if(this.interval){
      clearInterval(this.interval) 
      this.setState({isCountingDown: false, status: 'idle'})
    } else {
      console.log('no interval to clear')
    }
  }

  decrementCount () {
    this.setState(prevState => ({count: prevState.count - 1})) 
    if(this.state.count === 0) {
      this.stopCounter()
      this.startBreakCounter()
      
    }
  }

  startBreakCounter() {
    if(this.state.isCountingDown) { 
      console.log('already decrementing')
    } else {
      this.interval = setInterval(this.decrementBreakCount, 1000) 
      this.setState({isCountingDown: true, status: 'resting'}) 
    }
    if(this.state.breakCount <= 0) {
      this.resetCounter()
    }
  }

  decrementBreakCount() {
    this.setState(prevState => ({breakCount: prevState.breakCount -1}))
    if(this.state.breakCount === 0) { 
      this.stopCounter() 
      
    }
  }
  
  render() {
    let minutes = Math.floor(this.state.count / 60)
    let seconds = this.state.count % 60
    let restMinutes = Math.floor(this.state.breakCount / 60)
    let restSeconds = this.state.breakCount % 60

    //switch between work/rest depending on which timer is running
    const statusMessage = () => { 
      if(this.state.status === 'working') { 
        return 'Hora de Estudar' 
      } else if(this.state.status === 'resting') { 
        return 'Descanse!' 
      } else {
        return ''
      }
    }

    return (
      <View style={css.container}>
        <View style={css.centralized}>
            <Text style={styles.statusText}>
            {
            statusMessage()
            }
            </Text>
            <Text style={css.h3b}>Estudo</Text>
            <Text style={styles.timerStyle}>{`${minutes < 10 ? ('0' + minutes.toString()) : minutes} : ${seconds < 10 ? ('0' + seconds.toString()) : seconds }`}</Text>
            <Text></Text><Text></Text>
            <Text style={css.h3b}>Descanso</Text>
            <Text style={styles.timerStyle}>{`${restMinutes < 10 ? ('0' + restMinutes.toString()) : restMinutes} : ${restSeconds < 10 ? ('0' + restSeconds.toString()) : restSeconds }`}</Text>
            
            <View style={{justifyContent: 'center',alignItems: 'center', flexDirection: 'row'}}>
                <TouchableOpacity style={styles.buttonStyle} onPress={this.startCounter}>
                    <Image source={require('../assets/images/baseline_play_arrow_white_24.png')}/>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.buttonStyle} onPress={this.stopCounter}>
                    <Image source={require('../assets/images/baseline_pause_white_24.png')}/>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.buttonStyle} onPress={this.resetCounter}>
                    <Image source={require('../assets/images/baseline_replay_white_24.png')}/>
                </TouchableOpacity> 
                
            </View>
        </View> 
      </View>
    )
  }
}

//styles

const styles = StyleSheet.create({
  buttonStyle: {
    height: 100,
    width: 100,
    borderRadius: 10,
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black",
    marginTop: 80,
    margin:5,
  },
  headerText: {
    fontSize: 40,
    marginBottom: 20,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  statusText: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 15,
    color: "red",
    fontWeight: 'bold',
    textAlign: "center"
  },
  timerStyle: {
    height: 70,
    width: 200,
    borderRadius: 10,
    backgroundColor: "black",
    color: "white",
    marginTop: 5,
    marginBottom: 5,
    textAlign: "center",
    fontSize: 50
  }
});

export default Count