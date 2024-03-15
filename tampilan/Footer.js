import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.getData();
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
        const { username } = this.props;
        return (
            <View style={tampilan.footer}>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onPress={() => { this.props.navigation.navigate('Home', { username }); }
                    }
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
                    onPress={() => {this.props.navigation.navigate('About', {username});
                    }}
                >
                    <Icon name="cog" style={{ color: "white", fontSize: 20 }}></Icon>
                    <Text style={{ color: "white", marginTop: 5 }}>About</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const tampilan = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD700',
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

export default Footer;
