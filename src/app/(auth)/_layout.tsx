import {Stack} from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="signin" />
      <Stack.Screen name="signup" />
    </Stack>
  );
}
