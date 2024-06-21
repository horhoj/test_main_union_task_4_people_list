export const requestExecutor = async <T>(...options: Parameters<typeof fetch>): Promise<T> => {
  const response = await fetch(...options);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data as T;
};
