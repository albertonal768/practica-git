import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = (op) => {
    const n1 = parseFloat(num1);
  
    if (isNaN(n1)) {
      setResultado("Error: Ingresa números válidos");
      return;
    }
    if (op === "multiplicar") setResultado(n1 * 4 );
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <TextInput placeholder="Medida en Cm" keyboardType="numeric" style={{ borderWidth:1, padding:8, margin:5, width:200 }} onChangeText={setNum1}/>
      
      <View style={{ flexDirection:'row', marginTop:10 }}>
        <Button title="CALCULAR" onPress={() => calcular("multiplicar")} />
      </View>

      {resultado !== null && <Text style={{ marginTop:10 }}>{resultado} cm2</Text>}
    </View>
  );
}