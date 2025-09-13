import { Outlet } from 'react-router-dom';
import RemoteAuth from './RemoteAuth';

const App = () => {
  const handleAuthSuccess = () => {
    window.location.href = 'https://google.com';
  };

  return (
    <div>
      <h1>Shell Application</h1>
      <RemoteAuth onAuthSuccess={handleAuthSuccess} />
      <Outlet />
    </div>
  );
};

export default App;
