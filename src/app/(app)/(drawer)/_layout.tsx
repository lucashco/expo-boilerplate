import {Drawer} from 'expo-router/drawer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {TabBarIcon} from '@/components/navigation/TabBarIcon';

export default function AppLayout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Drawer screenOptions={{headerShown: true}}>
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: 'Home',
            drawerIcon(props) {
              return <TabBarIcon name="home" {...props} />;
            },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
