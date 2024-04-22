import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider} from 'react-query';
import { Helmet } from 'react-helmet';
import ErrorBoundary from './components/ErrorBoundaries';
import AppRouter from './components/AppRouter'; 
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <ErrorBoundary>
      <Helmet>
        <title>Idaresit&apos;s Github Repositories Viewer</title>
      </Helmet>
      <QueryClientProvider client={queryClient}>
        <Router>
          <AppRouter /> 
        </Router>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;