import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState({ suma: null, resta: null, multiplicacion: null, division: null, error: null });

  const calcular = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    // Resetear errores
    if (isNaN(a) || isNaN(b)) {
      setResultado({ suma: null, resta: null, multiplicacion: null, division: null, error: "Ingresa dos números válidos." });
      return;
    }

    // Evitar división por cero
    const div = (b === 0) ? null : a / b;

    setResultado({
      suma: a + b,
      resta: a - b,
      multiplicacion: a * b,
      division: div,
      error: null,
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Número 1"
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, margin: 5, width: 200 }}
        onChangeText={setNum1}
        value={num1}
      />
      <TextInput
        placeholder="Número 2"
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, margin: 5, width: 200 }}
        onChangeText={setNum2}
        value={num2}
      />

      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Button title="CALCULAR" onPress={calcular} />
      </View>

      {resultado.error && (
        <Text style={{ color: 'red', marginTop: 10 }}>{resultado.error}</Text>
      )}

      {resultado.suma !== null && (
        <Text style={{ marginTop: 10 }}>Suma: {resultado.suma}</Text>
      )}
      {resultado.resta !== null && (
        <Text style={{ marginTop: 6 }}>Resta: {resultado.resta}</Text>
      )}
      {resultado.multiplicacion !== null && (
        <Text style={{ marginTop: 6 }}>Multiplicación: {resultado.multiplicacion}</Text>
      )}
      {resultado.division !== null ? (
        <Text style={{ marginTop: 6 }}>División: {resultado.division}</Text>
      ) : (
        <Text style={{ marginTop: 6, color: 'red' }}>División: no se puede dividir entre 0</Text>
      )}
    </View>
  );
}