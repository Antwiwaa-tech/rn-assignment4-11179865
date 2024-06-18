import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, Text, Image,  TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (name && email) {
      navigation.navigate('Home', { userName: name });
    } else {
      // Remove the alert since it's not used anymore
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Jobizz</Text>
        <Text style={styles.subheader}>Welcome Back 👋</Text>
        <Text style={styles.subhead}>Let's log in Apply to jobs!</Text>
      </View>
      <View style={styles.main}>
        <TextInput
          style={styles.placeholder}
          placeholder='Name'
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.placeholder}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
        />
        <Pressable
          onPress={handleLogin}
          style={styles.button}
          disabled={!name || !email}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>Log in</Text>
        </Pressable>
      </View>
      <View style={styles.footerContainer}>
        <Image source={require("./assets/Group 52.png")} />
        <View style={styles.icon}>
          <Image source={require('./assets/apple.png')} style={styles.googleIcon} />
          <Image source={require('./assets/google.png')} style={styles.googleIcon} />
          <Image source={require('./assets/facebook.png')} style={styles.googleIcon} />
        </View>
        <View style={styles.registerContainer}>
          <Text style={styles.footer}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerLink}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    marginTop: 150,
    marginBottom:50,
    marginLeft:30,
    alignSelf:"flex-start"
  },
  main: {
    alignItems: 'center',
    width: '80%',
    marginBottom:50,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#356899",
    marginBottom: 25,
  },
  subheader: {
    color: "#0D0D26",
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 15,
  },
  subhead: {
    color: "#AFB0B6",
    fontSize: 20,
  },
  placeholder: {
    fontSize: 20,
    borderWidth: 0.5,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    borderColor: '#AFB0B6',
    width: '100%',
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 5,
    backgroundColor: "#356899",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 30,
  },
  googleIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  footer: {
    fontSize: 16,
  },
  registerLink: {
    color: "#356899",
    textDecorationLine: 'underline',
    marginLeft: 5,
    fontSize: 16,
  },
  footerContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop:20
  },
});

export default Login;
