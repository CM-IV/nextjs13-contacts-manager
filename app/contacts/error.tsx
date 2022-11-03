'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <article className="message is-danger">
            <div className="message-header">
                <p>Error</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                <strong>There was an error</strong>
                <button className='button' onClick={() => reset()}>Reset error boundary</button>
            </div>
        </article>
    </div>
  );
}