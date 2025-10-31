import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function App() {
  const [catetoA, setCatetoA] = useState("");
  const [catetoB, setCatetoB] = useState("");
  const [hipotenusa, setHipotenusa] = useState(null);

  const calcular = () => {
    const a = parseFloat(catetoA);
    const b = parseFloat(catetoB);

    if (isNaN(a) || isNaN(b)) {
      setHipotenusa(null);
      return;
    }

    const c = Math.sqrt(a * a + b * b);
    setHipotenusa(c);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Cateto a (cm)"
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, margin: 5, width: 200 }}
        onChangeText={setCatetoA}
        value={catetoA}
      />
      <TextInput
        placeholder="Cateto b (cm)"
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, margin: 5, width: 200 }}
        onChangeText={setCatetoB}
        value={catetoB}
      />

      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Button title="CALCULAR HIPOTENUSA" onPress={calcular} />
      </View>

      {hipotenusa !== null && (
        <Text style={{ marginTop: 10 }}>
          Hipotenusa: {hipotenusa.toFixed(4)} cm
        </Text>
      )}
    </View>
  );
}