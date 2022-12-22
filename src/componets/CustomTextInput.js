import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icons from 'react-native-vector-icons/Entypo';

const CustomTextInput = (props) => {
    const {
        placeholder,
        placeholderColor,
        secureTextEntry,
        keyboardType,
        type,
        onChangeText = () => { },
        showHidePassword,
        onEyeClick

    } = props

    const [value, setValue] = useState("")
    const [showPassword, setShowPassword] = useState(true)

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputInnerContainer}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor}
                secureTextEntry={type === 'password' ? showPassword : false}
                // value={value}
                onChangeText={(text) => onChangeText(text)
                }
                keyboardType={keyboardType}

            />
            {type === 'password' ? <Icons
                onPress={() => setShowPassword(!showPassword)}
                name={showPassword ? 'eye' : 'eye-with-line'} size={30} color={'black'}
                style={{ alignSelf: 'center', marginRight: 17 }}
            /> : null}
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    inputContainer: {
        borderColor: 'gray',
        borderWidth: 1,
        width: '90%',
        height: 60,
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputInnerContainer: {
        color: 'black',
        fontSize: 15,
        padding: 15,
        width: "80%",
    }
})