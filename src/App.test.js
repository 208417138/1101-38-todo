import { render, screen } from '@testing-library/react';
import App from './App_38';

test('renders learn react link', () => {
  render(<App_38 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
