import React from 'react';
import { Link } from 'react-router-dom';
export default function Dashboard() {
  return(
    <div>
      <nav>
        <h2>Dashboard</h2>
        <Link to="browsestories">Browse stories</Link>
      </nav>
    </div>
    
  );
}
