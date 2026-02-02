import { ErrorBoundary } from '@ui/ErrorBoundary';
import TiptapEditor from '@ui/TiptapEditor';
import { StatusTag } from '@ui/StatusTag';

export function App() {
  return (
    <ErrorBoundary>
      <TiptapEditor />

      <StatusTag
        status="success"
        statusMap={{
          success: {
            text: 'Success',
            color: 'text-green-700',
            background: 'bg-green-100',
          },
        }}
      />
    </ErrorBoundary>
  );
}

export default App;
