import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ContractsDocScreen = ({ navigation }) => {
  const contracts = [
    {
      id: 1,
      type: 'school',
      title: 'Contrat École',
      description: 'Règles et objectifs en milieu scolaire',
      icon: 'school',
    },
    {
      id: 2,
      type: 'home',
      title: 'Contrat Maison',
      description: 'Règles et objectifs à la maison',
      icon: 'home',
    },
    {
      id: 3,
      type: 'center',
      title: 'Contrat Maison de quartier',
      description: 'Règles et objectifs à la maison de quartier',
      icon: 'location-city',
    },
  ];

  const handleContractPress = (contractType) => {
    navigation.navigate('ContractRules', { type: contractType });
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
            <View style={styles.cardHeader}>
              <Icon name={contract.icon} size={32} color="#2196F3" />
              <Text style={styles.contractTitle}>{contract.title}</Text>
            </View>
            <Text style={styles.contractDescription}>{contract.description}</Text>
            <View style={styles.cardFooter}>
              <TouchableOpacity style={styles.actionButton}>
                <Icon name="visibility" size={20} color="#2196F3" />
                <Text style={styles.actionText}>Voir</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Icon name="file-download" size={20} color="#2196F3" />
                <Text style={styles.actionText}>Télécharger</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>À propos des Contrats</Text>
        <Text style={styles.infoText}>
          Les contrats de comportement sont des documents essentiels qui définissent
          les règles et les objectifs à atteindre dans chaque contexte. Ils servent
          de guide pour améliorer le comportement et suivre les progrès.
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
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contractTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
  },
  contractDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  actionText: {
    fontSize: 14,
    color: '#2196F3',
    marginLeft: 5,
  },
  infoSection: {
    margin: 15,
    padding: 15,
    backgroundColor: '#F5F5F5',
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

export default ContractsDocScreen;
