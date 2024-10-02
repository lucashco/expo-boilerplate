import {Redirect, Stack} from 'expo-router';
import {ActivityIndicator} from 'react-native';

import {Screen} from '@/components';
import {useSession} from '@/services';

export default function AppLayout() {
  const {session, isLoading} = useSession();

  if (isLoading) {
    return (
      <Screen>
        <ActivityIndicator size="large" />
      </Screen>
    );
  }

  if (!session) {
    return <Redirect href="/(auth)/signin" />;
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
