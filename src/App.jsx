import { useState } from "react";
import Form from "./components/Form";
import Success from "./components/Success";

function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubscribe() {
    setIsSubscribed((subscribe) => !subscribe);
    if (isSubscribed) setEmail("");
  }

  return (
    <main className="font-roboto text-blue800 bg-blue700 min-h-screen flex justify-center items-center">
      {isSubscribed ? (
        <Success email={email} onSubscribe={handleSubscribe} />
      ) : (
        <Form setEmail={setEmail} onSubscribe={handleSubscribe} />
      )}
    </main>
  );
}

export default App;
