import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.wrapper}>
      {/* Üst kırmızı çizgi */}
      <View style={styles.topBorder} />

      {/* Alt tab bar */}
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const isMiddle = index === 2;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          if (isMiddle) {
            return (
              <Pressable
                key={index}
                onPress={onPress}
                style={styles.middleTabButton}
              >
                <Text style={styles.middleText}>?</Text>
              </Pressable>
            );
          }

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={styles.tabButton}
              activeOpacity={0.7}
            >
              <Text style={styles.tabText}>?</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  },
  topBorder: {
    height: 2,
    backgroundColor: '#e30613', // kırmızı çizgi
  },
  container: {
    flexDirection: 'row',
    height: 65,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 20,
    color: '#000',
  },
  middleTabButton: {
    position: 'relative',
    top: -25,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e30613', // kırmızı çerçeve
    zIndex: 10,
  },
  middleText: {
    fontSize: 24,
    color: '#000',
  },
});

export default CustomTabBar;
