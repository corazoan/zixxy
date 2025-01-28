import { motion } from "motion/react";

interface componentProps {
  active?: boolean;
  title: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}
export function Button({
  className,
  icon,
  onClick,
  title,
  active,
}: componentProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      onClick={onClick}
      className={`flex ${className} ${
        active
          ? " text-purple-400 bg-gradient-to-r from-[#4C3B67] to-[#3a2d47] "
          : "text-gray-400"
      } font-bold text-lg my-1  w-[200px] pl-4 cursor-pointer py-2   rounded-2xl gap-x-2 items-center`}
    >
      {icon}
      <p>{title}</p>
    </motion.button>
  );
}
