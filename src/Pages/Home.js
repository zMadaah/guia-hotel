import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {ScrollView, TextInput }  from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import New from '../components/New';
import House from '../components/House';
import Recommended from '../components/Recommended';


export default function Home() {
  const navigation = useNavigation();
 return (
   <ScrollView style={{backgroundColor: '#fff',}}>
    <View style={styles.header}>
      <View style={styles.inputArea}>
        <Feather name="search" size={25} color='black'/>
        <TextInput
        placeholder='Procurando?'
        style={styles.input}
        />
      </View>
    </View>

    <View style={styles.contentNew}>
      <Text style={styles.title}>Novidades</Text>
    </View>

    <ScrollView style={{ paddingHorizontal: 15, }}>
      <New
       cover={require('../Images/house1.jpg')} 
       name="Casa de Praia"
       description="Casa nova em frente mar, lugar seguro."
       onPress={() => navigation.navigate('Detail') }
      />

      <New
       cover={require('../Images/house2.jpg')} 
       name="Casa Floripa"
       description="Casa nova com piscina."
       onPress={() => navigation.navigate('Detail') }
      />

      <New
       cover={require('../Images/house3.jpg')} 
       name="Casa em Alphaville"
       description="Casa nova de alto padrão em codominio, lugar seguro e monitorado 24horas."
       onPress={() => navigation.navigate('Detail') }
      />

      <New
       cover={require('../Images/house4.jpg')} 
       name="Casa em Alphaville"
       description="Casa nova de alto padrão em codominio, lugar seguro e monitorado 24horas."
       onPress={() => navigation.navigate('Detail') }
      />

    </ScrollView>

    <View style={{ flexDirection: 'row', marginBottom:10, alignItems: 'center' }}>
      <Text style={[styles.title, { marginTop: 20 } ]}>Próximo de você</Text>
    </View>  


    <ScrollView style={{ paddingHorizontal: 15 }}>
      <House
      cover={require('../Images/house4.jpg')}
      />
      <House
      cover={require('../Images/house5.jpg')}
      />
      <House
      cover={require('../Images/house6.jpg')}
      />
    </ScrollView>

    <Text style={[styles.title, { marginTop: 20 } ]}>
      Dica do dia
    </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={true} style={{paddingHorizontal: 15 }}>
      <Recommended
        cover={require('../Images/house1.jpg')}
        house="Casa Floripa"
        offer="25%"
      />
      <Recommended
        cover={require('../Images/house4.jpg')}
        house="Casa São Paulo"
        offer="15%"
      />
      <Recommended
        cover={require('../Images/house6.jpg')}
        house="Rancho Praia"
        offer="10%"
      />
    </ScrollView>
   
   </ScrollView>
  );
}



const styles = StyleSheet.create({
  header:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20, 
   },
   inputArea:{
     paddingHorizontal: 15,
     flexDirection: 'row',
     alignItems: 'center',
     width: '98%',
     backgroundColor:  '#eeeeee',
     paddingHorizontal: 10,
     height: 37,
     borderRadius: 10,
   },
   input:{
     paddingHorizontal: 10,
     fontSize: 13,
     width: '90%'
   },
   contentNew:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  title:{
    paddingHorizontal: 15,
    fontSize: 30,
    color: '#4f4a4a',
    fontWeight:'bold',
  },
});