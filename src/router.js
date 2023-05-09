import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Feather} from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

import Home from './Pages/Home';
import Detail from './Pages/Detail';

const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Home" 
                component={Home}
                 options={{
                    title: 'Alugue',
                    headerRight:()=>{
                        <TouchableOpacity style={{marginRight:25}}>
                            <Feather name="shopping-bag" size={24} color="black" />
                        </TouchableOpacity>
                    }
                }}
                
                 />
                <Stack.Screen 
                name="Detail" 
                component={Detail}
                options={{
                    title: 'Detalhee',
                    headerRight:()=>{
                        <TouchableOpacity style={{marginRight:15}}>
                            <Feather name="shopping-bag" size={24} color="black" />
                        </TouchableOpacity>
                    }
                }}

                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Routes;