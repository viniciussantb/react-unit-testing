import { render } from '@testing-library/react';
import App from './App';

test('', () => {
    const { getByText } = render(<App />);

    expect(getByText('Hello World')).toBeInTheDocument();
    expect(getByText('Hello World')).toHaveAttribute('class', 'test');
});