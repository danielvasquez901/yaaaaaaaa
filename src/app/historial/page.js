// src/app/historial/page.js
import Link from 'next/link';

const historialData = [
  { id: 1, timestamp: '2024-10-31 10:00', humidity: '45%' },
  { id: 2, timestamp: '2024-10-31 11:00', humidity: '50%' },
  { id: 3, timestamp: '2024-10-31 12:00', humidity: '47%' },
  // Puedes agregar más datos simulados aquí
];

export default function Historial() {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f3f4f6',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '20px'
      }}>
        Historial de Humedad
      </h1>
      <table style={{
        width: '100%',
        maxWidth: '600px',
        margin: 'auto',
        borderCollapse: 'collapse',
        marginBottom: '20px'
      }}>
        <thead>
          <tr>
            <th style={{
              padding: '10px',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: '1px solid #ddd'
            }}>IDENTIFICACIÓN</th>
            <th style={{
              padding: '10px',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: '1px solid #ddd'
            }}>Hora</th>
            <th style={{
              padding: '10px',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: '1px solid #ddd'
            }}>Humedad</th>
          </tr>
        </thead>
        <tbody>
          {historialData.map((entry) => (
            <tr key={entry.id}>
              <td style={{
                padding: '8px',
                border: '1px solid #ddd',
                textAlign: 'center'
              }}>{entry.id}</td>
              <td style={{
                padding: '8px',
                border: '1px solid #ddd',
                textAlign: 'center'
              }}>{entry.timestamp}</td>
              <td style={{
                padding: '8px',
                border: '1px solid #ddd',
                textAlign: 'center'
              }}>{entry.humidity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link href="/">
        <button style={{
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}>
          Volver a Inicio
        </button>
      </Link>
    </div>
  );
}
