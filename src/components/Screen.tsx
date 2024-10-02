import {PropsWithChildren} from 'react';
import {View} from 'react-native';

import {useAppSafeArea} from '@/hooks';

export function Screen({children}: PropsWithChildren) {
  const {top, bottom} = useAppSafeArea();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: top,
        paddingBottom: bottom,
        paddingHorizontal: 20,
      }}>
      {children}
    </View>
  );
}
