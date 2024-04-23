import { Title } from "../title";
import { SkillType } from "@/utils/interfaces/Skill";
import Image from "next/image";
import { motion } from "framer-motion";

export const Skills = (props: SkillType) => {
  return (
    <div>
      <Title>Skills</Title>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-5 md:gap-x-10 gap-y-5">
        {props.data.map((it, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2, cursor: "pointer" }}
          >
            <motion.div
              key={index}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 * index }}
              viewport={{ once: true }}
            >
              <Image src={it} width={70} height={70} alt="icon" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
