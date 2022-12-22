import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text, View,
  SafeAreaView,
  TouchableOpacity,
  FlatList
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import CustomTextInput from '../componets/CustomTextInput';
import CustomButton from '../componets/CustomButton';
import Form from '../componets/Form';
const HomeScreen = () => {

  const [data, setData] = useState([])
  const [formNumber, setFormNumber] = useState('')


  let pid = 1
  const addNewForm = () => {
    pid = pid + 1
    const newValue = {
      id: pid
    }
    setData(olddata => [...olddata, newValue]);
  }
  const removeForm = () => {

    const tempArray = [...data]
    tempArray.pop()
    setData([...tempArray])
  }

  const renderItem = ({ item, index }) => {
    return (
      <Form
        formNumber={index + 1}
      />
    )
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: 60 }}>
        <Text style={styles.textStyle}>Assignment</Text>
      </View>
      <View style={styles.iconStyle}>
        <TouchableOpacity>
          <Icon
            name='minuscircle' size={40} color='black'
            onPress={() => removeForm()}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name='pluscircle' size={40} color='black'
            onPress={() => addNewForm()}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        extraData={data.length}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
    </SafeAreaView >
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black'
  },
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 10
  },

})
