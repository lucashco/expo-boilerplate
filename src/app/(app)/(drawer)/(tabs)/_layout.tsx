import {Tabs} from 'expo-router/tabs';

import {TabBarIcon} from '@/components/navigation/TabBarIcon';

export default function AppLayout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon(props) {
            return <TabBarIcon name="home" {...props} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'My Profile',
          tabBarIcon(props) {
            return <TabBarIcon name="person" {...props} />;
          },
        }}
      />
    </Tabs>
  );
}
