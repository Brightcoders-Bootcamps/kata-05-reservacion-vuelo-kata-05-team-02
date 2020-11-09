import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Modal,
    TouchableOpacity,
} from 'react-native';

function SignUpButton(props) {
    const { objValues,showModal, setIsLoginFormActive,isLoginFormActive,signUpGoogle} = props;
    const [classColor, setClassColor] = useState('#B6B7BA');
    const [buttonDisable, setButtonDisable] = useState(true);

    React.useEffect(() => {
        checkNulls();
    });
    const checkNulls = () => {
        if (
            !objValues.name ||
            !objValues.email ||
            !objValues.password ||
            !objValues.agreed ||
            !objValues.subscribed
        ) {
            setClassColor('#B6B7BA');
            setButtonDisable(true);
        } else {
            setClassColor('#5B6EF8');
            setButtonDisable(false);
        }
    };
    return (

        <View style={[styles.containerForm, { marginTop: 20 }]}>
            <TouchableOpacity
                disabled={buttonDisable}
                onPress={showModal}
                style={[
                    styles.ContainerOfButtonSignUp,
                    styles.containerForm,
                    { backgroundColor: classColor, borderWidth: 0 },
                ]}>
                <View>
                    <Text style={styles.textButtons}>
                        {isLoginFormActive ? "Log In": "Sign Up"}
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={{ alignItems: 'center', margin: 10 }}>
                <Text style={{ color: '#C9CED6', fontSize: 15 }}>or</Text>
            </View>
            <TouchableOpacity disabled={buttonDisable} onPress={() => signUpGoogle()
                .then(() => console.log('Signed in with Google!'))
                .catch((e) => console.log(e))}>
                <View
                    style={[
                        styles.ContainerOfButtonSignUpGoogle,
                        { backgroundColor: classColor },
                    ]}>
                    <View style={styles.viewIconGoogle}>
                        <Image
                            style={styles.iconGoogle}
                            source={require('../img/google.png')}
                        />
                    </View>
                    <Text style={[styles.textButtons, { paddingLeft: 25 }]}>
                         {isLoginFormActive ? "Log In": "Sign Up"} with Google
                    </Text>
                </View>
            </TouchableOpacity>
            <View
                style={[
                    styles.containerForm,
                    { flexDirection: 'row', marginTop: 10, justifyContent: 'center' },
                ]}>
                    <Text style={{ color: '#B6B7BA', fontSize: 15 }}> {isLoginFormActive? "Do not have an account?" : "Already have an account"} </Text>

                    <Text style={{ color: 'blue', textDecorationLine: 'underline' }} onPress={() => setIsLoginFormActive(!isLoginFormActive)}> {isLoginFormActive? "Sign Up" : "Log in"} </Text>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    containerForm: {
        marginHorizontal: 15,
    },
    iconGoogle: {
        height: 30,
        width: 30,
    },
    ContainerOfButtonSignUp: {
        borderRadius: 10,
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    textButtons: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        width: '80%',
    },
    viewIconGoogle: {
        width: '20%',
        alignItems: 'center',
    },
    ContainerOfButtonSignUpGoogle: {
        backgroundColor: '#B6B7BA',
        borderRadius: 10,
        flexDirection: 'row',
        width: '90%',
        marginHorizontal: 20,
        height: 50,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    containerButtonsSignUp: {
        alignItems: 'center',
    },
});

export default SignUpButton;