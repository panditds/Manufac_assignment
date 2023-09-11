import React from 'react';

interface TableProps {
  title: string;
  headers: string[];
  rows: any[][];
}

const Table: React.FC<TableProps> = ({ title, headers, rows }) => {
  return (
    <div className="classes">
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
