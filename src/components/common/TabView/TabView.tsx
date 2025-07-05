import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

interface Tab {
  id: string;
  title: string;
  count?: number;
  content: React.ReactNode;
}

interface TabViewProps {
  tabs: Tab[];
  initialTabId?: string;
  onTabChange?: (tabId: string) => void;
  tabStyle?: any;
  activeTabStyle?: any;
  tabTextStyle?: any;
  activeTabTextStyle?: any;
  containerStyle?: any;
  contentStyle?: any;
}

const TabView: React.FC<TabViewProps> = ({
  tabs,
  initialTabId,
  onTabChange,
  tabStyle,
  activeTabStyle,
  tabTextStyle,
  activeTabTextStyle,
  containerStyle,
  contentStyle,
}) => {
  const [activeTabId, setActiveTabId] = useState(initialTabId || tabs[0]?.id);
  const screenWidth = Dimensions.get('window').width;
  const tabPadding = 32; // toplam yatay padding (16+16)
  const tabSpacing = tabs.length > 1 ? 8 * (tabs.length - 1) : 0; // tab'lar arası margin
  const availableWidth = screenWidth - tabPadding - tabSpacing;
  const calculatedTabWidth = availableWidth / tabs.length;

  const handleTabPress = (tabId: string) => {
    setActiveTabId(tabId);
    onTabChange?.(tabId);
  };

  const activeTab = tabs.find(tab => tab.id === activeTabId);

  // Eğer hesaplanan genişlik 80px'den küçükse veya 3'ten fazla tab varsa scroll kullan
  const shouldScroll = tabs.length > 3 || calculatedTabWidth < 80;

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Tab Headers */}
      <View style={styles.tabContainer}>
        {shouldScroll ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabScrollContent}
          >
            {tabs.map(tab => {
              const isActive = tab.id === activeTabId;

              return (
                <TouchableOpacity
                  key={tab.id}
                  style={[
                    styles.tab,
                    styles.scrollableTab,
                    tabStyle,
                    isActive && styles.activeTab,
                    isActive && activeTabStyle,
                  ]}
                  onPress={() => handleTabPress(tab.id)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.tabText,
                      tabTextStyle,
                      isActive && styles.activeTabText,
                      isActive && activeTabTextStyle,
                    ]}
                    numberOfLines={1}
                  >
                    {tab.title}
                    {tab.count !== undefined && (
                      <Text
                        style={[
                          styles.countText,
                          isActive
                            ? styles.activeCountText
                            : styles.inactiveCountText,
                        ]}
                      >
                        {' '}
                        ({tab.count})
                      </Text>
                    )}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        ) : (
          <View style={styles.fixedTabContainer}>
            {tabs.map((tab, index) => {
              const isActive = tab.id === activeTabId;
              const isLastTab = index === tabs.length - 1;

              return (
                <TouchableOpacity
                  key={tab.id}
                  style={[
                    styles.tab,
                    styles.fixedTab,
                    { width: calculatedTabWidth },
                    !isLastTab && { marginRight: 8 },
                    tabStyle,
                    isActive && styles.activeTab,
                    isActive && activeTabStyle,
                  ]}
                  onPress={() => handleTabPress(tab.id)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.tabText,
                      tabTextStyle,
                      isActive && styles.activeTabText,
                      isActive && activeTabTextStyle,
                    ]}
                    numberOfLines={1}
                    adjustsFontSizeToFit={true}
                    minimumFontScale={0.8}
                  >
                    {tab.title}
                    {tab.count !== undefined && (
                      <Text
                        style={[
                          styles.countText,
                          isActive
                            ? styles.activeCountText
                            : styles.inactiveCountText,
                        ]}
                      >
                        {' '}
                        ({tab.count})
                      </Text>
                    )}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </View>

      {/* Tab Content */}
      <View style={[styles.content, contentStyle]}>{activeTab?.content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  fixedTabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  tabScrollContent: {
    paddingHorizontal: 16,
  },
  tab: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableTab: {
    marginRight: 8,
    minWidth: 100,
  },
  fixedTab: {
    // marginRight artık dinamik olarak kontrol ediliyor
  },
  activeTab: {
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
    textAlign: 'center',
  },
  activeTabText: {
    color: '#007AFF',
    fontWeight: '600',
  },
  countText: {
    fontSize: 14,
    fontWeight: '400',
  },
  activeCountText: {
    color: '#007AFF',
  },
  inactiveCountText: {
    color: '#999',
  },
  content: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});

export default TabView;
