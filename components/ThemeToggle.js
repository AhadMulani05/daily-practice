import React from 'react';
import { Switch, View, Text, StyleSheet } from 'react-native';

const ThemeToggle = ({ isDark, toggleTheme, theme }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: theme.text }]}>🌞 Light / Dark 🌙</Text>
      <Switch value={isDark} onValueChange={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ThemeToggle;