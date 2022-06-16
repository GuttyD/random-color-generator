import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView, TextInput } from 'react-native';

export default function App () {
  const [colors, setColors] = useState([]);
  
  const removeColor = () => {
    setColors(colors.slice(0, colors.length - 1));
  }
  const clearColors = () => {
    setColors([]);
}

  //display the rgb codes in the view as a string
  const displayColors = () => {
    return colors.map((color, index) => {
      return <Text key={index}>{color}</Text>
    }
    )
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
          <View style={{ width: 100, height: 100, backgroundColor: item, marginVertical: 5, marginHorizontal: 5, borderRadius: 10, borderWidth: 1}}/>        
        ) 
      }}
      />
    </SafeAreaView>
  );
}

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
    marginTop: 50,
  },
  button: {
    height: 50,
    width: 100,
    backgroundColor: 'white',
    marginBottom: 10,
    marginHorizontal: 5,
    marginTop: 10,
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
    marginBottom: 10,
  },
});
