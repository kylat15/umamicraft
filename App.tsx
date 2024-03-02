import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingSplash from './src/LoadingSplash';
import Onboarding0 from './src/Onboarding0'; // Import the Onboarding0 component
import Onboarding1 from './src/Onboarding1' // Import the Onboarding1 component
import Onboarding2 from './src/Onboarding2'; // Import the Onboarding2 component
import Login from './src/Login'; // Import the LoginScreen component
import Register from './src/Register'; // Import the RegisterScreen component
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [fontsLoaded, error] = useFonts({
    "ArchivoBlack-Regular": require("./assets/fonts/ArchivoBlack-Regular.ttf"),
    "OrelegaOne-Regular": require("./assets/fonts/OrelegaOne-Regular.ttf"),
    "DidactGothic-Regular": require("./assets/fonts/DidactGothic-Regular.ttf"),
    "Basic-Regular": require("./assets/fonts/Basic-Regular.ttf"),
    "HiraKakuStdN-W8": require("./assets/fonts/HiraKakuStdN-W8.otf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "HiraKakuProN-W3": require("./assets/fonts/HiraKakuProN-W3.otf"),
    "HiraKakuPro-W3": require("./assets/fonts/HiraKakuPro-W3.otf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingSplash"
        screenOptions={{
          headerShown: false, // Hide the header for all screens
        }}>
        <Stack.Screen name="LoadingSplash" component={LoadingSplash} />
        <Stack.Screen name="Onboarding0" component={Onboarding0} />
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;