import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const Feedback = () => {
  const feedbackRef = useRef(null);
  const feedbackVisible = useInView(feedbackRef, { once: true });
  const defaultVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 100, y: 0 },
  };
  const feedbackControl = useAnimation();
  useEffect(() => {
    if (feedbackVisible) {
      feedbackControl.start("visible");
    } else {
      feedbackControl.start("hidden");
    }
  }, [feedbackVisible]);
  return (
    <motion.div
      initial="hidden"
      variants={defaultVariants}
      animate={feedbackControl}
      transition={{
        duration: 0.5,
      }}
    >
      <div
        className="my-10 flex h-32 w-full items-center justify-center px-5 mt-20"
        ref={feedbackRef}
      >
        <span className="text-5xl font-bold text-secondary text-center">
          More Than Reviews:{" "}
          <span className="text-5xl font-bold text-primary">
            A Conversation That Powers Progress.
          </span>
        </span>
      </div>
      <div className="grid grid-flow-dense grid-cols-1 gap-10 p-10 leading-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            blanditiis consequuntur aperiam. Mollitia optio quae illum officiis?
            Necessitatibus cupiditate distinctio non nisi aspernatur nihil,
            animi, velit ullam voluptatibus error quidem?"
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet
            voluptate doloribus cum reprehenderit quibusdam distinctio sunt
            architecto nisi praesentium laboriosam qui voluptatem nam neque
            magni voluptas eaque, repellendus pariatur.
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor
            quasi ipsa odio voluptatem incidunt culpa distinctio officia
            quisquam obcaecati dolorum ullam nihil, porro reiciendis possimus
            iure recusandae, magnam quod."
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            ducimus nesciunt rem voluptates vero quam voluptas doloremque
            provident obcaecati dolorum, commodi iste excepturi sunt assumenda
            quo. Aut nisi totam quidem?
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            blanditiis consequuntur aperiam. Mollitia optio quae illum officiis?
            Necessitatibus cupiditate distinctio non nisi aspernatur nihil,
            animi, velit ullam voluptatibus error quidem?"
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet
            voluptate doloribus cum reprehenderit quibusdam distinctio sunt
            architecto nisi praesentium laboriosam qui voluptatem nam neque
            magni voluptas eaque, repellendus pariatur.
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor
            quasi ipsa odio voluptatem incidunt culpa distinctio officia
            quisquam obcaecati dolorum ullam nihil, porro reiciendis possimus
            iure recusandae, magnam quod."
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            ducimus nesciunt rem voluptates vero quam voluptas doloremque
            provident obcaecati dolorum, commodi iste excepturi sunt assumenda
            quo. Aut nisi totam quidem?
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            blanditiis consequuntur aperiam. Mollitia optio quae illum officiis?
            Necessitatibus cupiditate distinctio non nisi aspernatur nihil,
            animi, velit ullam voluptatibus error quidem?"
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet
            voluptate doloribus cum reprehenderit quibusdam distinctio sunt
            architecto nisi praesentium laboriosam qui voluptatem nam neque
            magni voluptas eaque, repellendus pariatur.
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
