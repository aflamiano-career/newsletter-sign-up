import { useForm } from "react-hook-form";
import Button from "./Button";

function Form({ setEmail, onSubscribe }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setEmail(data.email);
    onSubscribe();
  }

  return (
    <div className="self-stretch sm:self-auto bg-white sm:p-10 lg:grid lg:grid-cols-2 sm:rounded-4xl">
      <picture className="lg:pl-10 lg:order-2">
        <source
          media="(min-width: 64rem)"
          srcSet="images/illustration-sign-up-desktop.svg"
        />
        <source
          media="(min-width: 40rem)"
          srcSet="images/illustration-sign-up-tablet.svg"
        />
        <img
          src="images/illustration-sign-up-mobile.svg"
          alt="Red illustration image"
          className="w-full object-fill sm:object-contain"
        />
      </picture>
      <article className="px-6 py-10 lg:order-1">
        <h1 className="font-bold text-[2.5rem] sm:text-6xl leading-[1]">
          Stay updated!
        </h1>
        <p className="py-6">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="pb-10 sm:pb-6">
          <li className="flex items-start gap-4">
            <span className="flex h-[1lh] items-center">
              <svg className="w-5 h-[1lh]" viewBox="0 0 21 21">
                <g fill="none">
                  <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                  <path
                    stroke="#FFF"
                    strokeWidth="2"
                    d="M6 11.381 8.735 14 15 8"
                  />
                </g>
              </svg>
            </span>
            Product discovery and building what matters
          </li>
          <li className="flex items-start gap-4">
            <span className="flex h-[1lh] items-center">
              <svg className="w-5 h-[1lh]" viewBox="0 0 21 21">
                <g fill="none">
                  <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                  <path
                    stroke="#FFF"
                    strokeWidth="2"
                    d="M6 11.381 8.735 14 15 8"
                  />
                </g>
              </svg>
            </span>
            Measuring to ensure updates are a success
          </li>
          <li className="flex items-start gap-4">
            <span className="flex h-[1lh] items-center">
              <svg className="w-5 h-[1lh]" viewBox="0 0 21 21">
                <g fill="none">
                  <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                  <path
                    stroke="#FFF"
                    strokeWidth="2"
                    d="M6 11.381 8.735 14 15 8"
                  />
                </g>
              </svg>
            </span>
            And much more!
          </li>
        </ul>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="flex flex-col">
            <div className="flex justify-between font-bold text-xs mb-2">
              <label htmlFor="email">Email address</label>
              {errors.email && (
                <p className="text-red">{errors.email.message}</p>
              )}
            </div>
            <input
              className={`px-6 py-4 rounded-lg border-[1px] mb-6  ${
                errors.email
                  ? "border-red bg-red-100 focus:bg-red-100 focus-visible:bg-red-100 focus-visible:outline-red"
                  : "border-grey"
              }`}
              type="email"
              id="email"
              placeholder="email@company.com"
              {...register("email", {
                required: "The field is empty",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Valid email required",
                },
              })}
            />
            <Button>Subscribe to monthly newsletter</Button>
          </div>
        </form>
      </article>
    </div>
  );
}

export default Form;
