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
import { HomeIcon, OrdersIcon, CartIcon, AdsIcon, ProfileIcon } from '../components/icons';

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  // Route name'e göre ikon mapping'i
  const getTabIcon = (routeName: string, isFocused: boolean) => {
    const color = isFocused ? '#e30613' : '#666';
    const size = 24;

    switch (routeName) {
      case 'Home':
        return <HomeIcon size={size} color={color} />;
      case 'Orders':
        return <OrdersIcon size={size} color={color} />;
      case 'Cart':
        return <CartIcon size={32} color={color} />; // Sepet de aktif/pasif renk alır
      case 'Listings':
        return <AdsIcon size={size} color={color} />;
      case 'Profile':
        return <ProfileIcon size={size} color={color} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.wrapper}>
      {/* Üst kırmızı çizgi */}
      <View style={styles.topBorder} />

      {/* Alt tab bar */}
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const isMiddle = index === 2; // Cart tab (ortadaki)

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
                {getTabIcon(route.name, isFocused)}
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
              <View style={styles.tabContent}>
                {getTabIcon(route.name, isFocused)}
              </View>
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
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: Platform.OS === 'ios' ? 30 : 10,
    paddingTop: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default CustomTabBar;
