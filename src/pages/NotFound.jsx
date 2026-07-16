// Custom 404 page
import '../css/notFound.css';

export default function NotFound() {
  return (
    <main className="not-found" role="main">
      <div className="not-found-inner">
        <div className="not-found-code" aria-label="404">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-desc">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="btn btn-primary">← Back to Home</a>
      </div>
    </main>
  );
}
