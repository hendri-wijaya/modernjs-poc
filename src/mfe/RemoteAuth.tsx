import React, { Suspense, useState } from 'react';

type RemoteLoginProps = { onSuccess: () => void };
const RemoteLogin = React.lazy(
  () => import('auth/Login'),
) as React.ComponentType<RemoteLoginProps>;

const RemoteAuth = ({ onAuthSuccess }: { onAuthSuccess: () => void }) => {
  const [showRemote, setShowRemote] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAuth = () => {
    setError(null);
    try {
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
          <RemoteLogin onSuccess={onAuthSuccess} />
        </Suspense>
      )}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default RemoteAuth;
