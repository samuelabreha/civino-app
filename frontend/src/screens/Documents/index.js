import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Calendar } from '../../components/Calendar';
import { DocumentUploader } from '../../components/documents/DocumentUploader';
import { DocumentList } from '../../components/documents/DocumentList';
import { TabView, TabBar } from 'react-native-tab-view';
import { api } from '../../services/api';

const Documents = () => {
  const [index, setIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [documents, setDocuments] = useState([]);
  const [routes] = useState([
    { key: 'observation', title: 'Observation Reports' },
    { key: 'weekly', title: 'Weekly Observations' },
    { key: 'monthly', title: 'Monthly Observations' },
    { key: 'summary', title: 'Monthly Summary' },
    { key: 'points', title: 'Points to Work On' },
    { key: 'contracts', title: 'Behavior Contracts' },
    { key: 'iep', title: 'IEP' },
  ]);

  useEffect(() => {
    fetchDocuments();
  }, [selectedDate, index]);

  const fetchDocuments = async () => {
    try {
      const response = await api.get('/documents', {
        params: {
          date: selectedDate.toISOString(),
          category: routes[index].key,
        },
      });
      setDocuments(response.data);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  const handleUpload = async (formData) => {
    try {
      await api.post('/documents/upload', formData);
      fetchDocuments();
    } catch (error) {
      console.error('Error uploading document:', error);
    }
  };

  const handleDelete = async (documentId) => {
    try {
      await api.delete(`/documents/${documentId}`);
      fetchDocuments();
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  const renderScene = ({ route }) => (
    <ScrollView style={styles.scene}>
      <View style={styles.calendarContainer}>
        <Calendar
          onDateChange={setSelectedDate}
          selectedDate={selectedDate}
        />
      </View>

      <DocumentUploader
        onUpload={handleUpload}
        category={route.key}
        date={selectedDate.toISOString()}
      />

      <DocumentList
        documents={documents}
        onDelete={handleDelete}
      />
    </ScrollView>
  );

  const renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled
      style={styles.tabBar}
      indicatorStyle={styles.indicator}
      labelStyle={styles.label}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  calendarContainer: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabBar: {
    backgroundColor: '#2196F3',
  },
  indicator: {
    backgroundColor: '#fff',
  },
  label: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default Documents;
