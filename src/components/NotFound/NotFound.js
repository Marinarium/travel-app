import {Link} from 'react-router-dom';

import "./NotFound.scss"

export default function NotFound() {
  return (
    <main className="main">
      <div className="notFound">
        <h1 className="main-title">Error 404</h1>
        <h3>Oops! Seems like that page never returned from a trip!</h3>
        <Link to='/'>
          <h3>Back home</h3>
        </Link>
      </div>
    </main>
  )
}
