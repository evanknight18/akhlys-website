// Utility functions or API calls can be placed here

export const fetchSomeData = async () => {
  // Example API call
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
};
