import classes from "./newsletter-registration.module.css";

export interface NewsLetterRegistrationProps {}

export default function NewsLetterRegistration({}: NewsLetterRegistrationProps) {
  function registrationHandler(e: React.FormEvent) {
    e.preventDefault();

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}
