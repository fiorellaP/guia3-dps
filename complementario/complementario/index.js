import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Card, ListItem,Button,Icon } from 'react-native-elements';

const comidas =[
  {
    id: '1',
    name:'Pupusas',
    desc: 'Harina de arroz, quesillo y frijoles',
    img:'./img/c1.jpg'
  },
  {
    id: '2',
    name:'Yuca',
    desc: 'Yuca, curtido, pepino, tomate, salsa de tomate',
    img:'./img/c2.jpg'
  },
  {
    id: '3',
    name:'Enchiladas',
    desc: 'Tortilla de maíz frita, frijoles, curtido, pepino, tomate, rabano y huevo',
    img:'./img/c3.jpg'
  },
  {
    id: '4',
    name:'Pastelitos',
    desc: 'Harina de maíz, verduritas con carne, curtido y salsa de tomate',
    img:'./img/c4.jpg'
  },
  {
    id: '5',
    name:'Empanadas',
    desc: 'Plátanos, azúcar, leche y frijoles',
    img:'./img/c5.jpg'
  },
]

export const imagenes = {
  covers: {
    '1': require('./img/c1.jpg'),
    '2': require('./img/c2.jpg'),
    '3': require('./img/c3.jpg'),
    '4': require('./img/c4.jpg'),
    '5': require('./img/c5.jpg'),
  }
}

export default function App() {

  return(
    <Card>
    <Card.Title>COMIDAS TÍPICAS SALVADOREÑAS </Card.Title>
     <Card.Divider />
    {comidas.map((u, i) => {
      
      return (
        <View key={i} style={styles.comidas}>
          <Image style= { styles.image } source = {imagenes.covers[(i+1)] } />
          <Text style={styles.name}>{u.name}</Text>
          <Text style={styles.desc}>{u.desc}</Text>
        </View>
      );
    })}
    </Card>
  );
    
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  comidas: {
    padding: 20,
    alignItems: 'center',
  },

  image: {
    width: 150,
    height:150,
  }
  
});

