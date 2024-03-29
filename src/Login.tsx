import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation,NavigationProp } from '@react-navigation/native';

// Define the type for the stack navigator's parameters
type RootStackParamList = {
  Register: undefined;
  Home: undefined;
};

// Define the navigation prop type for Login and Register component
type RegisterNavigationProp = NavigationProp<RootStackParamList, 'Register'>;
type LoginNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

const LoginPage: React.FC = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigation = useNavigation<RegisterNavigationProp>();
  const navigation2 = useNavigation<LoginNavigationProp>();

  // Go to Login Screen
  const handleRegister = () => {
    navigation.navigate('Register');
  };

  // Go to Home Screen
  const handleLogin = () => {
    Alert.alert('Login Successful', 'User registered successfully!');
    navigation2.navigate('Home');
  };

  return (

    <View style={styles.container}>
      <Image source={require('../assets/login.png')} style={{ width: 150, height: 28}} />
      <Image source={require('../assets/welcome.png')} style={{ width: 320, height: 110}} />
      <Image source={require('../assets/jang-jorim.png')} style={{ width: 200, height: 200 }} />
      <Image source={require('../assets/irasshaimase.png')} style={{ width: 228.36, height: 50, marginBottom: 20 }} />
      <View style={styles.input}>
        <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        style={styles.textinput}
      />
      </View>
      
      <View style={styles.input}>
        <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        style={styles.textinput}
        secureTextEntry
      />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttontext} >Log In</Text>
      </TouchableOpacity>


      {/* "Or login with..." text */}
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 30}}>
        <View style={{flex: 1, height: 1, backgroundColor: '#841D06', marginHorizontal: 5 }} />
        <Text style={{marginHorizontal: 10}}>Or log in with...</Text>
        <View style={{flex: 1, height: 1, backgroundColor: '#841D06', marginHorizontal: 5 }} />
      </View>

      {/* Google, Facebook, and Twitter icons */}
      <View style={styles.icons}>
        <View style={styles.oneicon}>
            <Image source={require('../assets/google.png')} style={styles.imageicon}/>
        </View>
        
        <View style={styles.oneicon}>
            <Image source={require('../assets/facebook.png')} style={styles.imageicon}/>
        </View>

        <View style={styles.oneicon}>
            <Image source={require('../assets/twitter.png')} style={styles.imageicon}/>
        </View>
      </View>

      <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#841D06', letterSpacing: 2 }}>Forgot Password?</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
        <Text style={{color: 'black'}}>Don't have an account yet?</Text>
        <Text style={{color: '#841D06'}} onPress={handleRegister}> Register</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    flexDirection: 'row', 
    marginTop: 20, 
    marginBottom: 20 
  },
  oneicon: {
    width: 69, 
    height: 48, 
    borderWidth: 1, 
    borderColor: 'rgba(132, 29, 6, 0.6)', 
    borderRadius: 10, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginRight: 20
  },
  imageicon: {
    width: 30, 
    height: 30 
  },
  input: {
    flexDirection: 'row', 
    borderRadius: 24, 
    marginBottom: 20, 
    backgroundColor: 'lightgray'
  },
  textinput: {
    width: '90%', 
    fontSize: 20, 
    paddingTop: 10, 
    paddingBottom: 10, 
    paddingLeft: 40 
  },
  button: {
    padding: 10, width: '70%', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: 50, 
    borderRadius: 20, 
    backgroundColor: '#841D06'
  },
  buttontext: {
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold'
  }
});

export default LoginPage;
