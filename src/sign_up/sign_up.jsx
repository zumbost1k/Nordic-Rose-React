import React from "react";
import "./sign_up.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section class="sign_up">
        <h2 class="sign_up_caption">Sign up for the newsletter</h2>
        <p class="sign_up_text">
          If you want relevant updates occasionally, sign up for the private newsletter. Your
          email is never shared.
        </p>
        <form class="mail">
          <input class="input_mail" placeholder="Enter your email..." type="text" />
          <button class="mail_text">sign up</button>
        </form>
      </section>
    );
  }
}
export default SignUp;
