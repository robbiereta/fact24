import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import axios from 'axios';
import swConnector from '../swConector';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('swConnector', () => {
  const mockFact = {
    data: {
      // Add mock invoice data here
      someField: 'someValue'
    }
  };

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    process.env.tokenTest = 'mock-token';
  });

  it('should make a POST request with correct configuration', async () => {
    // Mock successful response
    const mockResponse = { data: { success: true } };
    mockedAxios.request.mockResolvedValueOnce(mockResponse);

    // Call the function
    const result = await swConnector(mockFact);

    // Verify axios was called with correct config
    expect(mockedAxios.request).toHaveBeenCalledWith({
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://services.sw.com.mx/v3/cfdi33/issue/json/v4',
      headers: {
        'Authorization': 'Bearer mock-token',
        'Content-Type': 'application/jsontoxml'
      },
      data: mockFact
    });
  });

  it('should handle API errors gracefully', async () => {
    // Mock error response
    const mockError = new Error('API Error');
    mockedAxios.request.mockRejectedValueOnce(mockError);

    // Spy on console.log
    const consoleSpy = jest.spyOn(console, 'log');

    // Call the function
    await swConnector(mockFact);

    // Verify error was logged
    expect(consoleSpy).toHaveBeenCalledWith(mockError);
  });
});
