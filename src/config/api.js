export const API = () => {
  const baseUrl =
    process.env.REACT_APP_SERVER_URL ||
    'https://dumbmerch-b31s.herokuapp.com/api/v1' ||
    'https://localhost:5000/api/v1';

  const executeAPI = async (endpoint, config) => {
    const response = await fetch(baseUrl + endpoint, config);
    const data = await response.json();
    return data;
  };

  return {
    get: executeAPI,
    post: executeAPI,
    patch: executeAPI,
    delete: executeAPI,
  };
};
