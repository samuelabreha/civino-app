import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BarChart, PieChart } from 'react-native-chart-kit';

const MonthlyReviewScreen = ({ navigation }) => {
  const [selectedMonth, setSelectedMonth] = useState('Septembre 2024');

  const monthlyData = {
    summary: {
      title: 'Bilan du Mois de Septembre 2024',
      overview: 'Progrès significatifs observés dans tous les domaines d'intervention',
    },
    statistics: {
      behavioral: {
        labels: ['Comportement', 'Communication', 'Autonomie', 'Social'],
        data: [4.5, 4.2, 3.8, 4.0]
      },
      contextual: [
        {
          name: 'École',
          percentage: 85,
          color: '#2196F3',
          legendFontColor: '#7F7F7F',
          legendFontSize: 12
        },
        {
          name: 'Maison de quartier',
          percentage: 90,
          color: '#4CAF50',
          legendFontColor: '#7F7F7F',
          legendFontSize: 12
        },
        {
          name: 'Maison',
          percentage: 80,
          color: '#FFC107',
          legendFontColor: '#7F7F7F',
          legendFontSize: 12
        }
      ]
    },
    achievements: [
      {
        category: 'Comportement',
        items: [
          'Meilleure gestion des émotions',
          'Respect constant des règles',
          'Participation active aux activités'
        ]
      },
      {
        category: 'Communication',
        items: [
          'Expression claire des besoins',
          'Écoute attentive',
          'Interactions positives avec les pairs'
        ]
      },
      {
        category: 'Autonomie',
        items: [
          'Organisation personnelle améliorée',
          'Initiative dans les tâches',
          'Gestion du temps'
        ]
      }
    ],
    recommendations: [
      {
        context: 'École',
        items: [
          'Continuer le travail sur la concentration',
          'Encourager la participation en classe',
          'Maintenir le suivi des devoirs'
        ]
      },
      {
        context: 'Maison de quartier',
        items: [
          'Favoriser les activités de groupe',
          'Renforcer les interactions positives',
          'Développer les compétences sociales'
        ]
      },
      {
        context: 'Maison',
        items: [
          'Maintenir les routines établies',
          'Encourager l'autonomie',
          'Valoriser les efforts'
        ]
      }
    ]
  };

  const renderBehavioralChart = () => (
    <View style={styles.chartContainer}>
      <Text style={styles.chartTitle}>Évaluation Comportementale</Text>
      <BarChart
        data={{
          labels: monthlyData.statistics.behavioral.labels,
          datasets: [{
            data: monthlyData.statistics.behavioral.data
          }]
        }}
        width={Dimensions.get('window').width - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#FFFFFF',
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        style={styles.chart}
      />
    </View>
  );

  const renderContextualChart = () => (
    <View style={styles.chartContainer}>
      <Text style={styles.chartTitle}>Répartition par Contexte</Text>
      <PieChart
        data={monthlyData.statistics.contextual}
        width={Dimensions.get('window').width - 40}
        height={220}
        chartConfig={{
          color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`
        }}
        accessor="percentage"
        backgroundColor="transparent"
        paddingLeft="15"
        style={styles.chart}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="assessment" size={40} color="#2196F3" />
        <Text style={styles.title}>{monthlyData.summary.title}</Text>
      </View>

      <View style={styles.overviewContainer}>
        <Text style={styles.overviewText}>{monthlyData.summary.overview}</Text>
      </View>

      {renderBehavioralChart()}
      {renderContextualChart()}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Réalisations</Text>
        {monthlyData.achievements.map((achievement, index) => (
          <View key={index} style={styles.achievementCard}>
            <View style={styles.cardHeader}>
              <Icon name="star" size={24} color="#FFC107" />
              <Text style={styles.categoryTitle}>{achievement.category}</Text>
            </View>
            {achievement.items.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.listItem}>
                <Icon name="check-circle" size={20} color="#4CAF50" />
                <Text style={styles.listItemText}>{item}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recommandations</Text>
        {monthlyData.recommendations.map((recommendation, index) => (
          <View key={index} style={styles.recommendationCard}>
            <View style={styles.cardHeader}>
              <Icon name="location-on" size={24} color="#2196F3" />
              <Text style={styles.categoryTitle}>{recommendation.context}</Text>
            </View>
            {recommendation.items.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.listItem}>
                <Icon name="arrow-forward" size={20} color="#2196F3" />
                <Text style={styles.listItemText}>{item}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.exportButton}>
        <Icon name="file-download" size={24} color="#FFFFFF" />
        <Text style={styles.exportButtonText}>
          Télécharger le Bilan Complet
        </Text>
      </TouchableOpacity>
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
  overviewContainer: {
    padding: 20,
    backgroundColor: '#F5F5F5',
    margin: 15,
    borderRadius: 10,
  },
  overviewText: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  },
  chartContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  achievementCard: {
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
  recommendationCard: {
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
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingLeft: 10,
  },
  listItemText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
    flex: 1,
  },
  exportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    margin: 15,
  },
  exportButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default MonthlyReviewScreen;
