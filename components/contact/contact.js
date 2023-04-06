import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Meta from "../Meta";
import Footer from "../layout/footer";

function ContactMe() {
  const form = useRef();

  const successMsg = () =>
    toast.success("Message sent! 🥳", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const errorMsg = () =>
    toast.error("Error! Try again later... ⛔", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8pbkc5o",
        "template_sngs0tw",
        e.target,
        "user_3KB9mIe7w6vZiZyS1F2zm"
      )
      .then(
        (result) => {
          console.log(result.text);
          successMsg();
        },
        (error) => {
          console.log(error.text);
          errorMsg();
        }
      );
    e.target.reset();
  }

  return (
    <>
      <Meta title="Contact" />
      <section className="container mx-auto px-6 pt-15 text-center grid h-screen place-items-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="container px-5 py-24 mx-auto"
        >
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="textColorChange flex flex-col text-center w-full mb-12">
            <h1 className="text-3xl font-bold dark:text-white md:text-4xl">
              Contact Me
            </h1>
            <p className="mt-6 leading-relaxed text-lg">
              Currently open for freelance work!😎
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-zinc-600 tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-600 focus:bg-white focus:ring-2 focus:ring-pink-300 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-zinc-600 tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-600 focus:bg-white focus:ring-2 focus:ring-pink-300 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-zinc-600 tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-600 focus:bg-white focus:ring-2 focus:ring-pink-300 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-pink-600 border-0 py-2 px-8 focus:outline-none hover:bg-pink-800 rounded text-lg tracking-wider"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
        <Footer />
      </section>
    </>
  );
}

export default ContactMe;
