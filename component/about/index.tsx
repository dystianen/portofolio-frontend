import { useState } from "react";
import { Title } from "../title";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { AboutType } from "@/utils/interfaces/About";
import { motion } from "framer-motion";

export const AboutMe = (props: AboutType) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative -mt-8 md:mt-0 md:mb-14">
      <Title>About Me</Title>
      <motion.h3
        className="mb-5 text-lg lg:text-2xl"
        initial={{ x: -10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: true }}
      >
        I&#39;m{" "}
        <span className="font-bold text-darkblue">Dystian En Yusgiantoro</span>{" "}
        and a{" "}
        <span className="font-bold text-darkblue">
          Frontend Developer at Extramarks Education!
        </span>
      </motion.h3>
      <motion.p
        className="text-base text-justify"
        initial={{ x: -10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        viewport={{ once: true }}
      >
        Hi, I&#39;m a frontend developer with more than 4 years experience in
        this industry. I am very passionate and enthusiastic in creating
        attractive and easy-to-use user interfaces. I have experience in several
        frameworks such as React, Next.js, Angular, and Vue.js. I&#39;m also
        very used to using modern technologies like HTML5, CSS3, and JavaScript
        ES6+. I enjoy working in a team and usually engage in collaborative
        projects with other designers and developers. I believe that effective
        collaboration is essential to create a quality product. Apart from that,
        I also frequently participate in local developer communities and attend
        technology events and meetups to broaden my knowledge and network. I
        believe that as a frontend developer, I have a responsibility to create
        great user experiences and maintain clean and structured code. I look
        forward to continuing to learn and grow in my career as a frontend
        developer.
      </motion.p>

      <div className="grid w-full grid-cols-1 mt-8 md:grid-cols-2 gap-x-10 gap-y-5 md:w-4/6">
        {props.data?.map((it, index) => (
          <motion.div
            key={index}
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5 * index + 0.5,
            }}
            viewport={{ once: true }}
          >
            <div className="flex flex-row gap-2 text-base flex-nowrap">
              <p>{it.title} :</p>
              <p className={"text-ellipsis overflow-hidden"}>{it.desc}</p>
            </div>
            <hr />
          </motion.div>
        ))}
      </div>

      <div className="flex flex-row gap-5 mt-8">
        <motion.a
          className={
            "bg-darkblue grid place-items-center text-white rounded-lg px-4 py-2 text-base hover:cursor-pointer"
          }
          href={"/Dystian En Yusgiantoro_Frontend Developer_CV.pdf"}
          download={"Dystian En Yusgiantoro_Frontend Developer_CV.pdf"}
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          Download CV
        </motion.a>
        <motion.a
          className={
            "bg-darkblue grid place-items-center text-white rounded-lg px-4 py-2 text-base hover:cursor-pointer"
          }
          href={"https://wa.me/+6281514365317"}
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          Hire Me
        </motion.a>
      </div>

      {showModal && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-xl mx-auto my-6">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="absolute z-50 right-2 top-2">
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <MdClose />
                  </button>
                </div>
                <div className="relative flex-auto p-10">
                  <img
                    className="w-full rounded-lg"
                    src={"/assets/thumbnail/comming.avif"}
                    alt={"thumbnail"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-30"></div>
        </>
      )}

      <div className="absolute right-0 invisible md:visible -bottom-20">
        <Image
          src="/assets/particle-blue.png"
          alt="particle"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};
