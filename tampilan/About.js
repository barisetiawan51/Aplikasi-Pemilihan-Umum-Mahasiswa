import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    StyleSheet,
} from 'react-native';
import Footer from './Footer';

class About extends Component {
    render() {
        return (
            <View style={tampilan.container}>
                <ScrollView style={tampilan.scrollview}>
                    <View>
                        <Image
                            source={require('../Image/KPU_UMP.png')}
                            style={tampilan.gambar}></Image>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                marginTop: 10,
                                marginBottom: 5,
                                fontSize: 20,
                                color: '#000000',
                                alignSelf: 'center',
                            }}>
                            E-COBLOS UMP
                        </Text>

                        <Text
                            style={{
                                fontSize: 15,
                                color: '#000000',
                                textAlign: 'justify',
                                marginRight: 15,
                                marginLeft: 15,
                            }}>
                            E-Coblos UMP merupakan suatu aplikasi yang bergerak dibidang politik, guna menciptakan hasil pemilihan secara cepat dan akurat.
                            Disamping itu, dengan semakin majunya teknologi maka pemilihan suara yang dilakukan secara online mampu terimplementasikan.
                            Universitas Muhammadiyah Purwokerto merupakan perguruan tinggi swasta terbesar di Jawa Tengah bagian barat, yang terakreditasi B.
                            UMP secara aktif terus mengembangkan kemajuan teknologi dalam berbagai bidang, salah satunya pada aplikasi ini.
                        </Text>
                    </View>
                </ScrollView>
                <View>
                    <Footer navigation={this.props.navigation}></Footer>
                </View>
            </View>
        );
    };
};
const tampilan = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD700',
    },
    scrollview: {
        flex: 1,
        padding: 10,
    },
    button: {
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 20,
        borderRadius: 15,
        elevation: 5,
    },
    gambar: {
        width: 150,
        height: 150,
        marginTop: 25,
        alignSelf: 'center',
    },
});
export default About;