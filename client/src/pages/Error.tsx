import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <article>
      <h1>
        Something went wrong.
      </h1>
      <Link to="/">back</Link>
    </article>
  );
}