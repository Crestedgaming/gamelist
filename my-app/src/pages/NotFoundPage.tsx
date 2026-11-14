import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/">Back to Questlog</Link>
    </div>
  );
};

export default NotFoundPage;