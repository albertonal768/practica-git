import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function App() {
  const [base, setBase] = useState("");
  const [altura, setAltura] = useState("");
  const [area, setArea] = useState(null);

  const calcular = () => {
    const b = parseFloat(base);
    const h = parseFloat(altura);

    if (isNaN(b) || isNaN(h)) {
      setArea(null);
      return;
    }

    const a = (b * h) / 2;
    setArea(a);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Base (cm)"
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, margin: 5, width: 200 }}
        onChangeText={setBase}
        value={base}
      />
      <TextInput
        placeholder="Altura (cm)"
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, margin: 5, width: 200 }}
        onChangeText={setAltura}
        value={altura}
      />

      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Button title="CALCULAR ÁREA" onPress={calcular} />
      </View>

      {area !== null && (
        <Text style={{ marginTop: 10 }}>
          Área: {area.toFixed(2)} cm²
        </Text>
      )}
    </View>
  );
}