import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, Image, Text, View } from 'react-native';
import Cards from './Cardss';

const comidas =[
  {
    id: '1',
    name:'Pupusas',
    desc: 'Harina de arroz, quesillo y frijoles',
    img:require('./img/c1.jpg')
  },
  {
    id: '2',
    name:'Yuca',
    desc: 'Yuca, curtido, pepino, tomate, salsa de tomate',
    img:require('./img/c2.jpg')
  },
  {
    id: '3',
    name:'Enchiladas',
    desc: 'Tortilla de maíz frita, frijoles, curtido, pepino, tomate, rabano y huevo',
    img:require('./img/c3.jpg')
  },
  {
    id: '4',
    name:'Pastelitos',
    desc: 'Harina de maíz, verduritas con carne, curtido y salsa de tomate',
    img:require('./img/c4.jpg')
  },
  {
    id: '5',
    name:'Empanadas',
    desc: 'Plátanos, azúcar, leche y frijoles',
    img:require('./img/c5.jpg')
  },
]

export default function App() {
  const renderItem = ({ item }) => <Cards comidas={item} />;
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={comidas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
