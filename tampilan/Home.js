import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  BackHandler,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { setUsername } from './actions';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'E-Coblos UMP',
      value: true,
      data: []
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
    this.getData();
  }

  componentWillUnmount() {
    this.BackHandler.remove();
  }

  getData = () => {
    const url = 'http://192.168.43.60:3000/users';

    axios
      .get(url)
      .then(response => {
        const json = response.data;
        this.setState({ data: json });
        console.log(json);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    const { username } = this.props.route.params;
    return (
      <View style={tampilan.container}>
        <ScrollView style={tampilan.scrollview}>
          <StatusBar barStyle="light-content" backgroundColor="#000000" />
          <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
            <View>
              <Image source={require('../Image/KPU_UMP.png')}
                style={tampilan.logoheader}
              />
            </View>
            <View style={tampilan.header}>
              <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 22 }}>
                {this.state.header}
              </Text>
            </View>
          </View>

          <View>
            <Image source={require('../Image/poster_coblos.jpg')}
              style={tampilan.poster}
            />
            <Text style={{
              fontWeight: 'bold',
              fontSize: 16,
              paddingVertical: 5,
              paddingHorizontal: 22,
              color: '#000000',
              textAlign: 'justify',
            }}>
              Ikuti petunjuk pemilihan calon presiden mahasiswa dibawah ini:
            </Text>
            <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
              <Text style={{

                fontSize: 16,
                paddingVertical: 3,
                paddingHorizontal: 11,
                color: '#000000',
              }}>
                1.
              </Text>
              <Text style={{

                fontSize: 16,
                paddingVertical: 3,
                marginRight: 40,
                color: '#000000',
                textAlign: 'justify',
              }}>Membaca visi dan misi dari setiap CAPRESMA dan CAWAPRESMA.</Text>
            </View>

            <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
              <Text style={{

                fontSize: 16,
                paddingVertical: 3,
                paddingHorizontal: 11,
                color: '#000000',
              }}>
                2.
              </Text>
              <Text style={{

                fontSize: 16,
                paddingVertical: 3,
                marginRight: 40,
                color: '#000000',
                textAlign: 'justify',
              }}>Memilih kandidat dengan mengklik satu kali (setiap mahasiswa berhak memilih CAPRESMA dan CAWAPRESMA yang dirasa pantas).</Text>
            </View>

            <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
              <Text style={{

                fontSize: 16,
                paddingVertical: 3,
                paddingHorizontal: 11,
                color: '#000000',
              }}>
                2.
              </Text>
              <Text style={{

                fontSize: 16,
                paddingVertical: 3,
                marginRight: 40,
                color: '#000000',
                textAlign: 'justify',
              }}>Klik tombol setuju apabila anda yakin dengan pilihan CAPRESMA dan CAWAPRESMA yang dirasa pantas.</Text>
            </View>

            <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
              <Text style={{

                fontSize: 16,
                paddingVertical: 3,
                paddingHorizontal: 11,
                color: '#000000',
              }}>
                3.
              </Text>
              <Text style={{

                fontSize: 16,
                paddingVertical: 3,
                marginRight: 40,
                color: '#000000',
                textAlign: 'justify',
              }}>Selanjutnya, klik tombol dibawah ini untuk mulai melakukan pencoblosan CAPRESMA dan CAWAPRESMA.</Text>
            </View>

            <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
              <Text style={{

                fontSize: 16,
                paddingVertical: 3,
                paddingHorizontal: 11,
                color: '#000000',
              }}>
                4.
              </Text>
              <Text style={{

                fontSize: 16,
                paddingVertical: 3,
                marginRight: 40,
                color: '#000000',
                textAlign: 'justify',
              }}>Setelah anda melakukan pencoblosan, akan terdapat info bahwa anda telah melakukan pencoblosan jika anda menekan tombol info.</Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={tampilan.button_info_next}
              onPress={() => Alert.alert('Info', 'Berhasil melakukan pencoblosan')}>
              <Text style={{ fontWeight: 'bold' }}>Info</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={tampilan.button_info_next}
              onPress={() => this.props.navigation.navigate('Menu')}>
              <Text style={{ fontWeight: 'bold' }}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View>
          <View style={tampilan.footer}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() =>
                {this.props.navigation.navigate('Home', {username:username});
              }}
            >
              <Icon name="home" style={{ color: "white", fontSize: 20 }}></Icon>
              <Text style={{ color: "white" }}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                this.props.navigation.navigate('Profil', { username });
              }}
            >
              <Icon name="user-alt" style={{ color: "white", fontSize: 20 }}></Icon>
              <Text style={{ color: "white", marginTop: 5 }}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
              }}
              onPress={() => this.props.navigation.navigate('About')}
            >
              <Icon name="cog" style={{ color: "white", fontSize: 20 }}></Icon>
              <Text style={{ color: "white", marginTop: 5 }}>About</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
};
   const mapStateToProps = (state) => ({
  username: state.username,
});

const tampilan = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
  },
  scrollview: {
    flex: 1,
    padding: 10,
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 5,
  },
  logoheader: {
    height: 40,
    width: 40,
    marginTop: 5,
    marginLeft: 10,
  },
  poster: {
    height: 220,
    width: 320,
    resizeMode: 'contain',
    borderRadius: 15,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  button_info_next: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 62,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
    marginHorizontal: 10,
    borderRadius: 5,
    elevation: 5,
  },
  gambar: {
    width: 150,
    height: 150,
    marginTop: 10,
    alignContent: 'center',
  },
  kontainergambar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: "#000000",
    paddingVertical: 5,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'relative',
  },
});

export default connect(mapStateToProps)(Home);