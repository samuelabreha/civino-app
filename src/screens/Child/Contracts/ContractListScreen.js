import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ContractListScreen = ({ navigation }) => {
  const contracts = [
    {
      id: 1,
      type: 'school',
      title: 'École',
      icon: 'school',
    },
    {
      id: 2,
      type: 'home',
      title: 'Maison',
      icon: 'home',
    },
    {
      id: 3,
      type: 'center',
      title: 'Maison de quartier',
      icon: 'location-city',
    },
  ];

  const handleContractPress = (contractType) => {
    navigation.navigate('ContractDetail', { type: contractType });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="assignment" size={40} color="#2196F3" />
        <Text style={styles.title}>Contrats de Comportement</Text>
      </View>

      <View style={styles.contractsContainer}>
        {contracts.map((contract) => (
          <TouchableOpacity
            key={contract.id}
            style={styles.contractCard}
            onPress={() => handleContractPress(contract.type)}
          >
            <Icon name={contract.icon} size={32} color="#2196F3" />
            <View style={styles.contractInfo}>
              <Text style={styles.contractTitle}>{contract.title}</Text>
              <Text style={styles.contractSubtitle}>
                Voir les règles et objectifs
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="#757575" />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>À propos des Contrats</Text>
        <Text style={styles.infoText}>
          Les contrats de comportement sont des accords qui définissent les
          objectifs et les règles à suivre dans différents contextes. Ils aident
          à structurer et à améliorer le comportement.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  contractsContainer: {
    padding: 15,
  },
  contractCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  contractInfo: {
    flex: 1,
    marginLeft: 15,
  },
  contractTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  contractSubtitle: {
    fontSize: 14,
    color: '#757575',
    marginTop: 4,
  },
  infoSection: {
    padding: 20,
    backgroundColor: '#F5F5F5',
    margin: 15,
    borderRadius: 10,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default ContractListScreen;
