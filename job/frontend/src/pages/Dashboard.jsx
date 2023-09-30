import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/admindashboard')
    }, [navigate]);

    return <div>Redirecting...</div>;
};

export default Dashboard;
