import api from '../../config/api';
import getProducts from './product.service';

jest.mock('../../config/api.js');

describe('getProducts', () => {
  test('should return product data', async () => {
    const mockData = [{ id: 1 }, { id: 2 }];
    api.get.mockResolvedValueOnce({ data: mockData });

    const result = await getProducts();

    expect(result).toEqual(mockData);
    expect(api.get).toHaveBeenCalledWith('/products');
  });

  test('should throw an error when the request fails', async () => {
    const mockError = new Error('Network Error');

    api.get.mockRejectedValueOnce(mockError);

    await expect(getProducts()).rejects.toThrow(mockError);
  });

  test('should return an empty array when no products are available', async () => {
    api.get.mockResolvedValueOnce({ data: [] });

    const result = await getProducts();

    expect(result).toEqual([]);
    expect(api.get).toHaveBeenCalledWith('/products');
  });
});
