import { useState, useCallback } from 'react';
import { storage } from '../services/storage';
import { calculateStatistics } from '../utils/evaluation';

export const useEvaluations = (profileId) => {
  const [evaluations, setEvaluations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadEvaluations = useCallback(async () => {
    try {
      setIsLoading(true);
      const storedEvaluations = await storage.getEvaluations(profileId);
      setEvaluations(storedEvaluations);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [profileId]);

  const saveEvaluation = async (evaluation) => {
    try {
      setIsLoading(true);
      const newEvaluation = {
        ...evaluation,
        id: Date.now().toString(),
        profileId,
        createdAt: new Date().toISOString(),
      };

      const updatedEvaluations = [...evaluations, newEvaluation];
      await storage.saveEvaluations(profileId, updatedEvaluations);
      setEvaluations(updatedEvaluations);

      return newEvaluation;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateEvaluation = async (evaluationId, updates) => {
    try {
      setIsLoading(true);
      const updatedEvaluations = evaluations.map((eval) =>
        eval.id === evaluationId
          ? {
              ...eval,
              ...updates,
              updatedAt: new Date().toISOString(),
            }
          : eval
      );

      await storage.saveEvaluations(profileId, updatedEvaluations);
      setEvaluations(updatedEvaluations);
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteEvaluation = async (evaluationId) => {
    try {
      setIsLoading(true);
      const updatedEvaluations = evaluations.filter(
        (eval) => eval.id !== evaluationId
      );
      await storage.saveEvaluations(profileId, updatedEvaluations);
      setEvaluations(updatedEvaluations);
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const getStatistics = useCallback(
    (dateRange) => {
      let filteredEvaluations = evaluations;

      if (dateRange) {
        const { startDate, endDate } = dateRange;
        filteredEvaluations = evaluations.filter((eval) => {
          const evalDate = new Date(eval.createdAt);
          return evalDate >= startDate && evalDate <= endDate;
        });
      }

      return calculateStatistics(filteredEvaluations);
    },
    [evaluations]
  );

  const getEvaluationsByType = useCallback(
    (type, dateRange) => {
      let filtered = evaluations.filter((eval) => eval.type === type);

      if (dateRange) {
        const { startDate, endDate } = dateRange;
        filtered = filtered.filter((eval) => {
          const evalDate = new Date(eval.createdAt);
          return evalDate >= startDate && evalDate <= endDate;
        });
      }

      return filtered;
    },
    [evaluations]
  );

  const getDailyEvaluations = useCallback(
    (date) => {
      const start = new Date(date);
      start.setHours(0, 0, 0, 0);
      const end = new Date(date);
      end.setHours(23, 59, 59, 999);

      return evaluations.filter((eval) => {
        const evalDate = new Date(eval.createdAt);
        return evalDate >= start && evalDate <= end;
      });
    },
    [evaluations]
  );

  return {
    evaluations,
    isLoading,
    error,
    loadEvaluations,
    saveEvaluation,
    updateEvaluation,
    deleteEvaluation,
    getStatistics,
    getEvaluationsByType,
    getDailyEvaluations,
  };
};
