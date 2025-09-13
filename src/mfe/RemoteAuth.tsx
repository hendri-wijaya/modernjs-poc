const RemoteAuth = ({ onAuthSuccess }: { onAuthSuccess: () => void }) => {
  // Simulate remote authentication
  const handleAuth = () => {
    // In a real scenario, this would be a remote MFE loaded via module federation
    setTimeout(() => {
      onAuthSuccess();
    }, 1000);
  };

  return (
    <div>
      <h2>Remote Authentication</h2>
      <button type="button" onClick={handleAuth}>
        Authenticate
      </button>
    </div>
  );
};

export default RemoteAuth;
