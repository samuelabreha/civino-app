import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import BehaviorContractForm from '../../components/contracts/BehaviorContractForm';
import firebaseService from '../../services/firebase.service';

const ContractsScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [contracts, setContracts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showNewContractModal, setShowNewContractModal] = useState(false);
  const [selectedContract, setSelectedContract] = useState(null);

  useEffect(() => {
    loadContracts();
  }, []);

  const loadContracts = async () => {
    try {
      setIsLoading(true);
      const userContracts = await firebaseService.getContracts();
      setContracts(userContracts);
    } catch (error) {
      console.error('Error loading contracts:', error);
      Alert.alert(
        t('contracts.error.loadTitle'),
        t('contracts.error.loadMessage')
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveContract = async (contractData) => {
    try {
      setIsLoading(true);
      if (selectedContract) {
        await firebaseService.updateContract(selectedContract.id, contractData);
      } else {
        await firebaseService.createContract(contractData);
      }
      setShowNewContractModal(false);
      setSelectedContract(null);
      loadContracts();
    } catch (error) {
      console.error('Error saving contract:', error);
      Alert.alert(
        t('contracts.error.saveTitle'),
        t('contracts.error.saveMessage')
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteContract = async (contractId) => {
    Alert.alert(
      t('contracts.delete.title'),
      t('contracts.delete.message'),
      [
        {
          text: t('common.cancel'),
          style: 'cancel',
        },
        {
          text: t('common.delete'),
          style: 'destructive',
          onPress: async () => {
            try {
              setIsLoading(true);
              await firebaseService.deleteContract(contractId);
              loadContracts();
            } catch (error) {
              console.error('Error deleting contract:', error);
              Alert.alert(
                t('contracts.error.deleteTitle'),
                t('contracts.error.deleteMessage')
              );
            } finally {
              setIsLoading(false);
            }
          },
        },
      ]
    );
  };

  const renderContractItem = ({ item }) => (
    <TouchableOpacity
      style={styles.contractItem}
      onPress={() => {
        setSelectedContract(item);
        setShowNewContractModal(true);
      }}
    >
      <View style={styles.contractHeader}>
        <View style={styles.contractTitleContainer}>
          <Icon
            name={
              item.context === 'school'
                ? 'school'
                : item.context === 'community'
                ? 'home-group'
                : 'home'
            }
            size={24}
            color="#2196F3"
          />
          <Text style={styles.contractTitle}>{item.title}</Text>
        </View>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteContract(item.id)}
        >
          <Icon name="delete" size={24} color="#F44336" />
        </TouchableOpacity>
      </View>

      <Text style={styles.contractDescription}>{item.description}</Text>

      <View style={styles.contractDates}>
        <Text style={styles.dateText}>
          {format(new Date(item.startDate), 'dd MMM yyyy', { locale: fr })}
          {' - '}
          {format(new Date(item.endDate), 'dd MMM yyyy', { locale: fr })}
        </Text>
      </View>

      <View style={styles.goalsList}>
        {item.goals.map((goal) => (
          <View key={goal.id} style={styles.goalItem}>
            <Icon
              name={goal.completed ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={20}
              color={goal.completed ? '#4CAF50' : '#666666'}
            />
            <Text style={[
              styles.goalText,
              goal.completed && styles.goalCompleted,
            ]}>
              {goal.text}
            </Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#2196F3" />
        </View>
      ) : (
        <>
          <FlatList
            data={contracts}
            renderItem={renderContractItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.contractsList}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Icon name="file-document-outline" size={48} color="#CCCCCC" />
                <Text style={styles.emptyText}>
                  {t('contracts.empty')}
                </Text>
              </View>
            }
          />

          <TouchableOpacity
            style={styles.fab}
            onPress={() => {
              setSelectedContract(null);
              setShowNewContractModal(true);
            }}
          >
            <Icon name="plus" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <Modal
            visible={showNewContractModal}
            animationType="slide"
            onRequestClose={() => {
              setShowNewContractModal(false);
              setSelectedContract(null);
            }}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalHeader}>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => {
                    setShowNewContractModal(false);
                    setSelectedContract(null);
                  }}
                >
                  <Icon name="close" size={24} color="#666666" />
                </TouchableOpacity>
                <Text style={styles.modalTitle}>
                  {selectedContract
                    ? t('contracts.edit')
                    : t('contracts.create')}
                </Text>
                <View style={styles.closeButton} />
              </View>

              <BehaviorContractForm
                onSave={handleSaveContract}
                initialData={selectedContract}
              />
            </View>
          </Modal>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contractsList: {
    padding: 15,
  },
  contractItem: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  contractHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  contractTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  contractTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  deleteButton: {
    padding: 5,
  },
  contractDescription: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 10,
  },
  contractDates: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 14,
    color: '#666666',
  },
  goalsList: {
    marginTop: 10,
  },
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  goalText: {
    marginLeft: 10,
    fontSize: 14,
  },
  goalCompleted: {
    textDecorationLine: 'line-through',
    color: '#666666',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#2196F3',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
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
    color: '#666666',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  closeButton: {
    padding: 5,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ContractsScreen;
