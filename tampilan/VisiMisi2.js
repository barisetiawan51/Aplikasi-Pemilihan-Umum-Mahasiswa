import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, StyleSheet, Image, Modal } from 'react-native';

class VisiMisi2 extends Component {
    render() {
        return (
            <View style={tampilan.container}>
                <ScrollView style={tampilan.scrollview}>
                    <View style={{ marginLeft: 20, paddingRight: 30, marginTop: 20, }}>
                        <Text style={{ alignSelf: 'flex-start', marginTop: 10, fontSize: 16, fontWeight: 'bold' }}>Kandidat 2</Text>
                        <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 16, fontWeight: 'bold' }}>Visi</Text>
                        <Text style={{ marginTop: 10, fontSize: 16, textAlign: 'center' }}>Mewujudkan sinergitas antar elemen
                            mahasiswa demi terwujudnya KM UMP yang berkarakter.</Text>
                        <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 16, fontWeight: 'bold' }}>Misi</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginTop: 10, fontSize: 16 }}>1. </Text>
                            <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 16, textAlign: 'left' }}>Mengoptimalkan budaya literasi
                                mahasiswa melalui baca, diskusi dan tulis.</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginTop: 10, fontSize: 16 }}>2. </Text>
                            <Text style={{ marginTop: 10, fontSize: 16, textAlign: 'left' }}>Mewujudkan partisipasi mahasiswa dalam
                                gerakan sholat berjamaah sebagai perwujudan karakter islami.</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginTop: 10, fontSize: 16 }}>3. </Text>
                            <Text style={{ marginTop: 10, fontSize: 16, textAlign: 'left' }}>Mengembangkan gerakan mahasiswa dalam
                                menanggapi isu-isu sosial.</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginTop: 10, fontSize: 16 }}>4. </Text>
                            <Text style={{ marginTop: 10, fontSize: 16, textAlign: 'left' }}>Menjadikan BEM KM UMP sebagai sarana advokasi
                                mahasiswa.</Text>
                        </View>
                    </View>

                    <View style={tampilan.menu}>
                        <TouchableOpacity style={tampilan.buttonvisimisi} onPress={() => this.props.navigation.navigate('Menu')}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default VisiMisi2;

const tampilan = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD700',
    },
    scrollview: {
        flex: 1,
    },
    menu: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
    },
    buttonvisimisi: {
        backgroundColor: '#000000',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
    },
});