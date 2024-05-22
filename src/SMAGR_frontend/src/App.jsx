import { useState } from "react";
import { SMAGR_backend } from "declarations/SMAGR_backend";
import { Principal } from "@dfinity/principal";
function App() {
  const [greeting, setGreeting] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const userId = Principal.fromText("rdmx6-jaaaa-aaaaa-aaadq-cai");
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const pic = event.target.elements.pc.value;
    const user = {
      userId: userId,
      email: email,
      fullName: name,
      profilePic: pic,
    };
    SMAGR_backend.register(user).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">Enter your full name: &nbsp;</label>
          <input id="name" alt="Name" type="text" />
        </p>
        <p>
          <label htmlFor="email">Enter your Email: &nbsp;</label>
          <input id="email" alt="Name" type="text" />
        </p>
        <p>
          <label htmlFor="pc">Enter your picture url: &nbsp;</label>
          <input id="pc" alt="Name" type="text" />
        </p>
        <p>
          <button type="submit">Click Me!</button>
        </p>
      </form>
      <section id="greeting">{greeting}</section>
    </main>
  );
}

export default App;
