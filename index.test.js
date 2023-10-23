// Import the module with the getTodo function
import { getTodo } from './index';

// Mock Axios
jest.mock('axios');

// Import Axios for manual mocking
import axios from 'axios';

describe('getTodo', () => {
  it('should fetch a todo successfully', async () => {
    const expectedTodo = {
      userId: 1,
      id: 1,
      title: 'Test Todo',
      completed: false,
    };

    axios.get.mockResolvedValue({ data: expectedTodo });

    const result = await getTodo(1);

    expect(result).toEqual(expectedTodo);
  });
});
