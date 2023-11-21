import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';

import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {
  const fetcher = useFetcher() //gives you an object wih useful props and methods; fetcher.Form will not trigger a route transition on submitting
  const { data, state } = fetcher //state: idle/loading/submitting

  useEffect(() => {
    if(state === 'idle' && data && data.message){
      window.alert(data.message)
    }
  }, [data, state])

  return (
    <fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;