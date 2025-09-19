import { useState } from 'react';
import RedirectButton from './RedirectButton';
import RemoteAuth from './RemoteAuth';

const App = () => {
  const [authSuccess, setAuthSuccess] = useState(false);

  const handleAuthSuccess = () => {
    setAuthSuccess(true);
  };

  return (
    <div>
      <h1>Shell Application</h1>
      {!authSuccess ? (
        <RemoteAuth onAuthSuccess={handleAuthSuccess} />
      ) : (
        <RedirectButton />
      )}
    </div>
  );
};

export default App;
