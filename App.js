import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

// Listahan ng mga buttons (gagamitin natin sa .map())
const BUTTONS = [
  { id: 'sub', label: '-', color: '#e74c3c' },
  { id: 'reset', label: 'Reset', color: '#7f8c8d' },
  { id: 'add', label: '+', color: '#2ecc71' },
];

// Component 1: Display - nagpapakita ng number (gets "value" via props)
function Display({ value }) {
  return (
    <View style={styles.display}>
      <Text style={styles.displayText}>{value}</Text>
    </View>
  );
}

// Component 2: CounterButton - isang button (gets label, color, onPress via props)
function CounterButton({ label, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: color },
        pressed && styles.buttonPressed, // press feedback
      ]}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

// Component 3: Counter (main) - nandito ang state at logic
export default function Counter() {
  const [count, setCount] = useState(0); // state ng current value

  const handlePress = (id) => {
    if (id === 'add') setCount(count + 1);
    else if (id === 'sub') setCount(count - 1);
    else setCount(0); // reset
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>

      <Display value={count} />

      <View style={styles.buttonRow}>
        {BUTTONS.map((btn) => (
          <CounterButton
            key={btn.id}
            label={btn.label}
            color={btn.color}
            onPress={() => handlePress(btn.id)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 24,
  },
  display: {
    width: '80%',
    paddingVertical: 32,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  displayText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  // Flexbox grid ng buttons
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: 90,
    height: 70,
    margin: 8,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.6,
    transform: [{ scale: 0.95 }],
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
      
