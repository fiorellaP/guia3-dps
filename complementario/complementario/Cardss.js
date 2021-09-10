import React from 'react';
import { StyleSheet, Image, Text, View, AppRegistry } from 'react-native';
import { Card } from 'react-native-elements';

const Kard = ({ comidas }) => {
  return (
    <Card>
      <Card.Title> {comidas.name} </Card.Title>
      <Card.Divider />
          <View key={comidas.id} style={styles.comidas}>
            <Image style={styles.image} source={comidas.img} />
            <Text style={styles.name}>INGREDIENTES:</Text>
            <Text style={styles.desc}>{comidas.desc}</Text>
          </View>
    </Card>
  );
}


const styles = StyleSheet.create({

    comidas: {
      padding: 20,
      alignItems: 'center',
    },
  
    image: {
      width: 150,
      height:150,
    }
    
});

export default Kard
AppRegistry.registerComponent('Kard',()=>Kard)