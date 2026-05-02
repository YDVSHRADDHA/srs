import { useState, useEffect } from 'react';
import api from '../services/api';

export const useLeads = () => {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchLeads = async () => {
        setLoading(true);
        try {
            const response = await api.get('/leads');
            setLeads(response.data);
            setError(null);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch leads');
            setLeads([]);
        } finally {
            setLoading(false);
        }
    };

    const updateLeadStatus = async (id, status) => {
        try {
            const response = await api.patch(`/leads/${id}`, { status });
            setLeads(prev => prev.map(lead => lead._id === id ? response.data : lead));
            return { success: true };
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update status');
            return { success: false, error: err.message };
        }
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    return { leads, loading, error, refreshLeads: fetchLeads, updateLeadStatus };
};
