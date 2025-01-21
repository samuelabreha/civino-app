import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../../theme';
import { Card, Typography, Button } from '../../components/common';
import { LineChart, BarChart } from 'react-native-chart-kit';

const StatisticsDetailsScreen = ({ route, navigation }) => {
  const { stats, typeEvaluations, timeRange } = route.params;

  const chartConfig = {
    backgroundGradientFrom: theme.colors.background.default,
    backgroundGradientTo: theme.colors.background.default,
    color: (opacity = 1) => theme.colors.primary.main,
    strokeWidth: 2,
    barPercentage: 0.5,
  };

  const getProgressionData = () => {
    // Format data based on timeRange
    const labels = [];
    const vertData = [];
    const jauneData = [];
    const rougeData = [];

    // Group evaluations by date
    const groupedEvals = typeEvaluations.reduce((acc, eval) => {
      const date = new Date(eval.createdAt);
      const key = date.toISOString().split('T')[0];
      
      if (!acc[key]) {
        acc[key] = { vert: 0, jaune: 0, rouge: 0 };
      }
      
      acc[key][eval.evaluation.toLowerCase()]++;
      return acc;
    }, {});

    // Sort dates and format data
    Object.keys(groupedEvals)
      .sort()
      .slice(-7)
      .forEach(date => {
        const dateObj = new Date(date);
        labels.push(dateObj.toLocaleDateString('fr-FR', { weekday: 'short' }));
        
        const total = Object.values(groupedEvals[date]).reduce((a, b) => a + b, 0);
        vertData.push((groupedEvals[date].vert / total) * 100);
        jauneData.push((groupedEvals[date].jaune / total) * 100);
        rougeData.push((groupedEvals[date].rouge / total) * 100);
      });

    return {
      labels,
      datasets: [
        {
          data: vertData,
          color: () => theme.colors.evaluation.vert,
          strokeWidth: 2,
        },
        {
          data: jauneData,
          color: () => theme.colors.evaluation.jaune,
          strokeWidth: 2,
        },
        {
          data: rougeData,
          color: () => theme.colors.evaluation.rouge,
          strokeWidth: 2,
        },
      ],
    };
  };

  const getDistributionData = () => {
    return {
      labels: ['Vert', 'Jaune', 'Rouge'],
      datasets: [{
        data: [
          stats.vertPercentage,
          stats.jaunePercentage,
          stats.rougePercentage,
        ],
      }],
    };
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.headerCard}>
        <Typography variant="h2" style={styles.title}>
          Statistiques détaillées
        </Typography>
        <Typography variant="subtitle1" style={styles.subtitle}>
          {timeRange === 'week' ? 'Cette semaine' :
           timeRange === 'month' ? 'Ce mois' : 'Cette année'}
        </Typography>
      </Card>

      <Card style={styles.statsCard}>
        <Typography variant="h3" style={styles.sectionTitle}>
          Progression
        </Typography>

        <LineChart
          data={getProgressionData()}
          width={300}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />

        <View style={styles.legend}>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: theme.colors.evaluation.vert }]} />
            <Typography>Vert</Typography>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: theme.colors.evaluation.jaune }]} />
            <Typography>Jaune</Typography>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: theme.colors.evaluation.rouge }]} />
            <Typography>Rouge</Typography>
          </View>
        </View>
      </Card>

      <Card style={styles.statsCard}>
        <Typography variant="h3" style={styles.sectionTitle}>
          Distribution
        </Typography>

        <BarChart
          data={getDistributionData()}
          width={300}
          height={220}
          chartConfig={{
            ...chartConfig,
            color: (opacity = 1, index) => {
              const colors = [
                theme.colors.evaluation.vert,
                theme.colors.evaluation.jaune,
                theme.colors.evaluation.rouge,
              ];
              return colors[index] || theme.colors.primary.main;
            },
          }}
          style={styles.chart}
        />
      </Card>

      <Card style={styles.summaryCard}>
        <Typography variant="h3" style={styles.sectionTitle}>
          Résumé
        </Typography>

        <View style={styles.summaryGrid}>
          <View style={styles.summaryItem}>
            <Typography variant="h4">{stats.total}</Typography>
            <Typography variant="caption">Évaluations</Typography>
          </View>
          <View style={styles.summaryItem}>
            <Typography variant="h4">{stats.average.toFixed(1)}</Typography>
            <Typography variant="caption">Moyenne</Typography>
          </View>
          <View style={styles.summaryItem}>
            <Typography variant="h4">{stats.appreciation}</Typography>
            <Typography variant="caption">Appréciation</Typography>
          </View>
        </View>

        <View style={styles.detailsGrid}>
          <View style={styles.detailItem}>
            <Typography style={styles.detailLabel}>Vert:</Typography>
            <Typography>{stats.vert} ({stats.vertPercentage.toFixed(1)}%)</Typography>
          </View>
          <View style={styles.detailItem}>
            <Typography style={styles.detailLabel}>Jaune:</Typography>
            <Typography>{stats.jaune} ({stats.jaunePercentage.toFixed(1)}%)</Typography>
          </View>
          <View style={styles.detailItem}>
            <Typography style={styles.detailLabel}>Rouge:</Typography>
            <Typography>{stats.rouge} ({stats.rougePercentage.toFixed(1)}%)</Typography>
          </View>
        </View>
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
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: theme.colors.text.secondary,
  },
  statsCard: {
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    alignItems: 'center',
  },
  sectionTitle: {
    marginBottom: theme.spacing.lg,
  },
  chart: {
    marginVertical: theme.spacing.md,
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: theme.spacing.lg,
    marginTop: theme.spacing.md,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  summaryCard: {
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  summaryGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xl,
  },
  summaryItem: {
    alignItems: 'center',
    flex: 1,
  },
  detailsGrid: {
    gap: theme.spacing.md,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailLabel: {
    color: theme.colors.text.secondary,
  },
});

export default StatisticsDetailsScreen;
