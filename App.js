import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import ThemeToggle from './components/ThemeToggle';
import { lightTheme, darkTheme } from './theme/colors';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? darkTheme : lightTheme;

  // ✅ Load todos from AsyncStorage on app startup
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem('ahadTodos');
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.log('Failed to load todos from storage', error);
      }
    };

    loadTodos();
  }, []);

  // ✅ Save todos to AsyncStorage whenever they change
  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem('ahadTodos', JSON.stringify(todos));
      } catch (error) {
        console.log('Failed to save todos to storage', error);
      }
    };

    saveTodos();
  }, [todos]);

  const addTodo = () => {
  if (text.trim()) {
    const now = new Date();
    const formattedTime = now.toLocaleString(); // e.g. "7/2/2025, 10:30 PM"

    setTodos([
      ...todos,
      {
        id: Date.now().toString(),
        text,
        completed: false,
        createdAt: formattedTime, // 🆕 add timestamp
      },
    ]);
    setText('');
  }
};


  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <Header theme={theme} />
      <ThemeToggle isDark={isDark} toggleTheme={() => setIsDark(!isDark)} theme={theme} />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add a task..."
          placeholderTextColor={theme.placeholder}
          value={text}
          onChangeText={setText}
          onSubmitEditing={addTodo}
          style={[styles.input, { backgroundColor: theme.inputBackground, color: theme.text }]}
        />
      </View>

      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
  <TodoItem
    item={item}
    onToggle={toggleTodo}
    onDelete={deleteTodo}
    onEdit={editTodo}
    theme={theme}
  />
)}

      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  inputContainer: {
    marginBottom: 12,
  },
  input: {
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
});
