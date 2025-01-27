import React, { useEffect, useState } from 'react';
import { getAvailableRewards, getUserGamificationStats } from '../services/gamificationService';

const GamificationComponent = ({ userId }) => {
    const [rewards, setRewards] = useState([]);
    const [stats, setStats] = useState({});

    useEffect(() => {
        const fetchRewards = async () => {
            const data = await getAvailableRewards();
            setRewards(data);
        };
        const fetchStats = async () => {
            const data = await getUserGamificationStats(userId);
            setStats(data);
        };
        fetchRewards();
        fetchStats();
    }, [userId]);

    return (
        <div>
            <h2>Récompenses Disponibles</h2>
            <ul>
                {rewards.map(reward => (
                    <li key={reward.id}>{reward.name}</li>
                ))}
            </ul>
            <h2>Statistiques de Gamification</h2>
            <p>{JSON.stringify(stats)}</p>
        </div>
    );
};

export default GamificationComponent;
