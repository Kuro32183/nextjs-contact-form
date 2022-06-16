import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Router from "next/router";
import { motion } from "framer-motion";
import SocialIcons from "@/components/SocialIcons";

const Home: NextPage = () => {
  const [contact, setContact] = useState({
    name: "お問い合わせより",
    email: "",
    subject: "お問い合わせ",
    honeypot: "",
    message: "",
    replyTo: "takumi32183@gmail.com",
    accessKey: process.env.NEXT_PUBLIC_KEY,
  });

  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (json.success) {
        //成功したらsuccessページに飛ぶ
        Router.push("../success");
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
      }
    } catch (e) {
      console.log("An error occurred", e);
      setResponse({
        type: "error",
        message: "An error occurred while submitting the form",
      });
    }
  };
  return (
    <>
      <Head>
        <title>NextJs + Typescript + Static Form</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        id="/"
        className="h-[90vh] md:h-[90vh] my-[40px] mx-[20px] md:mx-[60px] lg:mx-[180px]  rounded-[14px] shadow-[4px_14px_29px_#cecece,-14px_-14px_29px_#ffffff]"
      >
        <div className="relative py-[20px] sm:mb-[80px] ">
          <p>{response.message}</p>
          <h1 className="text-center text-[2rem] tracking-[4px] font-bold">
            Contact
          </h1>
          <div className="absolute md:flex md:justify-center md:items-center ">
            <form
              action="https://api.staticforms.xyz/submit"
              method="post"
              onSubmit={handleSubmit}
              className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[400px] p-[30px] md:pt-[50px]"
            >
              <div className="field pb-[1.3rem]">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  required
                  className="p-[0.8rem] rounded-[16px] shadow-[inset_4px_4px_5px_#dad9d9,inset_-4px_-4px_5px_#efeeee] "
                />
              </div>
              <div className="pb-[1.3rem]">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  required
                  className="input p-[0.8rem] rounded-[16px] shadow-[inset_4px_4px_5px_#dad9d9,inset_-2px_-2px_5px_#efeeee]"
                />
              </div>
              <div style={{ display: "none" }}>
                <label className="label text-left pb-[0.5rem]">Title</label>
                <div className="control">
                  <input
                    type="text"
                    name="honeypot"
                    style={{ display: "none" }}
                    onChange={handleChange}
                  />
                  <input type="hidden" name="subject" onChange={handleChange} />
                </div>
              </div>
              <div className="pb-[1.3rem]">
                <textarea
                  placeholder="Message"
                  name="message"
                  onChange={handleChange}
                  rows={4}
                  required
                  className="input p-[1rem] rounded-[16px] shadow-[inset_4px_4px_5px_#dad9d9,inset_-2px_-2px_5px_#efeeee] resize-none"
                />
              </div>
              <motion.button
                whileHover="hover"
                variants={{ hover: { scale: 0.95 } }}
                className="button bg-blue-300 p-[0.6rem] rounded-[0.8rem] mt-[1rem] pl-[1.5rem] pr-[1.5rem] shadow-[4px_4px_5px_#cdcbcb,-4px_-4px_5px_#ffffff] tracking-[2px]"
                type="submit"
              >
                Send
              </motion.button>
            </form>
            <div className="md:text-[0.8rem] md:pt-[4rem] pb-[2rem] pl-[30px] ">
              <div className="hidden md:block leading-6">
                <p className="pb-[1rem] text-[1.1rem] font-[400] tracking-[2px]">
                  株式会社〇〇
                </p>
                <p>
                  〒123-1234 東京都〇〇区〇〇
                  <br />
                  〇〇ビル12-1234
                </p>
                <p>〇〇駐車場をご利用ください。</p>
                <p>駐車料金600円</p>
                <p>takumi32183@gmail.com</p>
                <p>電話番号 090-1234-1234</p>
                <p>9:00~17:00 (平日のみ営業)</p>
              </div>

              <div>
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
