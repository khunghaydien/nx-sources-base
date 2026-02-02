import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from '@ui';

export function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
