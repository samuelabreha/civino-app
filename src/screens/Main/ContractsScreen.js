import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { firebaseService } from '../../services/firebase.service';

const ContractCard = ({ contract, onPress }) => {
  const { t } = useTranslation();

  const getStatusColor = (status) => {
    switch (status) {
      case 'signed':
        return '#4CAF50';
      case 'pending':
        return '#FFC107';
      case 'expired':
        return '#F44336';
      default:
        return '#9E9E9E';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'signed':
        return 'check-circle';
      case 'pending':
        return 'clock';
      case 'expired':
        return 'alert-circle';
      default:
        return 'help-circle';
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardHeader}>
        <View style={styles.cardTitleContainer}>
          <Icon name="file-document" size={24} color="#2196F3" />
          <Text style={styles.cardTitle}>{contract.title}</Text>
        </View>
        <View style={[styles.statusContainer, { backgroundColor: `${getStatusColor(contract.status)}20` }]}>
          <Icon name={getStatusIcon(contract.status)} size={16} color={getStatusColor(contract.status)} />
          <Text style={[styles.statusText, { color: getStatusColor(contract.status) }]}>
            {t(`contract.status.${contract.status}`)}
          </Text>
        </View>
      </View>

      <Text style={styles.cardDescription} numberOfLines={2}>
        {contract.description}
      </Text>

      <View style={styles.cardFooter}>
        <View style={styles.participantsContainer}>
          {contract.participants.map((participant, index) => (
            <View 
              key={participant.id} 
              style={[
                styles.participantIcon,
                index > 0 && { marginLeft: -10 },
              ]}
            >
              <Text style={styles.participantInitial}>
                {participant.name.charAt(0)}
              </Text>
            </View>
          ))}
        </View>
        <Text style={styles.cardDate}>
          {t('contract.validUntil', {
            date: new Date(contract.expiryDate).toLocaleDateString(),
          })}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const ContractsScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const user = useSelector(state => state.auth.user);
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [filter, setFilter] = useState('all'); // all, pending, signed, expired

  const fetchContracts = async () => {
    try {
      const data = await firebaseService.getContracts({
        userId: user.uid,
        status: filter !== 'all' ? filter : undefined,
      });
      setContracts(data);
    } catch (error) {
      console.error('Error fetching contracts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContracts();
  }, [filter]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchContracts();
    setRefreshing(false);
  };

  const renderFilterButton = (value, label) => (
    <TouchableOpacity
      style={[
        styles.filterButton,
        filter === value && styles.filterButtonActive,
      ]}
      onPress={() => setFilter(value)}
    >
      <Text
        style={[
          styles.filterButtonText,
          filter === value && styles.filterButtonTextActive,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        {renderFilterButton('all', t('contract.filters.all'))}
        {renderFilterButton('pending', t('contract.filters.pending'))}
        {renderFilterButton('signed', t('contract.filters.signed'))}
        {renderFilterButton('expired', t('contract.filters.expired'))}
      </View>

      <FlatList
        data={contracts}
        renderItem={({ item }) => (
          <ContractCard
            contract={item}
            onPress={() => navigation.navigate('ContractDetail', { id: item.id })}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Icon name="file-document-off" size={48} color="#9E9E9E" />
            <Text style={styles.emptyText}>
              {t('contract.noContracts')}
            </Text>
          </View>
        )}
      />

      {['student', 'teacher', 'parent'].includes(user.role) && (
        <TouchableOpacity
          style={styles.fab}
          onPress={() => navigation.navigate('ContractDetail', { mode: 'create' })}
        >
          <Icon name="plus" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  filterButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  filterButtonActive: {
    backgroundColor: '#2196F3',
  },
  filterButtonText: {
    color: '#666',
    fontSize: 14,
  },
  filterButtonTextActive: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  listContainer: {
    padding: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
    flex: 1,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  participantsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  participantIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  participantInitial: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2196F3',
  },
  cardDate: {
    fontSize: 12,
    color: '#9E9E9E',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});

export default ContractsScreen;
