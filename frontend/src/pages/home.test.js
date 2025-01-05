import { render, screen } from '@testing-library/react';
import React from 'react';
import useProducts from '../hooks/useProducts';
import useRecommendations from '../hooks/useRecommendations';
import { HomePage } from './home';

jest.mock('../hooks/useProducts');
jest.mock('../hooks/useRecommendations');

describe('HomePage', () => {
  beforeEach(() => {
    useProducts.mockReturnValue({
      preferences: [],
      features: [],
      products: [],
    });

    useRecommendations.mockReturnValue({
      getRecommendations: jest.fn(),
      setRecommendations: jest.fn(),
      recommendations: [],
    });
  });

  test('renders the HomePage component', () => {
    render(<HomePage />);

    expect(
      screen.getByText('Recomendador de Produtos RD Station')
    ).toBeInTheDocument();
  });

  test('renders the welcome message', () => {
    render(<HomePage />);

    expect(
      screen.getByText(/Bem-vindo ao Recomendador de Produtos RD Station/i)
    ).toBeInTheDocument();
  });

  test('renders the Form component', () => {
    render(<HomePage />);

    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  test('renders the RecommendationList component empty if has no recommendations', () => {
    render(<HomePage />);

    expect(
      screen.getByText(/Nenhuma recomendação encontrada/i)
    ).toBeInTheDocument();
  });

  test('renders the RecommendationList component with recommendations', () => {
    useRecommendations.mockReturnValue({
      getRecommendations: jest.fn(),
      setRecommendations: jest.fn(),
      recommendations: [{ name: 'Product 1' }, { name: 'Product 2' }],
    });

    render(<HomePage />);

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  test('submits form and calls getRecommendations', () => {
    const mockGetRecommendations = jest.fn();
    useRecommendations.mockReturnValue({
      getRecommendations: mockGetRecommendations,
      setRecommendations: jest.fn(),
      recommendations: [],
    });

    render(<HomePage />);
    const form = screen.getByTestId('form');
    form.submit();
    expect(mockGetRecommendations).toHaveBeenCalled();
  });
});
