import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { SearchInput } from '../..';
import { FilterIcon } from '../../icons';

interface TabContentHeaderProps {
  searchValue: string;
  onSearchChange: (text: string) => void;
  onSearch: (query: string) => void;
  onClear: () => void;
  onFilterPress: () => void;
  placeholder?: string;
  containerStyle?: any;
}

const TabContentHeader: React.FC<TabContentHeaderProps> = ({
  searchValue,
  onSearchChange,
  onSearch,
  onClear,
  onFilterPress,
  placeholder = "İlan ara...",
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.searchContainer}>
        <SearchInput
          value={searchValue}
          onChangeText={onSearchChange}
          onSearch={onSearch}
          onClear={onClear}
          placeholder={placeholder}
          containerStyle={styles.searchInput}
        />
      </View>
      
      <TouchableOpacity 
        style={styles.filterButton}
        onPress={onFilterPress}
        activeOpacity={0.7}
      >
        <FilterIcon size={18} color="#666" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  searchContainer: {
    flex: 1,
    marginRight: 12,
  },
  searchInput: {
    marginBottom: 0,
  },
  filterButton: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e9ecef',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabContentHeader; 