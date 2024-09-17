import { render, screen } from '@testing-library/react';
import UserAccount from '../../src/components/UserAccount';


describe("group", () => {
    it("should return heading", () => {
        const user = {id: 1, name: "Anil"};
        render(<UserAccount user={user} />)

        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/user profile/i);
    })

    it("should return edit button for admin", () => {
        const user = {id: 1, name: "Anil", isAdmin: true};
        render(<UserAccount user={user} />)

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/edit/i);
    })

    it("should not return edit button if user is not admin", () => {
        const user = {id: 1, name: "Anil"};
        render(<UserAccount user={user} />)

        // use queryByRole becuase button will not exist - getByRole will throw error becuase it will not find button
        const button = screen.queryByRole('button');
        expect(button).not.toBeInTheDocument();
    })

    it("should return name", () => {
        const user = {id: 1, name: "Anil"};
        render(<UserAccount user={user} />)

        expect(screen.getByText(user.name)).toBeInTheDocument();
    })
})