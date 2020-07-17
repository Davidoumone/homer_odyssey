import React, { useState } from "react";
import "./SignUp.css";

function SignUp() {
  const [email, updateEmailField] = useState("");
  const [password, updatePassword] = useState("");
  const [name, updateName] = useState("");
  const [lastname, updateLastName] = useState("");

  function handleSubmit() {
    console.log(
      "email : " +
        email +
        ", password : " +
        password +
        ", name : " +
        name +
        ", lastname : " +
        lastname
    );
  }

  return (
      <form onSubmit={() => handleSubmit()} className="formulaire">
        <h1>
          {"email : " +
            email +
            ", password : " +
            password +
            ", name : " +
            name +
            ", lastname : " +
            lastname}
        </h1>
        <input
          type="email"
          name="email"
          placeholder="enter example@gmail.com"
          onChange={(event) => updateEmailField(event.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="enter password"
          onChange={(event) => updatePassword(event.target.value)}
        />
        <input
          type="password"
          name="passwordbis"
          placeholder=" enter password again"
        />
        <input
          type="text"
          name="name"
          placeholder="enter your name"
          onChange={(event) => updateName(event.target.value)}
        />
        <input
          type="text"
          name="lastname"
          placeholder="enter your last name"
          onChange={(event) => updateLastName(event.target.value)}
        />
        <input type="submit" value="Soumettre" />
      </form>
    
  );
}

export default SignUp;
