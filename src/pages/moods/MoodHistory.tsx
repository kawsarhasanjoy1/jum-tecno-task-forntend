import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axios/axiosInstance';
import MoodTable from './MoodTable';
import MoodChart from './MoodChart';


const MoodHistory = () => {
  const [moods, setMoods] = useState([]);
  const [summary, setSummary] = useState({ Happy: 0, Sad: 0, Angry: 0, Excited: 0 });

  const fetchMoods = async () => {
    const res = await axiosInstance.get('/moods');
    setMoods(res.data);
  };

  const fetchSummary = async () => {
    const res = await axiosInstance.get('/summary/weekly-summary');
    setSummary(res.data || {});
  };

  const handleDelete = async (id: string) => {
    await axiosInstance.patch(`/moods/${id}/soft-delete`);
    fetchMoods();
    fetchSummary();
  };

  const handleRestore = async (id: string) => {
    await axiosInstance.patch(`/moods/${id}/restore`);
    fetchMoods();
    fetchSummary();
  };

  useEffect(() => {
    fetchMoods();
    fetchSummary();
  }, []);

  return (
    <div className="container py-4">
      <h3 className="text-center mb-4">Mood History</h3>
      <MoodTable moods={moods} onDelete={handleDelete} onRestore={handleRestore} />
      <MoodChart data={summary} />
    </div>
  );
};

export default MoodHistory;
