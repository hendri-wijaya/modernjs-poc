import { targetRedirectMap } from './targetRedirectMap';

const RedirectButton = () => {
  const handleClick = () => {
    const params = new URLSearchParams(window.location.search);
    const target = params.get('target') || '';
    const redirectUrl = targetRedirectMap[target] || 'https://default.com';
    window.location.href = redirectUrl;
  };

  return (
    <button type="button" onClick={handleClick}>
      Redirect to My Apps
    </button>
  );
};

export default RedirectButton;
