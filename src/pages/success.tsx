import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Success = () => {
  return (
    <div id="succsess">
      <div className="h-[90vh] md:h-[90vh] my-[40px] mx-[20px] py-[30px] md:mx-[60px] lg:mx-[180px]  rounded-[14px] shadow-[4px_14px_29px_#cecece,-14px_-14px_29px_#ffffff]">
        <div className="relative py-[20px] sm:mb-[80px] resize-vertical">
          <h2 className="text-center text-[2rem] tracking-[4px] font-[500] pb-[50px]">
            Message sent.
          </h2>
          <p className="absolute left-[10%] md:left-[20%] top-[80%]">
            ご記入いただいた情報は無事送信されました。
            <br />
            後日担当のものが連絡いたします。
            <br />
            しばらくお待ちください。
          </p>
          <Link href="/">
            <motion.button
              whileHover="hover"
              variants={{ hover: { scale: 0.95 } }}
              className="button absolute left-[10%] md:left-[20%] top-[140%] tracking-[2px] bg-blue-300 my-[1rem] p-[0.6rem] rounded-[0.8rem] shadow-[4px_4px_5px_#cdcbcb,-4px_-4px_5px_#ffffff]"
            >
              {" "}
              <a>トップページへ戻る </a>
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
