import { useParams } from 'react-router-dom';

const RedirectLink = () => {
  const { id } = useParams();

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
      <p>Redirecting to link with ID: {id}</p>
    </div>
  );
};

export default RedirectLink;