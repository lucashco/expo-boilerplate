import {Stack} from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="SignIn" />
      <Stack.Screen name="SignUp" />
    </Stack>
  );
}
