Counter App (React Native + Expo)
A simple counter app built with React Native core components.
Features
Shows the current count on a display
+ button to add 1
- button to subtract 1
Reset button to go back to 0
Buttons change look when pressed
React Native Concepts Used
Components: Counter (main), Display, CounterButton
Props: value for Display; label, color, onPress for CounterButton
State: useState stores the current count
Events: onPress handles button taps
Lists: .map() creates the buttons from an array
Styling: StyleSheet.create() and Flexbox (flexDirection, flexWrap)
Core components only: View, Text, Pressable (no UI libraries, no eval())
How to Run
npx create-expo-app MyApp
Replace the contents of App.js with the provided App.js
cd MyApp then npx expo start
Scan the QR code using Expo Go on your phone, or use an emulator
(Or paste App.js into https://snack.expo.dev and run it in the browser.)
Screenshot
(Add your screenshot here)
