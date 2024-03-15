import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import { StackActions } from '@react-navigation/native';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Login'));
    }, 3000);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFD700',
          }}>
          <Image
            source={require('../Image/KPU_UMP.png')}
            style={{ width: 175, height: 175 }}
          />
        </View>
      </View>
    );
  }
}
export default SplashScreen;