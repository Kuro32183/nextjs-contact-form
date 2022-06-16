import { BsFacebook } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SocialIcons() {
  return (
    <>
      <div className="flex gap-5 pt-[1rem]">
        <li className="list-none rounded-[2rem] p-[1rem] shadow-[4px_4px_5px_#cdcbcb,-4px_-4px_5px_#ffffff] hover:shadow-[inset_3px_3px_5px_#dad9d9,inset_-3px_-3px_5px_#efeeee]">
          <a href="">
            <motion.div
              whileHover={{
                scale: 0.9,
              }}
              transition={{ duration: 0.3 }}
            >
              <BsFacebook className="text-[1.8rem]" />
            </motion.div>
          </a>
        </li>
        <li className="list-none rounded-[2rem] p-[1rem] shadow-[4px_4px_5px_#cdcbcb,-4px_-4px_5px_#ffffff] hover:shadow-[inset_3px_3px_5px_#dad9d9,inset_-3px_-3px_5px_#efeeee] ">
          <a href="">
            <motion.div
              whileHover={{
                scale: 0.9,
              }}
              transition={{ duration: 0.3 }}
            >
              <FaInstagram className="text-[1.8rem]" />
            </motion.div>
          </a>
        </li>
        <li className="list-none rounded-[2rem] p-[1rem] shadow-[4px_4px_5px_#cdcbcb,-4px_-4px_5px_#ffffff] hover:shadow-[inset_3px_3px_5px_#dad9d9,inset_-3px_-3px_5px_#efeeee]">
          <a href="">
            <motion.div
              whileHover={{
                scale: 0.9,
              }}
              transition={{ duration: 0.3 }}
            >
              <FiMail className="text-[1.8rem]" />
            </motion.div>
          </a>
        </li>
      </div>
    </>
  );
}
