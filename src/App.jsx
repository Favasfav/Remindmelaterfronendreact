import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [formdata, setFormdata] = useState({
    message: "",
    date: "",
    type_of_remainder:"email"
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormdata({
      ...formdata,

      [name]: value,
    });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
    await axios
      .post("http://127.0.0.1:8000/reminder/", {
        type_of_remainder: formdata.type_of_remainder,
        date_time: formdata.date,
        message: formdata.message,
        user: 1,
      })
      .then(() => {
        alert("sent remainder sucessfully")
        console.log("hhhh");
      })
      .catch(()=>{        alert("error")
    }
      );

    setFormdata({
      message: "",
      date: "",
    });
  };
  return (
    <>
      <div class="min-h-screen flex flex-col">
        <header class="...">
          <header class="text-slate-700 container relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
            <a
              href="#"
              class="flex items-center whitespace-nowrap text-2xl font-black"
            >
              <span class="mr-2 w-8">
                <img src="/images/JOJj79gp_Djhwdp_ZOKLL.png" alt="" />
              </span>
              spline
            </a>
            <input type="checkbox" class="peer hidden" id="navbar-open" />
            <label
              class="absolute top-5 right-5 cursor-pointer lg:hidden"
              for="navbar-open"
            >
              <svg
                class="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <nav
              aria-label="Header Navigation"
              class="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
            >
              <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
                <li class="lg:mr-12">
                  <a
                    class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                    href="#"
                  >
                    Components
                  </a>
                </li>
                <li class="lg:mr-12">
                  <a
                    class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li class="lg:mr-12">
                  <a
                    class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
                <li class="lg:mr-12">
                  <a
                    class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                    href="#"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
              <hr class="mt-4 w-full lg:hidden" />
              <div class="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
                <a
                  href="#"
                  title=""
                  class="whitespace-nowrap rounded font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-opacity-50"
                >
                  {" "}
                  Log in{" "}
                </a>
                <a
                  href="#"
                  title=""
                  class="whitespace-nowrap rounded-xl bg-blue-700 px-5 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600"
                >
                  Get free trial
                </a>
              </div>
            </nav>
          </header>
        </header>
        <main class="flex-1 ...">
          <div class="bg-gradient-to-r from-blue-600 to-indigo-500">
            <div class="mx-auto h-full px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-16 xl:py-28">
              <div class="flex flex-col items-center justify-between">
                <div class="">
                  <div class="max-w-3xl">
                    <h1 class="mb-6 text-center text-5xl font-light tracking-tight text-white sm:text-5xl lg:text-7xl">
                      Easily improve{" "}
                      <span class="my-1 inline-block font-serif font-bold text-white">
                        {" "}
                        customer relations Through Remainder{" "}
                      </span>
                    </h1>
                    <p class="text-center text-base text-gray-100">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque it.
                    </p>
                  </div>
                  <form
                    onSubmit={handlesubmit}
                    class="mx-auto mt-12 mb-2 max-w-xl sm:rounded-xl sm:border sm:border-gray-100 sm:bg-white sm:p-2 sm:shadow"
                  >
                    
                    <div class="flex  flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                   
                      <div class="relative text-gray-500 sm:w-5/12">
                        <label
                          for="date"
                          class="sr-only border-gray-300"
                        ></label>
                       <span className="font-medium mb-1 text-gray-500">enter message</span>
                        <input
                          type="text"
                          value={formdata.message}
                          onChange={handlechange}
                          name="message"
                          id="text"
                          placeholder="Enter your message"
                          class="w-full cursor-text rounded-xl border-2 py-4 pr-4 pl-10 text-base outline-none transition-all duration-200 ease-in-out sm:border-0 focus:border-transparent focus:ring"
                          required=""
                        />
                      </div>
                      <div class="relative text-gray-500 sm:w-5/12">
                        <label
                          for="date"
                          class="sr-only border-gray-300"
                        ></label>
                        <span className="font-medium mb-1 text-gray-500">Date of Remainder</span>
                        <input
                          type="datetime-local"
                          name="date"
                          onChange={handlechange}
                          value={formdata.date}
                          id="date"
                          placeholder="Enter The date to Remaind"
                          class=" cursor-text rounded-xl border-2 py-4  text-base outline-none transition-all duration-200 ease-in-out sm:border-0 focus:border-transparent focus:ring"
                          required=""
                        />
                      </div>
                      <div class="relative text-gray-500 sm:w-1/12">
                        
            <span className="font-medium mb-1 text-gray-500">Email</span>

            <input
              type="radio"
              name="type_of_remainder"
              value="email"
              id="email"
              checked={formdata.type_of_remainder === "email"}
              onChange={handlechange}
              required=""
            />
          </div>
          <div class="relative text-gray-500 sm:w-1/12">
            <span className="font-medium mb-1 text-gray-500">SMS</span>
            <input
              type="radio"
              name="type_of_remainder"
              value="sms"
              id="sms"
              checked={formdata.type_of_remainder === "sms"}
              onChange={handlechange}
              required=""
            />
          </div>
                      <button
                        type="submit"
                        class="group flex items-center justify-center rounded-xl bg-blue-700 px-6 py-4 text-white transition"
                      >
                        <span class="group flex w-full items-center justify-center rounded text-center font-medium">
                          Send
                        </span>
                        <svg
                          class="shrink-0 group-hover:ml-8 ml-4 h-4 w-4 transition-all"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </form>

                  <div class="divide-gray-300/30 mt-12 flex flex-col items-center justify-center space-y-3 text-sm text-gray-700 sm:flex-row sm:items-start sm:space-y-0 sm:divide-x">
                    <div class="flex max-w-xs space-x-2 px-4">
                      <span class="shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-white p-2.5 text-purple-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                          ></path>
                        </svg>
                      </span>
                      <p class="text-gray-100">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div class="flex max-w-xs space-x-2 px-4">
                      <span class="shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-white p-2.5 text-rose-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                          ></path>
                        </svg>
                      </span>
                      <p class="text-gray-100">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="relative mt-20 hidden lg:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 17l-4 4m0 0l-4-4m4 4V3"
                    ></path>
                  </svg>
                  <div
                    class="w-fit mx-auto flex overflow-hidden rounded-3xl bg-orange-400"
                    role="image-container"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer class="...">Footer</footer>
      </div>
    </>
  );
}

export default App;
