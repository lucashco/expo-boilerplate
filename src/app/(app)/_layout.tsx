import {Redirect, Stack} from 'expo-router';

export default function AppLayout() {
  const user = false;

  if (!user) {
    return <Redirect href="/(auth)/SignIn" />;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: 'Home'}} />
    </Stack>
  );
}
