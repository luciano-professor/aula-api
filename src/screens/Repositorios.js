import { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import axios from 'axios';

import RepositorioItem from '../components/RepositorioItem';

const Repositorios = () => {
  const [repositorios, setRepositorios] = useState([]);

  const [textoPesquisa, setTextoPesquisa] = useState('React Native');

  async function lerRepositorios() {
    const resposta = await axios.get(
      `https://api.github.com/search/repositories?q=${textoPesquisa}&per_page=30`,
    );
    setRepositorios(resposta.data.items);
    // console.log(resposta.data.items);
    // console.log(resposta.data.items.length);
  }

  async function submeterInput() {
    //Limpando a lista
    setRepositorios([]);
    //Buscando novamente os repositórios
    await lerRepositorios();
  }

  useEffect(() => {
    lerRepositorios();
  }, []);

  // if (!repositorios.length) {
  //   return (
  //     <SafeAreaView style={tw`bg-blue-500 flex-1`}>
  //       <ActivityIndicator color="black" size={24} />
  //     </SafeAreaView>
  //   );
  // }

  return (
    <SafeAreaView style={tw`bg-blue-500 flex-1`}>
      {/* Input de Busca */}
      <TextInput
        placeholder="Pesquise repositórios"
        placeholderTextColor={tw`text-blue-100`.color}
        style={tw`m-2 text-blue-100 text-xl border-b border-indigo-600`}
        value={textoPesquisa}
        onChangeText={setTextoPesquisa}
        onSubmitEditing={submeterInput}
      />

      {/* Loading */}
      {!repositorios.length && (
        <ActivityIndicator color={tw`text-blue-100`.color} size={24} />
      )}

      {/* Lista de repositorios */}
      <FlatList
        data={repositorios}
        renderItem={({ item }) => <RepositorioItem repositorio={item} />}
        // removeClippedSubviews={false}
      />
    </SafeAreaView>
  );
};

export default Repositorios;
