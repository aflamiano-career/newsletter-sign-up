import Button from "./Button";

function Success({ email, onSubscribe }) {
  return (
    <div className="bg-white p-6 sm:p-16 self-stretch sm:self-auto flex items-center sm:rounded-4xl">
      <div className="h-[40rem] sm:h-full sm:w-lg flex flex-col">
        <img
          src="images/icon-success.svg"
          alt="White checkmark with rounded orange background"
          className="self-start"
        />
        <h1 className="my-8 font-bold text-[2.5rem] sm:text-6xl">
          Thanks for subscribing!
        </h1>
        <p>
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
        <div className="mt-auto sm:mt-8">
          <Button onClick={onSubscribe}>Dismiss message</Button>
        </div>
      </div>
    </div>
  );
}

export default Success;
