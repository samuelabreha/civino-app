import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RulesVisualizationScreen = ({ navigation }) => {
  const [selectedContext, setSelectedContext] = useState('school');

  const contexts = [
    { id: 'school', label: 'École', icon: 'school' },
    { id: 'center', label: 'Maison de quartier', icon: 'location-city' },
    { id: 'home', label: 'Maison', icon: 'home' },
  ];

  const rules = {
    school: [
      {
        id: '1',
        title: 'Lever la main pour parler',
        description: 'Attendre son tour pour prendre la parole en classe',
        icon: 'pan-tool',
        imageUrl: 'assets/rules/raise_hand.png',
        importance: 'high'
      },
      {
        id: '2',
        title: 'Rester assis pendant le cours',
        description: 'Garder une position assise appropriée durant les leçons',
        icon: 'event-seat',
        imageUrl: 'assets/rules/sit_properly.png',
        importance: 'high'
      },
      {
        id: '3',
        title: 'Écouter les consignes',
        description: 'Être attentif aux instructions de l'enseignant',
        icon: 'hearing',
        imageUrl: 'assets/rules/listen.png',
        importance: 'high'
      }
    ],
    center: [
      {
        id: '4',
        title: 'Respecter les autres',
        description: 'Être poli et bienveillant avec les autres enfants',
        icon: 'people',
        imageUrl: 'assets/rules/respect.png',
        importance: 'high'
      },
      {
        id: '5',
        title: 'Ranger le matériel',
        description: 'Remettre le matériel à sa place après utilisation',
        icon: 'build',
        imageUrl: 'assets/rules/clean_up.png',
        importance: 'medium'
      },
      {
        id: '6',
        title: 'Participer aux activités',
        description: 'S'impliquer dans les activités de groupe',
        icon: 'group-work',
        imageUrl: 'assets/rules/participate.png',
        importance: 'medium'
      }
    ],
    home: [
      {
        id: '7',
        title: 'Faire ses devoirs',
        description: 'Compléter les devoirs avant les loisirs',
        icon: 'assignment',
        imageUrl: 'assets/rules/homework.png',
        importance: 'high'
      },
      {
        id: '8',
        title: 'Ranger sa chambre',
        description: 'Maintenir sa chambre propre et ordonnée',
        icon: 'weekend',
        imageUrl: 'assets/rules/clean_room.png',
        importance: 'medium'
      },
      {
        id: '9',
        title: 'Respecter les horaires',
        description: 'Suivre les horaires de repas et de coucher',
        icon: 'access-time',
        imageUrl: 'assets/rules/schedule.png',
        importance: 'high'
      }
    ]
  };

  const renderContextSelector = () => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.contextSelector}
    >
      {contexts.map(context => (
        <TouchableOpacity
          key={context.id}
          style={[
            styles.contextButton,
            selectedContext === context.id && styles.contextButtonActive
          ]}
          onPress={() => setSelectedContext(context.id)}
        >
          <Icon
            name={context.icon}
            size={24}
            color={selectedContext === context.id ? '#FFFFFF' : '#2196F3'}
          />
          <Text
            style={[
              styles.contextButtonText,
              selectedContext === context.id && styles.contextButtonTextActive
            ]}
          >
            {context.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderRuleCard = ({ item }) => (
    <View style={styles.ruleCard}>
      <View style={styles.ruleHeader}>
        <View style={styles.iconContainer}>
          <Icon name={item.icon} size={32} color="#2196F3" />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.ruleTitle}>{item.title}</Text>
          <View style={[
            styles.importanceBadge,
            { backgroundColor: item.importance === 'high' ? '#F44336' : '#FFC107' }
          ]}>
            <Text style={styles.importanceText}>
              {item.importance === 'high' ? 'Important' : 'Recommandé'}
            </Text>
          </View>
        </View>
      </View>

      <Text style={styles.ruleDescription}>{item.description}</Text>

      {/* Placeholder pour l'image - à remplacer par de vraies images */}
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder}>
          <Icon name="image" size={48} color="#BDBDBD" />
          <Text style={styles.placeholderText}>Illustration visuelle</Text>
        </View>
      </View>

      <View style={styles.ruleActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="visibility" size={20} color="#2196F3" />
          <Text style={styles.actionButtonText}>Voir Détails</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="file-download" size={20} color="#2196F3" />
          <Text style={styles.actionButtonText}>Télécharger</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="rule" size={40} color="#2196F3" />
        <Text style={styles.title}>Règles de Comportement</Text>
      </View>

      {renderContextSelector()}

      <FlatList
        data={rules[selectedContext]}
        renderItem={renderRuleCard}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.rulesList}
      />

      <TouchableOpacity style={styles.downloadButton}>
        <Icon name="file-download" size={24} color="#FFFFFF" />
        <Text style={styles.downloadButtonText}>
          Télécharger Toutes les Règles
        </Text>
      </TouchableOpacity>
    </View>
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
  contextSelector: {
    padding: 15,
  },
  contextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2196F3',
    marginRight: 10,
  },
  contextButtonActive: {
    backgroundColor: '#2196F3',
  },
  contextButtonText: {
    color: '#2196F3',
    marginLeft: 5,
    fontSize: 14,
  },
  contextButtonTextActive: {
    color: '#FFFFFF',
  },
  rulesList: {
    padding: 15,
  },
  ruleCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  ruleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#E3F2FD',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    marginLeft: 15,
  },
  ruleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  importanceBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  importanceText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  ruleDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  imageContainer: {
    height: 200,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
  },
  imagePlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#BDBDBD',
    marginTop: 10,
  },
  ruleActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 15,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#2196F3',
    marginLeft: 5,
    fontSize: 14,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    margin: 15,
  },
  downloadButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default RulesVisualizationScreen;
