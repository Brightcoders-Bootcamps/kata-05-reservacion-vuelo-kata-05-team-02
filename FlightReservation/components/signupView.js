import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
} from 'react-native';

function Form() {
    return (
        <View style={{alignContent:"center", justifyContent:"center"}}>
            <Text style={styles.inputHeader} >First Name</Text>
            <TextInput style={styles.inputStyle}></TextInput>
            <Text style={styles.inputHeader}>Email</Text>
            <TextInput style={styles.inputStyle}></TextInput>
            <Text style={styles.inputHeader}>Password</Text>
            <TextInput style={styles.inputStyle}></TextInput>
        </View>
    )

}

function SignupForm() {

    return (
        <View>
            <Text style={styles.header}>Sign Up</Text>
            <Form />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        color: '#3E59F7',
        fontWeight: "bold",
    },
    inputHeader:{
        fontSize:20,
        color:"#818181",
        marginBottom:10,
    },
    inputStyle:{
        width:'80%',
        height: 70,
        backgroundColor: '#818181',
        paddingLeft: 15,
        paddingRight: 15,
        borderColor: "#818181",
    }
})

export default SignupForm;