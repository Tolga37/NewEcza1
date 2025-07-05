import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import BottomTabNavigator from './BottomTabNavigator';

// Profile Screens
import MyProfileScreen from '../screens/profile/MyProfileScreen';
import AccountScreen from '../screens/profile/AccountScreen';
import DeliveryAddressScreen from '../screens/profile/DeliveryAddressScreen';
import BillingAddressScreen from '../screens/profile/BillingAddressScreen';
import SmsSettingsScreen from '../screens/profile/SmsSettingsScreen';
import BankAccountScreen from '../screens/profile/BankAccountScreen';
import SalesCargoScreen from '../screens/profile/SalesCargoScreen';
import TransactionHistoryScreen from '../screens/profile/TransactionHistoryScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MessagesScreen from '../screens/profile/MessagesScreen';
import PendingOrdersScreen from '../screens/profile/PendingOrdersScreen';
import BlacklistScreen from '../screens/profile/BlacklistScreen';
import CustomerServiceScreen from '../screens/profile/CustomerServiceScreen';
import CallCenterScreen from '../screens/profile/CallCenterScreen';

export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  MyProfile: undefined;
  Account: undefined;
  DeliveryAddress: undefined;
  BillingAddress: undefined;
  SmsSettings: undefined;
  BankAccount: undefined;
  SalesCargo: undefined;
  TransactionHistory: undefined;
  Favorites: undefined;
  Messages: undefined;
  PendingOrders: undefined;
  Blacklist: undefined;
  CustomerService: undefined;
  CallCenter: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        {/* Profile Screens */}
        <Stack.Screen
          name="MyProfile"
          component={MyProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DeliveryAddress"
          component={DeliveryAddressScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BillingAddress"
          component={BillingAddressScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SmsSettings"
          component={SmsSettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BankAccount"
          component={BankAccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SalesCargo"
          component={SalesCargoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TransactionHistory"
          component={TransactionHistoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Messages"
          component={MessagesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PendingOrders"
          component={PendingOrdersScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Blacklist"
          component={BlacklistScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CustomerService"
          component={CustomerServiceScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CallCenter"
          component={CallCenterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
