import React from 'react';
import './Styling/CommisionTable.css';

function CommissionTable() {
  const rows = [
    { spend: '< 20.000,00 €', commission: '8%' },
    { spend: '20.000,00 € - 45.000,00 €', commission: '7%' },
    { spend: '45.000,00 € - 70.000 €', commission: '6%' },
    { spend: '70.000,00 € - 120.000,00 €', commission: '5%' },
    { spend: '> 120.000,00 €', commission: '4%' },
    { spend: '> 150.000,00 €', commission: '3,5%' }
  ];

  return (
    <div className="background-table">
    <h2>Vergütung und Laufzeit</h2>
    <table>
      <thead>
        <tr>
          <th>Monatlicher Ad-Spend</th>
          <th>Monatliche Provision</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row.spend}</td>
            <td>{row.commission}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default CommissionTable;
