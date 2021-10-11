import React, { useState } from 'react';
import { Button, Alert, Image, Platform } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';

export default function Factorial() {

    const [numero1, setNumero1] = useState(0);

    function factorial () {
        var total = 1; 
        for (var i=1; i<=numero1; i++) {
            total = total * i; 
        }
        return total; 
    }

    const [total, setTotal] = useState(factorial());

    function FactorialNumeros() {
        const nuevoTotal = factorial();
        setTotal(nuevoTotal);
        
        if(isNaN(numero1)){
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
                
                onChangeText={v => {
                    setNumero1(Number.parseFloat(v));
                }}
            />
            <Button onPress={FactorialNumeros} title="Factorial" />
            
        </ScrollView>
    );
    
}


