import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

const Imoveis = () => {
  return (
    <SafeAreaView>
      <View
        style={tw`py-4 border-2 m-2 rounded-lg border-stone-300 items-center`}
      >
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=410&q=80',
          }}
          style={tw`w-48 h-48 rounded-xl`}
        />

        <View style={tw`flex-row mt-2`}>
          <Text style={tw`text-xl`}>Casa Inteira - </Text>
          <Text style={tw`text-xl text-gray-500`}>Nova Pirapora</Text>
        </View>

        <View style={tw`flex-row`}>
          <Text style={tw.style(`text-2xl`, styles.texto)}>R$ 168</Text>
          <Text style={tw`text-xl text-gray-500`}>/noite</Text>
        </View>
      </View>

      {/*
       */}
    </SafeAreaView>
  );
};

export default Imoveis;

const styles = StyleSheet.create({
  texto: {
    color: 'coral',
  },
});
