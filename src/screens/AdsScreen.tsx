import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TabView, TabContentHeader, Header } from '../components';

// Tab içerikleri için component'ler
const LiveAdsContent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    console.log('Yayında ilanlarında arama:', query);
  };

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
  };

  const handleClear = () => {
    setSearchQuery('');
  };

  const handleFilterPress = () => {
    console.log('Yayında ilanları filtre butonu tıklandı');
  };

  return (
    <View style={styles.tabContentContainer}>
      <TabContentHeader
        searchValue={searchQuery}
        onSearchChange={handleSearchChange}
        onSearch={handleSearch}
        onClear={handleClear}
        onFilterPress={handleFilterPress}
        placeholder="Yayında olan ilanları ara..."
      />
      <ScrollView style={styles.contentScrollView}>
        <View style={styles.tabContent}>
          <Text style={styles.contentText}>Yayında olan ilanlarınız burada görünecek</Text>
          {searchQuery.length > 0 && (
            <Text style={styles.searchInfo}>Arama: "{searchQuery}"</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const PendingAdsContent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    console.log('Askıda ilanlarında arama:', query);
  };

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
  };

  const handleClear = () => {
    setSearchQuery('');
  };

  const handleFilterPress = () => {
    console.log('Askıda ilanları filtre butonu tıklandı');
  };

  return (
    <View style={styles.tabContentContainer}>
      <TabContentHeader
        searchValue={searchQuery}
        onSearchChange={handleSearchChange}
        onSearch={handleSearch}
        onClear={handleClear}
        onFilterPress={handleFilterPress}
        placeholder="Askıda olan ilanları ara..."
      />
      <ScrollView style={styles.contentScrollView}>
        <View style={styles.tabContent}>
          <Text style={styles.contentText}>Askıda olan ilanlarınız burada görünecek</Text>
          {searchQuery.length > 0 && (
            <Text style={styles.searchInfo}>Arama: "{searchQuery}"</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const ApprovalAdsContent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    console.log('Onayda ilanlarında arama:', query);
  };

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
  };

  const handleClear = () => {
    setSearchQuery('');
  };

  const handleFilterPress = () => {
    console.log('Onayda ilanları filtre butonu tıklandı');
  };

  return (
    <View style={styles.tabContentContainer}>
      <TabContentHeader
        searchValue={searchQuery}
        onSearchChange={handleSearchChange}
        onSearch={handleSearch}
        onClear={handleClear}
        onFilterPress={handleFilterPress}
        placeholder="Onayda olan ilanları ara..."
      />
      <ScrollView style={styles.contentScrollView}>
        <View style={styles.tabContent}>
          <Text style={styles.contentText}>Onay bekleyen ilanlarınız burada görünecek</Text>
          {searchQuery.length > 0 && (
            <Text style={styles.searchInfo}>Arama: "{searchQuery}"</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const AdsScreen = () => {
  // Örnek veri - gerçek uygulamada API'den gelecek
  const adsData = {
    live: 23,
    pending: 5,
    approval: 2,
  };

  const tabs = [
    {
      id: 'live',
      title: 'Yayında',
      count: adsData.live,
      content: <LiveAdsContent />,
    },
    {
      id: 'pending',
      title: 'Askıda',
      count: adsData.pending,
      content: <PendingAdsContent />,
    },
    {
      id: 'approval',
      title: 'Onayda',
      count: adsData.approval,
      content: <ApprovalAdsContent />,
    },
  ];

  const handleTabChange = (tabId: string) => {
    console.log('Tab değişti:', tabId);
    // Burada tab değişimi ile ilgili işlemler yapılabilir
    // Örneğin: API çağrısı, analytics, vb.
  };

  return (
    <View style={styles.container}>
      <Header
        title="İlanlarım"
        showLogo={false}
      />
      <TabView
        tabs={tabs}
        initialTabId="live"
        onTabChange={handleTabChange}
        containerStyle={styles.tabViewContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabViewContainer: {
    flex: 1,
  },
  tabContentContainer: {
    flex: 1,
  },
  contentScrollView: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  searchInfo: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default AdsScreen; 