"use client";
import SectionTitleHeaderTag from "@/components/ui/SectionTitleHeaderTag";
import { ibm } from "@/constant/fontFamily";
import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";
interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  return (
    <div id="contact" className="w-full">
      <div className="container mx-auto px-5 py-10">
        <SectionTitleHeaderTag
          title="Contact"
          content="I’m currently available for freelance work"
        />
        <div className="flex justify-center items-center mt-10">
          <div className="px-10 py-3 border-2 border-brand1 bg-bg1 hover:scale-105 hover:bg-brand1 hover:text-bg2 text-brand2 rounded-tl-[30px] rounded-br-[30px]">
            <p
              className={`text-xl md:text-2xl lg:text-3xl font-thin ${ibm.className}`}
            >
              Send Me A Message
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-8 mt-10 xl:mt-20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-brand1 opacity-80"
              >
                Your Name *
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: true })}
                className="mt-1 block w-full py-2 bg-transparent text-white border-b border-b-brand1
               shadow-sm focus:outline-none sm:text-sm"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">Name is required</span>
              )}
            </div>

            <div className="w-full md:w-1/2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-brand1 opacity-80"
              >
                Email *
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className="mt-1 block w-full py-2 bg-transparent text-white border-b border-b-brand1
               shadow-sm focus:outline-none sm:text-sm"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  Valid email is required
                </span>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-brand1 opacity-80"
            >
              Message *
            </label>
            <textarea
              id="message"
              placeholder="Enter your message..."
              {...register("message", { required: true })}
              className="mt-1 block w-full py-2 bg-transparent text-white border-b border-b-brand1
               shadow-sm focus:outline-none sm:text-sm"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">Message is required</span>
            )}
          </div>

          <button
            type="submit"
            className={`border border-brand1 py-4 px-10 rounded-lg text-bg1 bg-brand1 hover:bg-[#86d4c9] ${ibm.className}`}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
