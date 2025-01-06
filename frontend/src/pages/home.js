import React from 'react';

import {
  Features,
  Preferences,
  RecommendationType,
} from '../components/Form/Fields';
import { SubmitButton } from '../components/Form/SubmitButton';
import { RecommendationList } from '../components/RecommendationList/RecommendationList';
import useForm from '../hooks/useForm';
import useProducts from '../hooks/useProducts';
import useRecommendations from '../hooks/useRecommendations';

const formInitialData = {
  selectedPreferences: [],
  selectedFeatures: [],
  selectedRecommendationType: 'MultipleProducts',
};

export const HomePage = () => {
  const { preferences, features, products } = useProducts();
  const { getRecommendations, setRecommendations, recommendations } =
    useRecommendations(products);

  const { formData, handleChange } = useForm(formInitialData);

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataRecommendations = getRecommendations(formData);
    setRecommendations(dataRecommendations);
  };

  return (
    <form
      data-testid="form"
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center flex-1 gap-4 p-4 border rounded-lg shadow-md lg:p-8 bg-slate-50 text-cyan-950 border-slate-200"
    >
      <div className="flex flex-col items-center justify-between w-full gap-4 lg:flex-row">
        <h2 className="text-3xl font-bold">
          Recomendador de Produtos RD Station
        </h2>
        <div className="flex flex-col-reverse items-center gap-4 lg:flex-row">
          <RecommendationType
            onRecommendationTypeChange={(selected) =>
              handleChange('selectedRecommendationType', selected)
            }
          />
          <SubmitButton text="Me recomende!" />
        </div>
      </div>
      <p className="font-xs text-md opacity-70">
        Aqui você pode uma variedade de produtos da RD Station, cada um
        projetado para atender às necessidades específicas do seu negócio. De
        CRM a Marketing, de Conversas a Inteligência Artificial, temos uma
        solução para ajudar você a alcançar seus objetivos. Use o formulário
        abaixo para selecionar suas preferências e funcionalidades desejadas e
        receba recomendações personalizadas de produtos que melhor atendam às
        suas necessidades.
      </p>
      <div className="flex flex-col flex-1 w-full gap-4 lg:flex-row">
        <div className="flex w-full gap-4 lg:w-2/3">
          <div className="flex flex-col gap-4 lg:flex-row">
            <Preferences
              preferences={preferences}
              onPreferenceChange={(selected) =>
                handleChange('selectedPreferences', selected)
              }
            />
            <Features
              features={features}
              onFeatureChange={(selected) =>
                handleChange('selectedFeatures', selected)
              }
            />
          </div>
        </div>
        <div className="flex flex-col justify-between w-full gap-4 lg:w-1/3">
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>
    </form>
  );
};
