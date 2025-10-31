import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState(""); // Nota: corregiré en el bloque final
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = (op) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);
    const n4 = parseFloat(num4);

    // Validar que todos los números sean válidos
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
      setResultado("Entrada inválida");
      return;
    }

    // Calcular el promedio
    const promedio = (n1 + n2 + n3 + n4) / 4;

    // Actualizar el estado con el resultado
    setResultado(promedio);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Ingrese la calificacion 1"
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, margin: 5, width: 200 }}
        onChangeText={setNum1}
        value={num1}
      />
      <TextInput
        placeholder="Ingrese la calificacion 2"
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, margin: 5, width: 200 }}
        onChangeText={setNum2}
        value={num2}
      />
      <TextInput
        placeholder="Ingrese la calificacion 3"
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, margin: 5, width: 200 }}
        onChangeText={setNum3}
        value={num3}
      />
      <TextInput
        placeholder="Ingrese la calificacion 4"
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, margin: 5, width: 200 }}
        onChangeText={setNum4}
        value={num4}
      />
      
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Button title="CALCULAR" onPress={() => calcular("promedio")} />
      </View>

      {resultado !== null && (
        <Text style={{ marginTop: 10 }}>El promedio es: {resultado}</Text>
      )}
    </View>
  );
}