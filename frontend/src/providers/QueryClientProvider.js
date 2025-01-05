import {
  QueryClientProvider as Provider,
  QueryClient,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

export const QueryClientProvider = ({ children }) => {
  return <Provider client={queryClient}>{children}</Provider>;
};
