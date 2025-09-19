import React, { Suspense, useState } from 'react';

type RemoteLoginProps = { onSuccess: () => void; params?: string };
const RemoteLogin = React.lazy(
  () => import('auth/Login'),
) as React.ComponentType<RemoteLoginProps>;

interface RemoteAuthProps {
  onAuthSuccess: () => void;
  params?: string;
}

const RemoteAuth = ({ onAuthSuccess }: RemoteAuthProps) => {
  const [showRemote, setShowRemote] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [params, setParams] = useState<string | undefined>(undefined);

  const handleAuth = () => {
    setError(null);
    try {
      // Capture 'target' param from URL when Authenticate is clicked
      const urlParams = new URLSearchParams(window.location.search);
      const target = urlParams.get('target') || '';
      setParams(target);
      setShowRemote(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  return (
    <div>
      <h2>Remote Authentication</h2>
      {!showRemote && (
        <button type="button" onClick={handleAuth}>
          Authenticate
        </button>
      )}
      {showRemote && (
        <Suspense fallback={<div>Loading remote login...</div>}>
          <RemoteLogin onSuccess={onAuthSuccess} params={params} />
        </Suspense>
      )}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default RemoteAuth;
