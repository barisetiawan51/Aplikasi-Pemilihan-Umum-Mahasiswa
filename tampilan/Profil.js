import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Alert,
    BackHandler,
    FlatList,
} from 'react-native';
import Footer from './Footer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: 'E-Coblos UMP',
            value: true,
            username: '',
            data: {},
            users: [],
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
            this.jikakembali
        );
        const { route } = this.props;
        const { username } = route.params || {};
        this.setState({ username }); // Simpan username ke dalam state
        this.getData(username);
    }


    componentWillUnmount() {
        this.BackHandler.remove();
    }

    getData = (username) => {
        const apiUrl = 'http://192.168.43.60:3000/users';
        axios
            .get(apiUrl)
            .then((response) => {
                const users = response.data;
                console.log('Users:', users); // Check the retrieved users data

                const user = users.find((user) => user.username === username);
                console.log('Username:', username); // Check the logged-in username value
                console.log('User:', user); // Check the matched user object

                if (user) {
                    this.setState({ data: user });
                } else {
                    console.log('User not found');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    componentDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username) {
      // Perbarui state dengan nilai username baru dari props
      this.setState({ username: this.props.username });
    }
  }

    render() {
        const { data, username } = this.state;
        return (
            <View style={tampilan.container}>
                <ScrollView style={tampilan.scrollview}>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                        <View>
                            <Image
                                source={require('../Image/KPU_UMP.png')}
                                style={tampilan.logoheader}
                            />
                        </View>
                        <View style={tampilan.header}>
                            <Text
                                style={{
                                    color: '#000000',
                                    fontWeight: 'bold',
                                    fontSize: 22,
                                }}
                            >
                                {this.state.header}
                            </Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Image
                                source={require('../Image/People.png')}
                                style={tampilan.gambar}
                            />
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    fontSize: 15,
                                    color: 'black',
                                }}
                            >
                                PROFIL MAHASISWA
                            </Text>
                            <Text style={{ textAlign: 'center', color: 'black' }}>
                                Universitas Muhammadiyah Purwokerto
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginHorizontal: 10,
                                marginTop: 10,
                                alignItems: 'center',
                            }}
                        >
                            <Icon
                                name="users"
                                style={{ color: 'black', fontSize: 30 }}
                            ></Icon>
                            <View>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        textAlign: 'justify',
                                        marginTop: 15,
                                        marginLeft: 15,
                                    }}
                                >
                                    NAMA:
                                </Text>
                                <Text
                                    style={{
                                        textAlign: 'justify',
                                        marginBottom: 10,
                                        marginLeft: 15,
                                    }}
                                >
                                    {data.nama}
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                                flex: 1,
                                marginLeft: 10,
                                marginRight: 10,
                                opacity: 0.1,
                            }}
                        ></View>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginHorizontal: 10,
                                marginTop: 10,
                                alignItems: 'center',
                            }}
                        >
                            <Icon
                                name="list-ol"
                                style={{ color: 'black', fontSize: 30 }}
                            ></Icon>
                            <View>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        textAlign: 'justify',
                                        marginTop: 15,
                                        marginLeft: 23,
                                    }}
                                >
                                    NIM:
                                </Text>
                                <Text
                                    style={{
                                        textAlign: 'justify',
                                        marginBottom: 10,
                                        marginLeft: 23,
                                    }}
                                >
                                    {data.username}
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                                flex: 1,
                                marginLeft: 10,
                                marginRight: 10,
                                opacity: 0.1,
                            }}
                        ></View>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginHorizontal: 13,
                                marginTop: 10,
                                alignItems: 'center',
                            }}
                        >
                            <Icon
                                name="user-graduate"
                                style={{ color: 'black', fontSize: 30 }}
                            ></Icon>
                            <View>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        textAlign: 'justify',
                                        marginTop: 15,
                                        marginLeft: 24,
                                    }}
                                >
                                    PROGRAM STUDI:
                                </Text>
                                <Text
                                    style={{
                                        textAlign: 'justify',
                                        marginBottom: 10,
                                        marginLeft: 24,
                                    }}
                                >
                                    {data.prodi}
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                                flex: 1,
                                marginLeft: 10,
                                marginRight: 10,
                                opacity: 0.1,
                            }}
                        ></View>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginHorizontal: 13,
                                marginTop: 10,
                                alignItems: 'center',
                            }}
                        >
                            <Icon
                                name="address-book"
                                style={{ color: 'black', fontSize: 30 }}
                            ></Icon>
                            <View>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        textAlign: 'justify',
                                        marginTop: 15,
                                        marginLeft: 24,
                                    }}
                                >
                                    KONTAK:
                                </Text>
                                <Text
                                    style={{
                                        textAlign: 'justify',
                                        marginBottom: 10,
                                        marginLeft: 24,
                                    }}
                                >
                                    {data.kontak}
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                                flex: 1,
                                marginLeft: 10,
                                marginRight: 10,
                                opacity: 0.1,
                            }}
                        ></View>
                    </View>

                    <View>
                        <TouchableOpacity
                            style={tampilan.button}
                            onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <Text style={{ fontWeight: 'bold' }}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View>
                    <Footer navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
}

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
    gambar: {
        width: 180,
        height: 180,
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
        marginBottom: 20,
        marginHorizontal: 20,
        borderRadius: 5,
        elevation: 5,
    },
});

export default Profil;
