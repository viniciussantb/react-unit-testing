import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testing App component', () => {
    it('should have Hello World', () => {
        const { getByText } = render(<App />);
        expect(getByText('Hello World')).toBeInTheDocument();
    });

    it('should add user Vinícius', async () => {
        const { getByText } = render(<App />);
        await userEvent.click(getByText('Add Name'));

        expect(getByText('Patrick')).toBeInTheDocument();
        expect(getByText('Vinícius')).toBeInTheDocument();
        expect(getByText('Add Name')).toBeDisabled();
    });
});