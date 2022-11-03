'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

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
                <div className="field">
                  <button className='button' onClick={() => reset()}>Reset error boundary</button>
                </div>
            </div>
        </article>
    </div>
  );
}