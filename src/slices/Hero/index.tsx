"use client";
import Bounded from "@/app/components/Bounded";
import { richTextComponents } from "@/app/layout";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import * as prismic from "@prismicio/client";
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  // const ref = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["end end", "end start"],
  // });
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  // const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  // const position = useTransform(scrollYProgress, (pos) =>
  //   pos === 1 ? "relative" : "fixed"
  // );
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* <motion.section
        style={{ opacity }}
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        ref={ref}
      >
        <div className="relative min-h-[100vh]">
          <motion.div
            style={{ scale, x: "-50%", position }}
            className="text-center top-1/3 left-1/2"
          > */}
      {prismic.isFilled.richText(slice.primary.text) && (
        <span>
          <PrismicRichText
            components={richTextComponents}
            field={slice.primary.text}
          />
        </span>
      )}
      {/* </motion.div>
        </div>
      </motion.section> */}
    </Bounded>
  );
};

export default Hero;
