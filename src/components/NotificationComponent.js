import React, { useEffect, useState } from 'react';
import { getUserNotifications, markNotificationAsRead } from '../services/notificationService';

const NotificationComponent = ({ userId }) => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            const data = await getUserNotifications(userId);
            setNotifications(data);
        };
        fetchNotifications();
    }, [userId]);

    const handleRead = async (notificationId) => {
        await markNotificationAsRead(notificationId);
        setNotifications((prev) => prev.filter(n => n.id !== notificationId));
    };

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id} onClick={() => handleRead(notification.id)}>
                        {notification.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationComponent;
