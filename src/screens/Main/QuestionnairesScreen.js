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

const QuestionnaireCard = ({ questionnaire, onPress }) => {
  const { t } = useTranslation();
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return '#4CAF50';
      case 'in_progress':
        return '#FFC107';
      default:
        return '#9E9E9E';
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardHeader}>
        <Icon 
          name={questionnaire.type === 'image' ? 'image' : 'format-text'} 
          size={24} 
          color="#2196F3" 
        />
        <Text style={styles.cardTitle}>{questionnaire.title}</Text>
        <View 
          style={[
            styles.statusDot, 
            { backgroundColor: getStatusColor(questionnaire.status) }
          ]} 
        />
      </View>
      
      <Text style={styles.cardDescription} numberOfLines={2}>
        {questionnaire.description}
      </Text>
      
      <View style={styles.cardFooter}>
        <Text style={styles.cardContext}>
          {t(`questionnaire.context.${questionnaire.context}`)}
        </Text>
        <Text style={styles.cardDate}>
          {new Date(questionnaire.date).toLocaleDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const QuestionnairesScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const user = useSelector(state => state.auth.user);
  const [questionnaires, setQuestionnaires] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [filter, setFilter] = useState('all'); // all, school, home, neighborhood

  const fetchQuestionnaires = async () => {
    try {
      const data = await firebaseService.getQuestionnaires({
        userId: user.uid,
        context: filter !== 'all' ? filter : undefined,
      });
      setQuestionnaires(data);
    } catch (error) {
      console.error('Error fetching questionnaires:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestionnaires();
  }, [filter]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchQuestionnaires();
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
        {renderFilterButton('all', t('questionnaire.filters.all'))}
        {renderFilterButton('school', t('questionnaire.filters.school'))}
        {renderFilterButton('home', t('questionnaire.filters.home'))}
        {renderFilterButton('neighborhood', t('questionnaire.filters.neighborhood'))}
      </View>

      <FlatList
        data={questionnaires}
        renderItem={({ item }) => (
          <QuestionnaireCard
            questionnaire={item}
            onPress={() => navigation.navigate('QuestionnaireDetail', { id: item.id })}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Icon name="clipboard-text-off" size={48} color="#9E9E9E" />
            <Text style={styles.emptyText}>
              {t('questionnaire.noQuestionnaires')}
            </Text>
          </View>
        )}
      />
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
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
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
  },
  cardContext: {
    fontSize: 14,
    color: '#2196F3',
    fontWeight: '500',
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
});

export default QuestionnairesScreen;
