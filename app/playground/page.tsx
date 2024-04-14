"use client"
import React from "react"
import Image from "next/image"

import {
  motion,
  useInView,
  useScroll,
  useMotionValueEvent,
} from "framer-motion"
import { cn } from "@/lib/utils"

export const StickyScrollStuck = ({
  classNameNameName,
  children,
  top,
  ...props
}) => {
  return (
    <motion.div
      {...props}
      classNameNameName={cn(
        "flex sticky  h-[200vh] overflow-hidden top-0",
        classNameNameName
      )}
      style={{
        top,
      }}
    >
      {children}
    </motion.div>
  )
}
StickyScrollStuck.displayName = "StickyScrollStuck"

// export default function StickyScrollRevealDemo() {
//   return (
//     <>
//       <style>
//         {`

// #cover_container {

// #cover_sticky{
// position:sticky;
// top:0;
// width:50%;
// margin-left:50%;
// }

// #cover_text{
// /*should be the same as the image height*/
// margin-top:-100px;
// width:50%;
// height:fit-content;
// }

//       `}
//       </style>
//       <div style={{ height: "1600px", background: "red" }}></div>
//       <div
//         id="cover_container"
//         className="bg-blue-800 relative h-[400px] pb-[100px] grid grid-cols-2"
//       >
//         <div id="cover_sticky" className="sticky top-0 width-1/2 ml-1/2">
//           <div id="sticky_figure" className="flex relative">
//             <Image
//               className="object-cover rounded-lg w-40 h-40 mb-[100px]"
//               src="/images/photo-1499951360447-b19be8fe80f5.jpeg"
//               width={500}
//               height={500}
//               alt=""
//             />
//           </div>
//         </div>

//         <div id="cover_text" className=" w-1/2 h-fit">
//           <h4 className="mb-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </h4>
//           <h4 className="mb-6">
//             Turpis cursus in hac habitasse platea dictumst quisque sagittis.
//             Adipiscing elit pellentesque habitant morbi. Porta non pulvinar
//             neque laoreet suspendisse interdum consectetur libero. Congue eu
//             consequat ac felis donec et odio pellentesque diam. Ullamcorper
//             dignissim cras tincidunt lobortis feugiat vivamus at augue eget.
//             Pretium vulputate sapien nec sagittis aliquam malesuada bibendum
//             arcu. Nibh nisl condimentum id venenatis a. Convallis tellus id
//             interdum velit laoreet id. Sit amet aliquam id diam maecenas
//             ultricies mi eget. Phasellus vestibulum lorem sed risus ultricies
//             tristique nulla aliquet enim. Suspendisse interdum consectetur
//             libero id faucibus. Ut aliquam purus sit amet luctus venenatis.
//           </h4>
//           <h4 className="mb-6">
//             Turpis cursus in hac habitasse platea dictumst quisque sagittis.
//             Adipiscing elit pellentesque habitant morbi. Porta non pulvinar
//             neque laoreet suspendisse interdum consectetur libero. Congue eu
//             consequat ac felis donec et odio pellentesque diam. Ullamcorper
//             dignissim cras tincidunt lobortis feugiat vivamus at augue eget.
//             Pretium vulputate sapien nec sagittis aliquam malesuada bibendum
//             arcu. Nibh nisl condimentum id venenatis a. Convallis tellus id
//             interdum velit laoreet id. Sit amet aliquam id diam maecenas
//             ultricies mi eget. Phasellus vestibulum lorem sed risus ultricies
//             tristique nulla aliquet enim. Suspendisse interdum consectetur
//             libero id faucibus. Ut aliquam purus sit amet luctus venenatis.
//           </h4>
//         </div>
//       </div>

//       <div style={{ height: "1600px", background: "red" }}></div>
//     </>
//   )
// }

export default function PlayGround() {
  return (
    <>
      <div className="grid max-w-[1000px] grid-cols-2 gap-4 m-auto h-[600px] overflow-hidden">
        <aside className="text-foreground">
          <h2>Sidebar</h2>
          <nav>
            <ul>
              <li className="h-10 pb-2">
                <a href="#">Home</a>
              </li>
              <li className="h-10 pb-2">
                <a href="#">About</a>
              </li>
              <li className="h-10 pb-2">
                <a href="#">Works</a>
              </li>
              <li className="h-10 pb-2">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="sticky top-0">Sticky bit</div>
        </aside>
        <main className="bg-gray-700 p-4">
          <h2 className="text-2xl font-bold mb-4">Main</h2>
          <div className="content">
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus consectetur quas sunt magnam eos dolores molestias
              fugit! Consectetur aperiam, neque minus facere, tempora nobis
              doloribus dolores quo sed esse rerum?
            </p>
          </div>
        </main>
      </div>
    </>
  )
}
