import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView, TextInput } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';
import { Ionicons } from '@expo/vector-icons';

export default function App () {
  const [colors, setColors] = useState([]);
  
  const removeColor = () => {
    setColors(colors.slice(0, colors.length - 1));
  }
  const clearColors = () => {
    setColors([]);
};
const copyToClipboard = (color) => {
  Clipboard.setString(color);
  Toast.show({
    type: 'success',
    position: 'bottom',
    text1: 'Copied to clipboard!',
    text2: color,
    visibilityTime: 2000,
    autoHide: true,
    });
}

return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Generate Random Colors</Text>

      <View style={{flexDirection:'row', backgroundColor: 'black', width: '100%', height: '10%', alignItems: 'center', justifyContent: 'center' }}>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => setColors([...colors, randomRgb()])}>
          <Text style={styles.buttonText}>Add Color</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={removeColor}>
          <Text style={styles.buttonText}>Remove Color</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button} onPress={clearColors}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>

      </View>

      <FlatList
      showsVerticalScrollIndicator={false}
      numColumns={3}
      style={styles.lista}
      keyExtractor={(item) => item}
      data={colors}
      renderItem={({item}) => {
        return (
          <View style={{ width: 110, height: 110, backgroundColor: item, marginVertical: 10, marginStart: 5, marginEnd: 5, borderRadius: 10, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center'}}>
            
            <TouchableOpacity style={{alignItems: 'center'}} onPress={() => copyToClipboard(item)}>
              <Ionicons name="copy-outline" size={20} color="white" />
              <Text style={{fontSize: 12, color: 'white'}}> { item } </Text>
            </TouchableOpacity>
          </View>
        ) 
      }}
      />
      <Toast/>
    </SafeAreaView>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
  },
  button: {
    width: '25%',
    height: '75%',
    backgroundColor: 'white',
    marginBottom: '3%',
    marginHorizontal: '3%',
    marginTop: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: '3%',
  },
});
