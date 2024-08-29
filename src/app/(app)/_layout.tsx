import {Redirect, Stack} from 'expo-router';

export default function AppLayout() {
  const user = true;

  if (!user) {
    return <Redirect href="/(auth)/SignIn" />;
  }
  return (
    <Stack initialRouteName="(drawer)">
      <Stack.Screen
        name="(drawer)"
        options={{title: 'Home', headerShown: false}}
      />
      <Stack.Screen name="settings" options={{title: 'Settings'}} />
    </Stack>
  );
}
