import React, { useState } from 'react';
import { Button, Alert, Image, Platform } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { View } from './Themed';
import { PanGestureHandler, State, ScrollView } from 'react-native-gesture-handler';

export default function Division() {

    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [total, setTotal] = useState(numero1 / numero2);

    function DividirNumeros() {
        const nuevoTotal = numero1 / numero2;
        setTotal(nuevoTotal);
        if(isNaN(numero1) || isNaN(numero2)){
            if(Platform.OS=="web"){
                alert("Ha ingresado un caracter diferente a un número.")
            }else{
                Alert.alert('Error', 'Ha ingresado un caracter diferente a un número.');
            } 
        }else{
            if(Platform.OS=="web"){
                alert('El resultado es: ' + nuevoTotal)
            }else{
                Alert.alert('Respuesta', 'El resultado es: ' + nuevoTotal);
            }
        }     
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps='handled'
        >
            <TextInput
                style={{borderWidth:1, margin:12, height:40, padding:10, width:200, backgroundColor:"white"}}
                placeholder="0"
                editable={true}
               
                onChangeText={v => {
                    setNumero1(Number.parseFloat(v));
                }}
            />
            <TextInput
                style={{borderWidth:1, margin:12, height:40, padding:10, backgroundColor:"white"}}
                placeholder="0"
                
                onChange={e => {
                    setNumero2(Number.parseFloat(e.nativeEvent.text)); // or get correct value from nativeEvent onChange
                }}
            />

            <Button onPress={DividirNumeros} title="División" />
        </ScrollView>
    );
}


