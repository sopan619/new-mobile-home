import { motion } from "framer-motion";
import React, { useState } from "react";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="bg-[url(https://images.unsplash.com/photo-1666884471851-0085466e673b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80)] w-full h-[80vh] object-cover bg-blend-screen">
        <div className="overlay w-full h-full bg-black/40 flex flex-col justify-center items-center gap-20">
          <motion.h1
            className="text-5xl text-apna-light font-bold font-labell"
            layout
          >
            Hi, <br />
            I am <br />{" "}
            <b className="text-apna-lime dark:text-[#FBDF07]"> Sopan.</b>
          </motion.h1>
          <div className="layout">
            <motion.div
              layout
              transition={{
                layout: { duration: 0.75, type: "spring" },
              }}
              className="box bg-apna-lime/90 dark:bg-[#FBDF07]/90 px-6 py-3 text-apna-dark font-semibold max-w-[80%] mx-auto"
              onClick={() => setShow(!show)}
              style={{ borderRadius: "8px" }}
            >
              <motion.h1
                className="w-fit pr-4 mx-auto text-lg animate-pulse"
                layout={{ layout: "position" }}
              >
                Who?
              </motion.h1>
              {show && (
                <motion.p
                  className=" mx-auto break-words text-sm font-light"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsum illo aliquid reiciendis impedit, enim inventore aperiam
                  tempore ipsa laudantium ducimus quasi debitis quam explicabo
                  voluptates dolor error eius optio veritatis reprehenderit unde
                  voluptas. Nisi, at!
                </motion.p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
