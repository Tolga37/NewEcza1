import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { 
  UserIcon, 
  SettingsIcon, 
  LocationIcon, 
  DocumentIcon, 
  PhoneIcon, 
  BankIcon, 
  PackageIcon, 
  MoneyIcon, 
  HeartIcon, 
  MailIcon, 
  ClockIcon, 
  BlockIcon, 
  HeadsetIcon, 
  CallIcon,
  ArrowRightIcon 
} from '../../icons';

interface ProfileMenuCardProps {
  title: string;
  icon?: string;
  onPress: () => void;
  containerStyle?: any;
}

const ProfileMenuCard: React.FC<ProfileMenuCardProps> = ({
  title,
  icon,
  onPress,
  containerStyle,
}) => {
  // Icon name'ini SVG komponente çevir
  const getIconComponent = (iconName?: string) => {
    const iconProps = { size: 20, color: '#666' };
    
    switch (iconName) {
      case 'UserIcon':
        return <UserIcon {...iconProps} />;
      case 'SettingsIcon':
        return <SettingsIcon {...iconProps} />;
      case 'LocationIcon':
        return <LocationIcon {...iconProps} />;
      case 'DocumentIcon':
        return <DocumentIcon {...iconProps} />;
      case 'PhoneIcon':
        return <PhoneIcon {...iconProps} />;
      case 'BankIcon':
        return <BankIcon {...iconProps} />;
      case 'PackageIcon':
        return <PackageIcon {...iconProps} />;
      case 'MoneyIcon':
        return <MoneyIcon {...iconProps} />;
      case 'HeartIcon':
        return <HeartIcon {...iconProps} />;
      case 'MailIcon':
        return <MailIcon {...iconProps} />;
      case 'ClockIcon':
        return <ClockIcon {...iconProps} />;
      case 'BlockIcon':
        return <BlockIcon {...iconProps} />;
      case 'HeadsetIcon':
        return <HeadsetIcon {...iconProps} />;
      case 'CallIcon':
        return <CallIcon {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          {getIconComponent(icon)}
        </View>
        <Text style={styles.title}>{title}</Text>
        <ArrowRightIcon size={20} color="#ccc" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  iconContainer: {
    marginRight: 12,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});

export default ProfileMenuCard; 