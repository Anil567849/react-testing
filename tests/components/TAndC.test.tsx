import { render, screen } from '@testing-library/react';
import TermsAndConditions from '../../src/components/TermsAndConditions';
import userEvent from '@testing-library/user-event';

describe('group', () => { 

    function renderComponent(){
        render(<TermsAndConditions />);

        return {
            heading: screen.getByRole('heading'),
            checkbox: screen.getByRole('checkbox'),
            // if you have multiple buttons you can pass second argument as a filter
            button: screen.getByRole('button', {name: /submit/i}),
        }
    }

    it('should', () => {
        const {heading, checkbox, button} = renderComponent();
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/terms & conditions/i);

        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();
    })
    it('should', async () => {
        const {heading, checkbox, button} = renderComponent();
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/terms & conditions/i);

        const userAction = userEvent.setup();
        await userAction.click(checkbox);
        
        expect(button).toBeEnabled();
    })
 })