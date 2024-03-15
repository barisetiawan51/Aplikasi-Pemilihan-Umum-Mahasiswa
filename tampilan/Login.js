import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  BackHandler,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import data from './database.json';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  jikakembali = () => {
    Alert.alert('Warning', 'Apakah mau keluar aplikasi?', [
      {
        text: 'Tidak',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Iya',
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };

  componentDidMount() {
    this.BackHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.jikakembali,
    );
  }

  componentWillUnmount() {
    this.BackHandler.remove();
  }

  validate_field = () => {
    const { username, password } = this.state;
    if (username === '' && password === '') {
      alert('Nomor Induk Mahasiswa dan Password Anda kosong');
      return false;
    } else if (username === '') {
      alert('Nomor Induk Mahasiswa Anda kosong');
      return false;
    } else if (password === '') {
      alert('Password Anda kosong');
      return false;
    }
    return true;
  };

  saveUserToStorage = async (user) => {
    try {
      const jsonUser = JSON.stringify(user);
      await AsyncStorage.setItem('user', jsonUser);
      console.log('User data saved to AsyncStorage');
    } catch (error) {
      console.log('Error saving user data to AsyncStorage:', error);
    }
  };

  making_api_call = () => {
    if (this.validate_field()) {
      const { username, password } = this.state;
      const url = 'http://192.168.43.60:3000/users';

      axios
        .get(url)
        .then((response) => {
          const users = response.data;
          const user = users.find((user) => user.username === username && user.password === password);
          if (user) {
            this.saveUserToStorage(user);
            this.setState({ password: '' });
            // Pass the username as a parameter to the next screen or component
          this.props.navigation.navigate('OnBoardingScreen', { username: user.username });
          } else {
            alert('Nomor Induk Mahasiswa atau password salah');
          }
        })
        .catch((error) => {
          console.log('Error fetching data:', error);
          alert('Terjadi kesalahan saat mengambil data');
        });
    }
  };



  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFD700' }}>
        <StatusBar backgroundColor={'#000000'} barStyle="light-content" />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 50 }}>
            E-COBLOS UMP
          </Text>
          <Image
            source={require('../Image/KPU_UMP.png')}
            style={{ width: 200, height: 200, marginTop: 25 }}
          ></Image>
          <Text
            style={{
              marginTop: 10,
              fontWeight: 'bold',
              marginTop: 25,
              marginBottom: 10,
              fontSize: 20,
            }}
          >
            Login Hak Pemilih
          </Text>
        </View>

        <View>
          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }}>
            <View style={tampilan.LogoLogin}>
              <Icon name="user-alt" size={25} color="#FFD700" />
            </View>
            <TextInput
              value={this.state.username}
              style={tampilan.buttonUsernamePassword}
              placeholder="Masukkan Nomor Induk Mahasiswa Anda"
              onChangeText={(value) => this.setState({ username: value })}
            />
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }}>
            <View style={tampilan.LogoLogin}>
              <Icon name="lock" size={25} color="#FFD700" />
            </View>
            <TextInput
              value={this.state.password}
              style={tampilan.buttonUsernamePassword}
              placeholder="Masukkan Password Anda"
              onChangeText={(value) => this.setState({ password: value })}
              secureTextEntry
            />
          </View>
        </View>

        <TouchableOpacity onPress={this.making_api_call} style={tampilan.buttonLogin}>
          <Text style={tampilan.buttonLoginText}>Login</Text>
        </TouchableOpacity>

        <View style={{ marginHorizontal: 20, flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
            <Text style={{ fontWeight: 'bold' }}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const tampilan = StyleSheet.create({
  LogoLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: 50,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    elevation: 5,
  },
  buttonUsernamePassword: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 10,
    elevation: 5,
    paddingLeft: 10,
  },
  buttonLogin: {
    backgroundColor: '#000000',
    paddingVertical: 15,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 15,
    elevation: 5,
  },
  buttonLoginText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Login;
