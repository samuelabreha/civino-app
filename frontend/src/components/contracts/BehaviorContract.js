import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

const BehaviorContract = ({ contract, onUpdate }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{contract.title}</Text>
        <Text style={styles.date}>Date: {contract.date}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Objectifs</Text>
        {contract.objectives.map((objective, index) => (
          <Text key={index} style={styles.item}>
            • {objective}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Règles à suivre</Text>
        {contract.rules.map((rule, index) => (
          <Text key={index} style={styles.item}>
            {index + 1}. {rule}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conséquences</Text>
        <View style={styles.consequencesContainer}>
          <View style={styles.consequenceColumn}>
            <Text style={styles.consequenceTitle}>Positives</Text>
            {contract.positiveConsequences.map((consequence, index) => (
              <Text key={index} style={styles.item}>
                • {consequence}
              </Text>
            ))}
          </View>
          <View style={styles.consequenceColumn}>
            <Text style={styles.consequenceTitle}>Négatives</Text>
            {contract.negativeConsequences.map((consequence, index) => (
              <Text key={index} style={styles.item}>
                • {consequence}
              </Text>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.signatures}>
        <Text style={styles.signature}>Signature de l'enfant: _____________</Text>
        <Text style={styles.signature}>Signature du responsable: _____________</Text>
      </View>
    </ScrollView>
  );
};

BehaviorContract.propTypes = {
  contract: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    objectives: PropTypes.arrayOf(PropTypes.string).isRequired,
    rules: PropTypes.arrayOf(PropTypes.string).isRequired,
    positiveConsequences: PropTypes.arrayOf(PropTypes.string).isRequired,
    negativeConsequences: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onUpdate: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
    paddingLeft: 10,
  },
  consequencesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  consequenceColumn: {
    flex: 1,
    paddingHorizontal: 10,
  },
  consequenceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  signatures: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 20,
  },
  signature: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default BehaviorContract;
