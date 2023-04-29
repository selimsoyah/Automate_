import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Axios from 'axios'
/*
  <Button
                style={styles.but1}
                title={hidePassword ? 'Show' : 'Hide'}                onPress={togglePasswordVisibility}
/>*/ 
const ForgotPassword = ({ navigation }) => {
    const [email, onChangeEmail] = useState('');
    const [password, Setpassword] = useState("");
    const [confirmPassword, SetconfirmPassword] = useState("");
    const [hidePassword, setHidePassword] = useState(true);
    const [Status, Setstatus] = useState(false)
    const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };
    const updatepassword = async () => {
        try {
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            const response = await Axios.put(`http://ip:3000/updatepass`, {
                email: email,
                password: password,
            });
            console.log(response.data);
            if (response.data.includes("Email does not exist")) {
                alert("Please Check Your Email");
            }
            if (response.data.includes("Password updated successfully!")) {
                alert("Password Updated Successfully !!");
                navigation.navigate("LogIn");
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.mainword}>Forgot Password</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={onChangeEmail}
                    autoCapitalize='sentences'
                    keyboardType='email-address'
                    required={true}
                    placeholder='Insert Your Email'
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={Setpassword}
                    autoCapitalize='sentences'
                    secureTextEntry={hidePassword}
                    required={true}
                    placeholder='Insert Your New Password'
                />
                <TextInput
                    style={styles.input}
                    value={confirmPassword}
                    onChangeText={SetconfirmPassword}
                    autoCapitalize='sentences'
                    secureTextEntry={hidePassword}
                    required={true}
                    placeholder='Confirm Password'
                />
            </View>
          
            <TouchableOpacity style={styles.button} onPress={updatepassword}>
                <Text style={{ color: 'white' }}>Change Password</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    but1: {
    },
    button: {
        width: 130,
        backgroundColor: '#334155',
        height: 40,
        borderRadius: 5,
        height: 24,
        marginBottom: 100,
        marginTop: 250,

    },
    container: {
        flex: 1,
        backgroundColor: '#94A3B8',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    mainword: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 35,
        color: '#FFFFFF',
        marginTop: 100,
    },
    inputContainer: {
        position: 'absolute',
        top: 250,
        alignItems: 'center',
    },
    input: {
        height: 50,
        marginRight: 50,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ForgotPassword;
