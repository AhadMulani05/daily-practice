import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = ({ theme }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.text }]}>🌟 Ahad Todos App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30, // You can adjust this value as needed
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Header;
