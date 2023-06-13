import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const RepositorioItem = ({ repositorio }) => {
  return (
    <View style={tw`bg-indigo-600 m-2 p-2 rounded-md`}>
      <Text style={tw`text-2xl text-indigo-100`}>{repositorio.name}</Text>
    </View>
  );
};

export default RepositorioItem;

const styles = StyleSheet.create({});
