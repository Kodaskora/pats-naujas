import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <article className='prose prose-stone lg:prose-xl'>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to='/'>Go to the home page</Link>
      </p>
    </article>
  );
}

export default NoMatch;
