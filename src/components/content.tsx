import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  BuildingOffice2Icon,
  ChartBarIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { Cards } from "./shared/cards";
import { EmailForm } from "./emailForm";

interface IService {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const Content = () => {
  const [showEmail, setShowEmail] = useState<boolean>(false);
  const cardRef = useRef(null);
  const cardVisible = useInView(cardRef, { once: true });
  const cardControl = useAnimation();
  const defaultVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 100, y: 0 },
  };
  const services: IService[] = [
    {
      icon: <BuildingOffice2Icon className="h-10 w-10 text-primary" />,
      title: "Property Management",
      description: `Maximizing your property's potential, one detail at a time.`,
    },
    {
      icon: <ChartBarIcon className="h-10 w-10 text-primary" />,
      title: "Bookkeeping",
      description: `Unleash the power of your numbers.`,
    },
    {
      icon: <RocketLaunchIcon className="h-10 w-10 text-primary" />,
      title: "Graphic Design",
      description: `We don't just design, we solve problems with creativity.`,
    },
  ];
  useEffect(() => {
    if (cardVisible) {
      cardControl.start("visible");
    } else {
      cardControl.start("hidden");
    }
  }, [cardVisible]);
  return (
    <>
      <AnimatePresence>
        {showEmail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <EmailForm toggleModal={setShowEmail} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex h-full w-full flex-col items-center justify-center p-10 mb-10 gap-10">
        <motion.div
          initial="hidden"
          variants={defaultVariants}
          animate="visible"
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
        >
          <span className="w-full text-balance text-center text-5xl font-bold text-secondary">
            We'll handle the tasks, you focus on what matters.
          </span>
        </motion.div>
      </div>
      {/* Cards */}
      <div ref={cardRef}>
        <motion.div
          variants={defaultVariants}
          initial="hidden"
          animate={cardControl}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="my-10 flex w-full items-center justify-center text-balance px-5 text-center">
              <span className="text-5xl font-bold text-secondary">
                Choose from a wide variety of{" "}
                <span className="text-primary">VA that suit your needs.</span>
              </span>
            </div>
            <div className="mb-10 flex h-auto w-full flex-col items-center justify-center gap-10 px-5 md:flex-row">
              {services.map((service) => (
                <Cards
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
          <div className="flex h-24 w-full items-center justify-center">
            <button
              onClick={() => setShowEmail(true)}
              className="cursor-pointer h-14 w-40 flex items-center rounded-full justify-center bg-primary/80 hover:bg-primary text-lg font-bold text-white"
            >
              Hire your VA
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};
