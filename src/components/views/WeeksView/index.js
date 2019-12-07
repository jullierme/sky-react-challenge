import React, { useEffect, useState } from 'react';
import { fetch } from '../../../services/api';
import WeeksViewBody from './WeeksViewBody';

function WeeksView({ match }) {
  const [weeks, setWeeks] = useState([]);
  const [chosenWeek, setChosenWeek] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchWeeks();
  }, []);

  useEffect(() => {
    setChosenWeek(parseInt(match.params.index, 10));
  }, [match.params.index]);

  const fetchWeeks = async () => {
    setLoading(true);

    const data = await fetch(`/weeks`);

    setWeeks(data);

    setLoading(false);
  };

  if (loading) return <div>loading...</div>;

  if (!weeks.length) return <div>Not found!</div>;

  return <WeeksViewBody weeks={weeks} chosenWeek={chosenWeek}/>
}

export default WeeksView;
