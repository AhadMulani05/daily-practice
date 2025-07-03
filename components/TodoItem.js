import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TodoItem = ({ item, onToggle, onDelete, onEdit, theme }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.text);

  const handleEdit = () => {
    setIsEditing(false);
    onEdit(item.id, text);
  };

  return (
    <View style={[styles.item, { backgroundColor: theme.card }]}>
      <View style={styles.textContainer}>
        {isEditing ? (
          <TextInput
            style={[styles.input, { color: theme.text }]}
            value={text}
            onChangeText={setText}
            onSubmitEditing={handleEdit}
            placeholderTextColor={theme.placeholder}
          />
        ) : (
          <>
            <Text
              style={[
                styles.text,
                {
                  textDecorationLine: item.completed ? 'line-through' : 'none',
                  color: theme.text,
                },
              ]}
            >
              {item.text}
            </Text>
            {item.createdAt && (
              <Text style={[styles.date, { color: theme.placeholder }]}>
                Added: {item.createdAt}
              </Text>
            )}
          </>
        )}
      </View>

      <View style={styles.icons}>
        <TouchableOpacity onPress={() => onToggle(item.id)}>
          <FontAwesome name={item.completed ? 'check-circle' : 'circle-thin'} size={24} color={theme.text} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsEditing(true)}>
          <FontAwesome name="edit" size={24} color={theme.text} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <FontAwesome name="trash" size={24} color="tomato" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 18,
  },
  date: {
    fontSize: 12,
    marginTop: 4,
  },
  input: {
    fontSize: 18,
  },
  icons: {
    flexDirection: 'row',
    gap: 12,
    marginLeft: 10,
    marginTop: 4,
  },
  date: {
  fontSize: 12,
  marginTop: 4,
}

});

export default TodoItem;
