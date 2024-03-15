import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './tampilan/store';

import Login from './tampilan/Login';
import OnBoardingScreen from './tampilan/OnBoardingScreen';
import Home from './tampilan/Home';
import SplashScreen from './tampilan/SplashScreen';
import Menu from './tampilan/Menu';
import Profil from './tampilan/Profil';
import About from './tampilan/About';
import VisiMisi1 from './tampilan/VisiMisi1';
import VisiMisi2 from './tampilan/VisiMisi2';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store = { store }>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="VisiMisi1" component={VisiMisi1} />
        <Stack.Screen name="VisiMisi2" component={VisiMisi2} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
export default App;