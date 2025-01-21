import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { theme } from '../../theme';
import { Card, Typography, Button } from '../../components/common';
import { useEvaluations } from '../../hooks/useEvaluations';
import {
  LineChart,
  BarChart,
  PieChart,
} from 'react-native-chart-kit';

const StatisticsScreen = ({ navigation }) => {
  const { currentProfile } = useSelector((state) => state.profile);
  const {
    evaluations,
    isLoading,
    error,
    loadEvaluations,
    getStatistics,
    getEvaluationsByType,
  } = useEvaluations(currentProfile?.id);

  const [timeRange, setTimeRange] = useState('week');
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    loadEvaluations();
  }, [loadEvaluations]);

  const getDateRange = () => {
    const end = new Date();
    const start = new Date();
    
    switch (timeRange) {
      case 'week':
        start.setDate(end.getDate() - 7);
        break;
      case 'month':
        start.setMonth(end.getMonth() - 1);
        break;
      case 'year':
        start.setFullYear(end.getFullYear() - 1);
        break;
      default:
        start.setDate(end.getDate() - 7);
    }
    
    return { startDate: start, endDate: end };
  };

  const stats = getStatistics(getDateRange());
  const typeEvaluations = getEvaluationsByType(selectedType, getDateRange());

  const chartConfig = {
    backgroundGradientFrom: theme.colors.background.default,
    backgroundGradientTo: theme.colors.background.default,
    color: (opacity = 1) => theme.colors.primary.main,
    strokeWidth: 2,
    barPercentage: 0.5,
  };

  const pieChartData = [
    {
      name: 'Vert',
      population: stats.vertPercentage,
      color: theme.colors.evaluation.vert,
      legendFontColor: theme.colors.text.primary,
    },
    {
      name: 'Jaune',
      population: stats.jaunePercentage,
      color: theme.colors.evaluation.jaune,
      legendFontColor: theme.colors.text.primary,
    },
    {
      name: 'Rouge',
      population: stats.rougePercentage,
      color: theme.colors.evaluation.rouge,
      legendFontColor: theme.colors.text.primary,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.headerCard}>
        <Typography variant="h2" style={styles.title}>
          Statistiques
        </Typography>

        <View style={styles.timeRangeButtons}>
          <Button
            variant={timeRange === 'week' ? 'primary' : 'outline'}
            onPress={() => setTimeRange('week')}
            style={styles.timeButton}
          >
            Semaine
          </Button>
          <Button
            variant={timeRange === 'month' ? 'primary' : 'outline'}
            onPress={() => setTimeRange('month')}
            style={styles.timeButton}
          >
            Mois
          </Button>
          <Button
            variant={timeRange === 'year' ? 'primary' : 'outline'}
            onPress={() => setTimeRange('year')}
            style={styles.timeButton}
          >
            Année
          </Button>
        </View>
      </Card>

      <Card style={styles.statsCard}>
        <Typography variant="h3" style={styles.sectionTitle}>
          Répartition des évaluations
        </Typography>
        
        <PieChart
          data={pieChartData}
          width={300}
          height={200}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
        />

        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Typography variant="h4">{stats.total}</Typography>
            <Typography variant="caption">Total</Typography>
          </View>
          <View style={styles.statItem}>
            <Typography variant="h4">{stats.average}</Typography>
            <Typography variant="caption">Moyenne</Typography>
          </View>
          <View style={styles.statItem}>
            <Typography variant="h4">{stats.appreciation}</Typography>
            <Typography variant="caption">Appréciation</Typography>
          </View>
        </View>
      </Card>

      <Card style={styles.detailsCard}>
        <Typography variant="h3" style={styles.sectionTitle}>
          Détails par type
        </Typography>

        <View style={styles.typeButtons}>
          <Button
            variant={selectedType === 'all' ? 'primary' : 'outline'}
            onPress={() => setSelectedType('all')}
            style={styles.typeButton}
          >
            Tous
          </Button>
          <Button
            variant={selectedType === 'ecole' ? 'primary' : 'outline'}
            onPress={() => setSelectedType('ecole')}
            style={styles.typeButton}
          >
            École
          </Button>
          <Button
            variant={selectedType === 'maison' ? 'primary' : 'outline'}
            onPress={() => setSelectedType('maison')}
            style={styles.typeButton}
          >
            Maison
          </Button>
        </View>

        <Button
          variant="primary"
          onPress={() => navigation.navigate('StatistiquesDetailees', {
            stats,
            typeEvaluations,
            timeRange,
          })}
          style={styles.detailsButton}
        >
          Voir les statistiques détaillées
        </Button>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.grey,
    padding: theme.spacing.md,
  },
  headerCard: {
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  title: {
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  timeRangeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.sm,
  },
  timeButton: {
    flex: 1,
  },
  statsCard: {
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    alignItems: 'center',
  },
  sectionTitle: {
    marginBottom: theme.spacing.lg,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: theme.spacing.lg,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  detailsCard: {
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  typeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.lg,
  },
  typeButton: {
    flex: 1,
  },
  detailsButton: {
    marginTop: theme.spacing.md,
  },
});

export default StatisticsScreen;
