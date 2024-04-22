import PropTypes from 'prop-types';
import { ErrorBoundary } from 'react-error-boundary';
import { Link } from 'react-router-dom';
import bugFixing from '../assets/error-boundary.svg';

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert" className="fallback-container">
            <p>Oops! Something seems to have gone wrong. Always remember the road that will lead you</p>
          <img src={bugFixing} alt="a girl fixing bugs in a program" className='bug-fixing'/>
            <pre>{error.message}</pre>
            <Link onClick={resetErrorBoundary} className="button-link" to="/Repositories">Home</Link>
        </div>
    );
}

ErrorFallback.propTypes = {
    error: PropTypes.object.isRequired,
    resetErrorBoundary: PropTypes.func.isRequired,
};

function ErrorCatcher({ children }) {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            {children}
        </ErrorBoundary>
    );
}

ErrorCatcher.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorCatcher;