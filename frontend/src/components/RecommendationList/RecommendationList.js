import React from 'react';

export function RecommendationList({ recommendations }) {
  return (
    <div>
      <h2 className="mb-4 text-lg font-bold">Lista de Recomendações:</h2>

      {recommendations.length === 0 && <p>Nenhuma recomendação encontrada.</p>}

      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index} className="mb-2">
            {recommendation.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
