import { useState } from "react";
import { SMAGR_backend } from "declarations/SMAGR_backend";

function App() {
  const [greeting, setGreeting] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const button = e.target.querySelector("button");
    const name = document.getElementById("name").value.toString();
    const email = document.getElementById("email").value.toString();
    const pic = document.getElementById("pc").value.toString();

    const userId = Principal.anonymous();

    const user = {
      userId: userId.toString(),
      email: email,
      fullName: name,
      profilePic: pic,
    };

    button.setAttribute("disabled", true);

    const registerResult = await philemo_app_backend.register(user);

    button.removeAttribute("disabled");

    document.getElementById("greeting").innerText = registerResult;

    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#">
        <h1>Register</h1>
        <div style="display: block">
          <p>
            <label for="name">Enter your Full name: &nbsp;</label>
            <input id="name" alt="Name" type="text" />
          </p>
          <p>
            <label for="email">Enter Email: &nbsp;</label>
            <input id="email" alt="Name" type="text" />
          </p>
          <p>
            <label for="pc">Picture Url: &nbsp;</label>
            <input id="pc" alt="Name" type="text" />
          </p>
          <p>
            <button type="submit">Save</button>
          </p>
        </div>
      </form>
      <section id="greeting">{greeting}</section>
    </main>
  );
}

export default App;
