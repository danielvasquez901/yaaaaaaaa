// src/app/page.js
import Link from 'next/link';
import HumidityDisplay from './components/HumidityDisplay';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f3f4f6',
      padding: '20px'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '20px'
      }}>
        Monitor de Humedad
      </h1>
      <HumidityDisplay />

      <Link href="/historial">
        <button style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}>
          Ver Historial de Humedad
        </button>
      </Link>
    </div>
  );
}
