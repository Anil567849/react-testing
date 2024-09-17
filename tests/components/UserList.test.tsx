import { render, screen } from '@testing-library/react';
import UserList from '../../src/components/UserList';


describe("group", () => {
    it("should return no users found if user doesn't exist", () => {
        render(<UserList users={[]} />)

        expect(screen.getByText(/no users/i)).toBeInTheDocument();
    })
    it("should return list of users if user exist", () => {
        const users = [
            {id: 1, name: 'Anil'},
            {id: 2, name: 'John'}
        ]
        render(<UserList users={users} />)

        users.forEach((user) => {
            const link = screen.getByRole('link', {name: user.name})
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', `/users/${user.id}`);
        })
    })
})