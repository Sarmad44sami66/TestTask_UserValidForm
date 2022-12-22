import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomTextInput from './CustomTextInput'
import CustomButton from './CustomButton'

const Form = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isValidName, setIsValidName] = useState(false)
    const [isValidEmail, setIsValidEmail] = useState(false)
    const [isValidPassword, setIsValidPassword] = useState(false)

    // To Check Input Fields
    const inputcheck = async () => {
        console.log('Name>>>>>>>>', name)
        console.log('Name>>>>>>>>', email)
        console.log('Name>>>>>>>>', password)
        if (name != '') {
            setIsValidName(true)
        }
        if (password != '') {
            setIsValidPassword(true)
        }
        if (email != undefined ||
            email != '' ||
            email.length <= 0 ||
            !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            setIsValidEmail(true)
        }
    }

    return (
        <View style={{ justifyContent: 'center', marginVertical: 10 }}>
            <View style={{ backgroundColor: 'black', height: 2 }}></View>
            <Text style={{ color: 'black', fontSize: 15, marginLeft: '5%', marginTop: 10 }}>Employee Form {props?.formNumber}</Text>
            <CustomTextInput
                placeholder={'Name'}
                placeholderColor={'black'}
                onChangeText={(text) => setName(text)}
                value={name}
            />
            {isValidName === true ? <Text style={{ marginLeft: '5%', color: 'green' }}>Valid Name</Text>
                : <Text style={{ marginLeft: '5%', color: 'red' }}>Invalid Name</Text>}
            <CustomTextInput
                placeholder={'Email'}
                placeholderColor={'black'}
                onChangeText={(text) => setEmail(text)}
            />
            {isValidEmail === true ? <Text style={{ marginLeft: '5%', color: 'green' }}>Valid Email</Text>
                : <Text style={{ marginLeft: '5%', color: 'red' }}>Invalid Email</Text>}
            <View>
                <CustomTextInput
                    placeholder={'Password'}
                    placeholderColor={'black'}
                    iconName={'eye'}
                    type={'password'}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
            </View>
            {isValidPassword === true ? <Text style={{ marginLeft: '5%', color: 'green' }}>Valid Password</Text>
                : <Text style={{ marginLeft: '5%', color: 'red' }}>Invalid Password</Text>}
            <CustomButton
                title={'Submit'}
                onPress={() => inputcheck()}
            />
        </View>
    )
}

export default Form

const styles = StyleSheet.create({})