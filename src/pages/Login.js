import React from 'react';

import { View,KeyboardAvoidingView, Platform, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Logo from '../assets/logo.png';

export default function Login(){
  return ( 
    <KeyboardAvoidingView  enabled={Platform.OS === 'ios'}  behavior='padding' style={styles.container}>
      <Image source={Logo} />
      {/* <Text style={styles.textLogo}>App Vendas</Text> */}
      <View style={styles.form}>
        {/* <Text style={styles.label}>Seu E-mail*</Text> */}
        <TextInput style={styles.input}
          placeholder="Digite seu E-mail *"
          placeholderTextColor="#999"
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect='false'
        />
        {/* <Text style={styles.label}>Sua Senha*</Text> */}
        <TextInput style={styles.input}
          placeholder="Digite sua Senha"
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnLabel}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
)}
const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},
textLogo: {
padding: 10,
fontSize: 18,
},
form: {
alignSelf:'stretch',
paddingHorizontal: 30,
marginTop: 30,

},
label: {
  paddingHorizontal: 10,
  marginTop: 5,
  marginBottom: 5
},
input: {
 borderWidth: 2,
 borderRadius: 20,
 paddingHorizontal: 20,
 borderColor:'#000',
 height: 40,
 marginBottom: 15,
textAlign: 'center'
},
btn: {
  height: 40,
  backgroundColor:'#f05a5b',
  borderRadius:20,
  justifyContent:'center',
  alignItems:'center'
},
btnLabel: {
color:'#fff',
fontWeight:'bold',
fontSize:16
}
});