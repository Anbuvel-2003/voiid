// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const HorizontalImageScroller = () => {
//   const containerRef = useRef(null);
//   const scrollerRef = useRef(null);

//   // Sample images - replace with your own
//   const images = [
//     "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
//     "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
//     "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
//     "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop",
//     "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
//     "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
//     "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
//     "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop",
//     "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80",
//      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
//   ];

//   useEffect(() => {
//     const container = containerRef.current;
//     const scroller = scrollerRef.current;

//     if (!container || !scroller) return;

//     // Calculate total scroll distance
//     const scrollerWidth = scroller.scrollWidth;
//     const containerWidth = container.offsetWidth;
//     const scrollDistance = scrollerWidth - containerWidth;

//     // Create the horizontal scroll animation
//     const scrollTween = gsap.to(scroller, {
//       x: -scrollDistance,
//       ease: "none",
//       scrollTrigger: {
//         trigger: container,
//         start: "top top",
//         end: () => `+=${scrollerWidth}`,
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });

//     // Individual image animations on scroll
//     gsap.utils.toArray(".scroll-image").forEach((img, i) => {
//       gsap.fromTo(
//         img,
//         {
//           scale: 0.8,
//           opacity: 0.6,
//         },
//         {
//           scale: 1,
//           opacity: 1,
//           scrollTrigger: {
//             trigger: img,
//             start: "left right",
//             end: "right left",
//             scrub: 1,
//             containerAnimation: scrollTween,
//           },
//         }
//       );
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="bg-white">
//       {/* Content before scroller */}
//       {/* <section className="min-h-screen bg-gradient-to-b from-purple-900 to-blue-900 flex items-center justify-center">
//         <div className="text-center text-white">
//           <h1 className="text-6xl font-bold mb-6">Horizontal Gallery</h1>
//           <p className="text-xl opacity-80">Scroll down to explore amazing landscapes</p>
//         </div>
//       </section> */}

//       {/* Horizontal scroll container */}
//       <div
//         className="bg-black w-screen relative"
//         style={{
//           maxWidth: "none",
//           margin: 0,
//           marginLeft: "calc(50% - 50vw)",
//           width: "100vw",
//         }}
//       >
//         <section
//           ref={containerRef}
//           className="relative h-screen overflow-hidden bg-black"
//         >
//           <div
//             ref={scrollerRef}
//             className="flex h-full items-center gap-8 pl-8"
//             style={{ width: `${images.length * 420}px` }}
//           >
//             {images.map((src, index) => (
//               <div
//                 key={index}
//                 className="scroll-image flex-shrink-0 relative group cursor-pointer"
//               >
//                 <div className="relative w-96 h-96 rounded-2xl overflow-hidden shadow-2xl">
//                   <img
//                     src={src}
//                     alt={`Landscape ${index + 1}`}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <h3 className="text-2xl font-bold">Image {index + 1}</h3>
//                     <p className="text-sm opacity-80">Beautiful landscape</p>
//                   </div>
//                 </div>
//                 <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>
//             ))}
//           </div>

//           {/* Scroll indicator */}
//           <div className="absolute bottom-8 left-8 text-white/60 text-sm">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-0.5 bg-white/40" />
//               <span>Scroll to explore</span>
//             </div>
//           </div>

//           {/* Progress indicator */}
//           <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
//             <div className="flex flex-col gap-2">
//               {images.map((_, i) => (
//                 <div
//                   key={i}
//                   className="w-1 h-8 bg-white/20 rounded-full overflow-hidden"
//                 >
//                   <div
//                     className="w-full bg-white rounded-full transition-all duration-300"
//                     style={{ height: "0%" }}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* Content after scroller */}
//       {/* <section className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 flex items-center justify-center">
//         <div className="text-center text-white">
//           <h2 className="text-4xl font-bold mb-4">End of Gallery</h2>
//           <p className="text-lg opacity-80">Thanks for scrolling through our collection</p>
//         </div>
//       </section> */}
//     </div>
//   );
// };

// export default HorizontalImageScroller;
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalImageScroller = () => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const progressRefs = useRef([]);

  const images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
  ];

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    if (!container || !scroller) return;

    const scrollerWidth = scroller.scrollWidth;
    const containerWidth = container.offsetWidth;
    const scrollDistance = scrollerWidth - containerWidth;

    // Horizontal scroll animation
    const scrollTween = gsap.to(scroller, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Image animation (pop in on view)
    gsap.utils.toArray(".scroll-image").forEach((img, i) => {
      gsap.fromTo(
        img,
        { scale: 0.8, opacity: 0.6 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: img,
            start: "left center",
            end: "right center",
            scrub: 1,
            containerAnimation: scrollTween,
          },
        }
      );
    });

    // Progress indicator sync
    images.forEach((_, i) => {
      gsap.to(progressRefs.current[i], {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: `.scroll-image:nth-child(${i + 1})`,
          containerAnimation: scrollTween,
          start: "left center",
          end: "right center",
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [images]);

  return (
    <div className="bg-white">
      {/* Horizontal scroll container */}
      <div
        className="bg-black w-screen relative"
        style={{
          maxWidth: "none",
          margin: 0,
          marginLeft: "calc(50% - 50vw)",
          width: "100vw",
        }}
      >
        <section
          ref={containerRef}
          className="relative h-screen overflow-hidden bg-black"
        >
          {/* Images */}
          <div
            ref={scrollerRef}
            className="flex h-full items-center gap-8 pl-8"
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="scroll-image flex-shrink-0 relative group cursor-pointer"
              >
                <div className="relative w-96 h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={src}
                    alt={`Landscape ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold">Image {index + 1}</h3>
                    <p className="text-sm opacity-80">Beautiful landscape</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-white/40" />
              <span>Scroll to explore</span>
            </div>
          </div>

          {/* Progress bar (right side) */}
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
            <div className="flex flex-col gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-8 bg-white/20 rounded-full overflow-hidden"
                >
                  <div
                    ref={(el) => (progressRefs.current[i] = el)}
                    className="w-full bg-white rounded-full"
                    style={{ height: "0%" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HorizontalImageScroller;
