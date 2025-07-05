import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderProps {
  title?: string;
  showLogo?: boolean;
  logoSource?: any; // Logo görseli
  leftElement?: React.ReactNode; // Sol tarafta gösterilecek element
  rightElement?: React.ReactNode; // Sağ tarafta gösterilecek element
  onLeftPress?: () => void;
  onRightPress?: () => void;
  backgroundColor?: string;
  titleColor?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showLogo = true,
  logoSource,
  leftElement,
  rightElement,
  onLeftPress,
  onRightPress,
  backgroundColor = '#fff',
  titleColor = '#000',
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top, backgroundColor }]}>
      <View style={styles.header}>
        {/* Sol taraf */}
        <View style={styles.leftContainer}>
          {leftElement ? (
            <TouchableOpacity onPress={onLeftPress} style={styles.sideButton}>
              {leftElement}
            </TouchableOpacity>
          ) : (
            <View style={styles.placeholder} />
          )}
        </View>

        {/* Orta - Logo veya Title */}
        <View style={styles.centerContainer}>
          {showLogo && logoSource ? (
            <Image source={logoSource} style={styles.logo} resizeMode="contain" />
          ) : title ? (
            <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
          ) : null}
        </View>

        {/* Sağ taraf */}
        <View style={styles.rightContainer}>
          {rightElement ? (
            <TouchableOpacity onPress={onRightPress} style={styles.sideButton}>
              {rightElement}
            </TouchableOpacity>
          ) : (
            <View style={styles.placeholder} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    zIndex: 1000,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    paddingHorizontal: 16,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  sideButton: {
    padding: 8,
    minWidth: 40,
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    width: 40,
    height: 40,
  },
  logo: {
    height: 40,
    width: 120,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header; 