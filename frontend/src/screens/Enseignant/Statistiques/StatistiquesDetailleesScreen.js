import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import { theme } from '../../../theme';
import { Card, Typography, Button } from '../../../components/common';

const StatistiquesDetailleesScreen = ({ route }) => {
  const { eleve } = route.params;
  const [period, setPeriod] = useState('weekly');
  const screenWidth = Dimensions.get('window').width - (theme.spacing.md * 2);

  const chartConfig = {
    backgroundColor: theme.colors.background.default,
    backgroundGradientFrom: theme.colors.background.default,
    backgroundGradientTo: theme.colors.background.default,
    decimalPlaces: 0,
    color: (opacity = 1) => theme.colors.primary.main,
    labelColor: (opacity = 1) => theme.colors.text.primary,
    style: {
      borderRadius: theme.radius.lg,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: theme.colors.primary.main,
    },
  };

  const progressData = {
    weekly: {
      labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'],
      datasets: [
        {
          data: [85, 88, 92, 90, 95],
          color: (opacity = 1) => theme.colors.evaluation.vert,
          strokeWidth: 2,
        },
      ],
    },
    monthly: {
      labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
      datasets: [
        {
          data: [87, 90, 92, 94],
          color: (opacity = 1) => theme.colors.evaluation.vert,
          strokeWidth: 2,
        },
      ],
    },
    yearly: {
      labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
      datasets: [
        {
          data: [80, 85, 88, 90, 92, 95],
          color: (opacity = 1) => theme.colors.evaluation.vert,
          strokeWidth: 2,
        },
      ],
    },
  };

  const behaviorData = {
    labels: ['Vert', 'Orange', 'Rouge'],
    data: [0.85, 0.10, 0.05],
    colors: [
      theme.colors.evaluation.vert,
      theme.colors.evaluation.orange,
      theme.colors.evaluation.rouge,
    ],
  };

  const locationData = {
    labels: ['École', 'Maison', 'Centre'],
    datasets: [{
      data: [92, 88, 85],
    }],
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.headerCard}>
        <Typography variant="h2" style={styles.title}>
          Statistiques de {eleve.nom}
        </Typography>
        
        <View style={styles.periodButtons}>
          <Button
            variant={period === 'weekly' ? 'primary' : 'outline'}
            onPress={() => setPeriod('weekly')}
            style={styles.periodButton}
          >
            Semaine
          </Button>
          <Button
            variant={period === 'monthly' ? 'primary' : 'outline'}
            onPress={() => setPeriod('monthly')}
            style={styles.periodButton}
          >
            Mois
          </Button>
          <Button
            variant={period === 'yearly' ? 'primary' : 'outline'}
            onPress={() => setPeriod('yearly')}
            style={styles.periodButton}
          >
            Année
          </Button>
        </View>
      </Card>

      <Card style={styles.chartCard}>
        <Typography variant="h3" style={styles.chartTitle}>
          Progression du comportement
        </Typography>
        
        <LineChart
          data={progressData[period]}
          width={screenWidth - (theme.spacing.lg * 2)}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </Card>

      <Card style={styles.chartCard}>
        <Typography variant="h3" style={styles.chartTitle}>
          Répartition des évaluations
        </Typography>
        
        <PieChart
          data={behaviorData.labels.map((label, index) => ({
            name: label,
            population: behaviorData.data[index] * 100,
            color: behaviorData.colors[index],
            legendFontColor: theme.colors.text.primary,
            legendFontSize: 12,
          }))}
          width={screenWidth - (theme.spacing.lg * 2)}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </Card>

      <Card style={styles.chartCard}>
        <Typography variant="h3" style={styles.chartTitle}>
          Performance par lieu
        </Typography>
        
        <BarChart
          data={locationData}
          width={screenWidth - (theme.spacing.lg * 2)}
          height={220}
          chartConfig={{
            ...chartConfig,
            color: (opacity = 1) => theme.colors.primary.main,
          }}
          style={styles.chart}
        />
      </Card>

      <Card style={styles.summaryCard}>
        <Typography variant="h3" style={styles.chartTitle}>
          Points clés
        </Typography>
        
        <View style={styles.summaryItem}>
          <Typography variant="subtitle1">Tendance générale</Typography>
          <Typography variant="body1" style={styles.summaryText}>
            Amélioration constante avec une progression de 15% sur les 3 derniers mois
          </Typography>
        </View>

        <View style={styles.summaryItem}>
          <Typography variant="subtitle1">Points forts</Typography>
          <Typography variant="body1" style={styles.summaryText}>
            - Excellent comportement en classe (92% vert)
            - Bonne participation aux activités
            - Respect des règles de vie
          </Typography>
        </View>

        <View style={styles.summaryItem}>
          <Typography variant="subtitle1">Points à améliorer</Typography>
          <Typography variant="body1" style={styles.summaryText}>
            - Gestion des émotions dans les moments de frustration
            - Communication avec les pairs lors des conflits
          </Typography>
        </View>
      </Card>

      <Button
        variant="outline"
        style={styles.exportButton}
        onPress={() => {/* TODO: Implémenter l'export PDF */}}
      >
        Exporter en PDF
      </Button>
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
  periodButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.sm,
  },
  periodButton: {
    flex: 1,
  },
  chartCard: {
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  chartTitle: {
    marginBottom: theme.spacing.lg,
  },
  chart: {
    marginVertical: theme.spacing.md,
    borderRadius: theme.radius.lg,
  },
  summaryCard: {
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  summaryItem: {
    marginBottom: theme.spacing.md,
  },
  summaryText: {
    color: theme.colors.text.secondary,
    marginTop: theme.spacing.xs,
  },
  exportButton: {
    marginBottom: theme.spacing.lg,
  },
});

export default StatistiquesDetailleesScreen;
