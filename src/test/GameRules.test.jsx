/* eslint-disable no-undef */
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {
  render, cleanup, fireEvent,
} from '@testing-library/react';
import HashRouter from '../Router';


afterEach(cleanup);


const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Router history={history}>
        {component}
      </Router>,
    ),
  };
};


it('La página renderiza las reglas del juego al dar click en el botón "rules-button".', () => {
  const { container, getByTestId } = renderWithRouter(<HashRouter />);

  fireEvent.click(getByTestId('rules-link'));

  // La página renderiza el componente Header que contiene el botón "Volver al juego"
  expect(container).toContainElement(getByTestId('header-rules'));
  expect(getByTestId('game-button').textContent).toMatch('Volver al juego');
  // La página renderiza el componente GameRules
  expect(getByTestId('rules')).toBeInTheDocument();
  expect(getByTestId('title-rules')).toHaveTextContent('Reglas y especificaciones del juego');
  // La página renderiza el componente Footer
  expect(getByTestId('footer')).toBeTruthy();
});