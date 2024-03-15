import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');
class OnBoardingScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired,
        route: PropTypes.object.isRequired,
    };
    state = {
        activeIndex: 0,
        carouselItems: [
            {
                title: 'Welcome',
                Image: require('../Image/Welcome.png'),
                text: 'Selamat datang di E-Coblos UMP',
            },
            {
                title: 'Online Mode',
                Image: require('../Image/Welcome2.png'),
                text: 'Sekarang anda bisa mencoblos di mana saja tanpa harus datang ke tempat pemilu lohh',
            },
            {
                title: 'Are You Ready?',
                Image: require('../Image/Welcome3.png'),
                text: 'Siapkan hak suara anda!',
                buttonTitle: 'Next',
                onPressButton: () => {
                    const { username } = this.props.route.params;
                    this.props.navigation.navigate('Home', { username });
                }
            },
        ],
    };

    componentDidMount() {
        this.getUsernameFromStorage();
    }

    getUsernameFromStorage = async () => {
        try {
            const username = await AsyncStorage.getItem('username');
            if (username !== null) {
                this.setState({ username });
            }
        } catch (error) {
            console.log('Error retrieving username from AsyncStorage:', error);
        }
    };

    renderItem({ item }) {
        return (
            <View style={tampilan.slide}>
                <Image style={tampilan.image} source={(item.Image)} />
                <Text style={tampilan.title}>{item.title}</Text>
                <Text style={tampilan.text}>{item.text}</Text>
                {item.buttonTitle && item.onPressButton && (
                    <TouchableOpacity style={tampilan.button} onPress={item.onPressButton}>
                        <Text style={tampilan.buttonText}>{item.buttonTitle}</Text>
                    </TouchableOpacity>
                )}
            </View>
        );
    }

    render() {
        return (
            <View style={tampilan.container}>
                <Carousel
                    data={this.state.carouselItems}
                    renderItem={this.renderItem}
                    sliderWidth={width}
                    itemWidth={width}
                    onSnapToItem={(index) => this.setState({ activeIndex: index })}
                    decelerationRate={"fast"}
                    snapToInterval={width}
                    style={{ zIndex: -1 }}
                />
                <Pagination
                    dotsLength={this.state.carouselItems.length}
                    activeDotIndex={this.state.activeIndex}
                    containerStyle={tampilan.paginationContainer}
                    dotStyle={tampilan.paginationDot}
                    inactiveDotStyle={tampilan.paginationInactiveDot}
                    inactiveDotOpacity={0.5}
                    inactiveDotScale={0.8}
                    style={{ position: 'absolute', bottom: 0 }}
                />
            </View>
        );
    }
}
const tampilan = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFD700',
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '30%',
        resizeMode: 'center',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
    },
    paginationContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 100,
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 10,
        marginHorizontal: 5,
        backgroundColor: '#000000',
    },
    paginationInactiveDot: {
        width: 10,
        height: 10,
        borderRadius: 10,
        marginHorizontal: 5,
        backgroundColor: '#000000',
    },
    button: {
        backgroundColor: '#000000',
        paddingHorizontal: 35,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 20,
        elevation: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
export default OnBoardingScreen;