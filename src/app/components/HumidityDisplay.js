// src/app/components/HumidityDisplay.js
"use client";

import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

export default function HumidityDisplay() {
  const { data, error } = useSWR('/api/humidity', fetcher, { refreshInterval: 5000 });

  if (error) return <div>Error al cargar los datos</div>;
  if (!data) return <div>Cargando...</div>;

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#0070f3',
      color: '#fff',
      borderRadius: '8px',
      fontSize: '1.5rem',
      textAlign: 'center',
      marginTop: '20px'
    }}>
      Humedad Actual: {data.value.toFixed(2)}%
    </div>
  );
}
