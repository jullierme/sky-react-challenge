import React, { useEffect, useState } from 'react';

import { fetch } from '../../../services/api';
import { getComputedTable } from '../../../services/stats';
import TableViewBody from './TableViewBody';

function TableView() {
  const [table, setTable] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    setLoading(true);

    const weeksMatches = await fetch(`/weeks`);

    setTable(getComputedTable(weeksMatches));

    setLoading(false);
  };


  if (loading) return <div>loading...</div>;
  if (!table.length) return <div>Not found!</div>;

  return <TableViewBody table={table} />;
}

export default TableView;
