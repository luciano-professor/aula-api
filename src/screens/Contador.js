import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import tw from 'twrnc';

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [outroContador, setOutroContador] = useState(0);

  useEffect(() => {
    Alert.alert('', 'Efeito colateral executado.');
  }, [contador]);

  useEffect(() => {
    Alert.alert('', 'Efeito colateral do outro executado');
  }, [outroContador]);

  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-2xl`}>Você clicou {contador} vezes.</Text>

      <TouchableOpacity
        style={tw`bg-gray-600 p-3 rounded-lg`}
        onPress={() => setContador(contador + 1)}
      >
        <Text style={tw`text-xl`}>Contar</Text>
      </TouchableOpacity>

      {/* Outro Contador */}
      <Text style={tw`text-2xl`}>
        Você clicou no outro {outroContador} vezes.
      </Text>

      <TouchableOpacity
        style={tw`bg-gray-600 p-3 rounded-lg`}
        onPress={() => setOutroContador(outroContador + 1)}
      >
        <Text style={tw`text-xl`}>Contar Outro</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Contador;
