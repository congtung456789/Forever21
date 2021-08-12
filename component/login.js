import React, { Component} from 'react';
import { SafeAreaView,TouchableHighlight, StyleSheet, Text, TextInput, View } from 'react-native';
const Myapp = ()=>{
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={[styles.pro,{ fontSize:20}]}>
                    Profile
                </Text>
            </View>   
            <View>
                <Text style = {{marginLeft:12,top:-100,fontSize:17,color:"gray" }}>*Email Address</Text>
                <TextInput
                 style = {[styles.input]}
                />
            </View>
            <View>
                <Text style = {{marginLeft:12,top:-100,fontSize:17,color:"gray" }}>*Password</Text>
                <TextInput
                 style = {[styles.input]}
                />
                <Text style = {{marginLeft:12,top:-100,fontSize:17,color:"black" }}>Forgot Password? </Text>
            </View>
            <View style={{ width: 350, color:'black',top: -60}}>
                <TouchableHighlight >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Sign in</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight >
                    <View style={[styles.button,{borderWidth:1,backgroundColor:'white'}]}>
                        <Text style={styles.buttonText}>Join now</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    pro:{
        top: -150,
        color:'black',
    },
    input:{
        top:-100,
        margin:12,
        borderWidth:1,
        padding: 10,
        height: 50,
        width:350,
    },
    button: {
        marginBottom: 30,
        width: 350,
        alignItems: 'center',
        backgroundColor: 'yellow'
      },
    buttonText: {
        padding: 20,
        color: 'black',
        fontSize:18
      }
});
export default Myapp;