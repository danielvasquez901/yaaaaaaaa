// src/app/api/humidity/route.js
export async function GET(request) {
  const humidityData = {
    value: Math.random() * 100,
    timestamp: new Date().toISOString(),
  };
  return new Response(JSON.stringify(humidityData), {
    headers: { 'Content-Type': 'application/json' },
  });
}
