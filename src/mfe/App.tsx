import { useEffect, useState } from 'react';
import RedirectButton from './RedirectButton';
import RemoteAuth from './RemoteAuth';

const getTargetParam = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('target') || '';
};

const checkIsLoggedInParam = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('isLoggedIn') === 'true';
};

const App = () => {
  const [authSuccess, setAuthSuccess] = useState(false);
  const [target] = useState(getTargetParam());

  useEffect(() => {
    if (checkIsLoggedInParam()) {
      setAuthSuccess(true);
    }
  }, []);

  const handleAuthSuccess = () => {
    setAuthSuccess(true);
  };

  return (
    <div>
      <h1>Shell Application</h1>
      {!authSuccess ? (
        <RemoteAuth onAuthSuccess={handleAuthSuccess} params={target} />
      ) : (
        <RedirectButton />
      )}
    </div>
  );
};

export default App;
