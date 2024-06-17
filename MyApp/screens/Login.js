import React from 'react';
import { View, StyleSheet, TextInput, Pressable, Text } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.header}>Jobizz</Text>
        <Text style={styles.subheader}>Welcome Back 👋</Text>
        <Text style={styles.subhead}>Let's log in Apply to jobs!</Text>
      </View>
      <TextInput style={styles.placeholder} placeholder='Name' />
      <TextInput style={styles.placeholder} placeholder='Email' />

      <Pressable onPress={() => alert('Home')} style={styles.button}>
        <Text style={{ fontSize: 20 }}>Pressed</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop: 45,
    marginLeft: 35,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: "#356899",
    marginBottom: 30,
  },
  subheader: {
    color: "#0D0D26",
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  subhead: {
    color: "#AFB0B6",
    fontSize: 14,
  },
  placeholder: {
    fontSize: 20,
    borderWidth: 0.5,
    marginBottom: 50,
    padding: 15,
    borderRadius: 10,
    borderColor: '#AFB0B6',
    width: '80%',
  },
  button: {
    width: 327,
    height: 70,
    borderRadius: 5,
    backgroundColor: "#356899",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
