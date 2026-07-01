import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050508] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-9xl font-extrabold text-white">
            404
          </h2>
          <h3 className="mt-2 text-3xl font-extrabold text-white">
            Page not found
          </h3>
          <p className="mt-4 text-lg text-slate-400">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>
        <div className="mt-8">
          <Link
            to="/"
            className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <ArrowLeftIcon className="h-5 w-5 text-primary-200 group-hover:text-primary-100" aria-hidden="true" />
            </span>
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
