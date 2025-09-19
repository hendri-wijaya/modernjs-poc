const RedirectButton = () => {
  const handleClick = () => {
    window.location.href = 'https://google.com';
  };

  return (
    <button type="button" onClick={handleClick}>
      Go to Google.com
    </button>
  );
};

export default RedirectButton;
