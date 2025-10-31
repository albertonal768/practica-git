import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function App() {
  const [lado, setLado] = useState("");       // entrada del usuario (lado del cuadrado)
  const [perimetro, setPerimetro] = useState(null);
  const [area, setArea] = useState(null);

  const calcular = () => {
    const l = parseFloat(lado);

    if (isNaN(l)) {
      setPerimetro(null);
      setArea(null);
      return;
    }

    setPerimetro(l * 4);
    setArea(l * l);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Lado en cm"
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, margin: 5, width: 200 }}
        onChangeText={setLado}
        value={lado}
      />

      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Button title="CALCULAR" onPress={calcular} />
      </View>

      {perimetro !== null && (
        <Text style={{ marginTop: 10 }}>El perímetro es de {perimetro} cm</Text>
      )}
      {area !== null && (
        <Text style={{ marginTop: 10 }}>El área es de {area} cm²</Text>
      )}
    </View>
  );
}