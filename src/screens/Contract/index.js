import React from 'react';
import { View, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../../theme';
import Typography from '../../components/common/Typography';
import Card from '../../components/common/Card';
import Icon from '../../components/common/Icon';
import Badge from '../../components/common/Badge';
import { styles } from './styles';

const ContractCard = ({ contract, onPress }) => (
  <Card variant="elevated" style={styles.contractCard} onPress={onPress}>
    <View style={styles.contractHeader}>
      <View style={styles.contractInfo}>
        <Typography variant="subtitle1" weight="semiBold">
          {contract.title}
        </Typography>
        <Typography variant="caption" color="secondary">
          Contrat #{contract.id}
        </Typography>
      </View>
      <Badge
        content={contract.status}
        color={
          contract.status === 'Actif'
            ? 'success'
            : contract.status === 'En attente'
            ? 'warning'
            : 'error'
        }
      />
    </View>
    <View style={styles.contractDetails}>
      <View style={styles.detailItem}>
        <Icon name="account" size={16} color="grey.500" />
        <Typography variant="body2" color="secondary">
          {contract.childName}
        </Typography>
      </View>
      <View style={styles.detailItem}>
        <Icon name="calendar" size={16} color="grey.500" />
        <Typography variant="body2" color="secondary">
          {contract.date}
        </Typography>
      </View>
      <View style={styles.detailItem}>
        <Icon name="currency-eur" size={16} color="grey.500" />
        <Typography variant="body2" color="secondary">
          {contract.amount}€
        </Typography>
      </View>
    </View>
  </Card>
);

const ContractScreen = ({ navigation }) => {
  const contracts = [
    {
      id: 'CON001',
      title: 'Contrat Annuel',
      status: 'Actif',
      childName: 'Emma Martin',
      date: '01/09/2024 - 30/06/2025',
      amount: 1200,
    },
    {
      id: 'CON002',
      title: 'Contrat Trimestriel',
      status: 'En attente',
      childName: 'Lucas Dubois',
      date: '01/01/2025 - 31/03/2025',
      amount: 400,
    },
    {
      id: 'CON003',
      title: 'Contrat Mensuel',
      status: 'Expiré',
      childName: 'Sophie Bernard',
      date: '01/12/2024 - 31/12/2024',
      amount: 150,
    },
  ];

  return (
    <LinearGradient
      colors={theme.colors.background.gradient}
      style={styles.container}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.background.gradient[0]}
      />

      <View style={styles.header}>
        <Typography variant="h4" weight="semiBold">
          Contrats
        </Typography>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('CreateContract')}
        >
          <Icon name="plus" size={24} color="primary" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Statistics */}
        <View style={styles.statistics}>
          <Card variant="elevated" style={styles.statsCard}>
            <View style={styles.statItem}>
              <Typography variant="h4" weight="bold" color="success">
                12
              </Typography>
              <Typography variant="caption" color="secondary">
                Actifs
              </Typography>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Typography variant="h4" weight="bold" color="warning">
                3
              </Typography>
              <Typography variant="caption" color="secondary">
                En attente
              </Typography>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Typography variant="h4" weight="bold" color="error">
                2
              </Typography>
              <Typography variant="caption" color="secondary">
                Expirés
              </Typography>
            </View>
          </Card>
        </View>

        {/* Contracts List */}
        <View style={styles.contractsList}>
          <Typography variant="subtitle1" weight="medium" style={styles.listTitle}>
            Liste des contrats
          </Typography>
          {contracts.map((contract) => (
            <ContractCard
              key={contract.id}
              contract={contract}
              onPress={() =>
                navigation.navigate('ContractDetails', { contractId: contract.id })
              }
            />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ContractScreen;
