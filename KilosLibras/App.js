import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function App() {
  const [kilogramos, setKilogramos] = useState("");
  const [libras, setLibras] = useState(null);

  const convertir = () => {
    const kg = parseFloat(kilogramos);
    if (isNaN(kg)) {
      setLibras(null);
      return;
    }
    const lb = kg * 2.20462;
    setLibras(lb);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Kilogramos"
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, margin: 5, width: 200 }}
        onChangeText={setKilogramos}
        value={kilogramos}
      />

      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Button title="CONVERTIR" onPress={convertir} />
      </View>

      {libras !== null && (
        <Text style={{ marginTop: 10 }}>
          Equivalencia: {libras.toFixed(4)} libras
        </Text>
      )}
    </View>
  );
}