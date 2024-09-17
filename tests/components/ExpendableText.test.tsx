import { render, screen } from '@testing-library/react';
import ExpandableText from '../../src/components/ExpandableText';
import userEvent from '@testing-library/user-event';


describe("group", () => {
    const limit = 255;
    const longText = 'a'.repeat(256);
    const truncate = longText.substring(0, limit) + '...';

    it("should render the full text if less than 255 characters", () => {
        render(<ExpandableText text={truncate}/>);

        expect(screen.getByText(truncate)).toBeInTheDocument();
    })
    it("should truncate if longer than than 255 characters", () => {
        render(<ExpandableText text={longText}/>);

        expect(screen.getByText(truncate)).toBeInTheDocument();


        const button = screen.getByRole('button');
        expect(button).toHaveTextContent(/more/i);
    })
    it("should render full text if show more button is clicked", async () => {
        render(<ExpandableText text={longText}/>);

        const button = screen.getByRole('button');
        expect(button).toHaveTextContent(/more/i);

        const userAction = userEvent.setup();
        await userAction.click(button);

        expect(screen.getByText(longText)).toBeInTheDocument();
        expect(button).toHaveTextContent(/less/i);
    })
    it("should render truncate text if show less button is clicked", async () => {
        render(<ExpandableText text={longText}/>);

        const showMoreButton = screen.getByRole('button', {name: /more/i});
        expect(showMoreButton).toHaveTextContent(/more/i);

        const userAction = userEvent.setup();
        await userAction.click(showMoreButton);

        const showLessButton = screen.getByRole('button', {name: /less/i});
        await userAction.click(showLessButton);

        expect(screen.getByText(truncate)).toBeInTheDocument();
        expect(showMoreButton).toHaveTextContent(/more/i);
    })
})