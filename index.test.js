// Import the module with the getTodo function
import { getTodo, getTodos } from './index';

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

  it('should return an error when the todo is not found', async () => {
    const expectedError = new Error('Request failed with status code 404');

    axios.get.mockRejectedValue(expectedError);

    const result = await getTodo();

    expect(result).toEqual(expectedError);
  });
});

describe('getTodos', () => {
    it('should fetch a list of todos successfully', async () => {
        const expectedTodos = [
            {
                userId: 1,
                id: 1,
                title: 'Test Todo',
                completed: false,
            },
            {
                userId: 1,
                id: 2,
                title: 'Test Todo 2',
                completed: false,
            },
        ];

        axios.get.mockResolvedValue({ data: expectedTodos });

        const result = await getTodos();

        expect(result).toEqual(expectedTodos);
    });

    it('should return an error when the todo is not found', async () => {
        const expectedError = new Error('Request failed with status code 404');

        axios.get.mockRejectedValue(expectedError);

        const result = await getTodos();

        expect(result).toEqual(expectedError);
    });
});
