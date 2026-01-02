import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ITCompanyBanner() {
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const heroCtaRef = useRef(null);
  const shape1Ref = useRef(null);
  const shape2Ref = useRef(null);
  const shape3Ref = useRef(null);
  const heroContentRef = useRef(null);
  const gridPatternRef = useRef(null);
  
  const aboutH2Ref = useRef(null);
  const aboutPRef = useRef([]);
  const codeBlock1Ref = useRef(null);
  const codeBlock2Ref = useRef(null);
  const codeBlock3Ref = useRef(null);
  const statRefs = useRef([]);
  
  const servicesH2Ref = useRef(null);
  const servicesPRef = useRef(null);
  const serviceCardsRef = useRef([]);

  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline();
    
    tl.from(heroTitleRef.current, {
      duration: 1.2,
      y: 100,
      opacity: 0,
      ease: 'power4.out'
    })
    .from(heroSubtitleRef.current, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out'
    }, '-=0.6')
    .from(heroCtaRef.current, {
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: 'power2.out'
    }, '-=0.5');

    // Floating shapes animation
    gsap.to(shape1Ref.current, {
      y: 30,
      x: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to(shape2Ref.current, {
      y: -40,
      x: -30,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to(shape3Ref.current, {
      y: 20,
      x: 30,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // About section scroll animations
    gsap.from(aboutH2Ref.current, {
      scrollTrigger: {
        trigger: aboutH2Ref.current,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1
      },
      x: -100,
      opacity: 0
    });

    aboutPRef.current.forEach((el, index) => {
      if (el) {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1
          },
          x: -80,
          opacity: 0,
          delay: index * 0.2
        });
      }
    });

    // Code blocks animation
    gsap.from(codeBlock1Ref.current, {
      scrollTrigger: {
        trigger: codeBlock1Ref.current,
        start: 'top 80%',
        end: 'top 40%',
        scrub: 1
      },
      x: 100,
      opacity: 0,
      rotation: 5
    });

    gsap.from(codeBlock2Ref.current, {
      scrollTrigger: {
        trigger: codeBlock2Ref.current,
        start: 'top 70%',
        end: 'top 30%',
        scrub: 1
      },
      x: -100,
      opacity: 0,
      rotation: -5
    });

    gsap.from(codeBlock3Ref.current, {
      scrollTrigger: {
        trigger: codeBlock3Ref.current,
        start: 'top 60%',
        end: 'top 20%',
        scrub: 1
      },
      y: 100,
      opacity: 0
    });

    // Counter animation
    statRefs.current.forEach((el) => {
      if (el) {
        const target = parseInt(el.getAttribute('data-target'));
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
          innerHTML: target,
          duration: 2,
          snap: { innerHTML: 1 },
          onUpdate: function() {
            el.innerHTML = Math.ceil(el.innerHTML);
          }
        });
      }
    });

    // Services section animations
    gsap.from(servicesH2Ref.current, {
      scrollTrigger: {
        trigger: servicesH2Ref.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1
    });

    gsap.from(servicesPRef.current, {
      scrollTrigger: {
        trigger: servicesPRef.current,
        start: 'top 75%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2
    });

    // Service cards stagger animation
    gsap.from(serviceCardsRef.current, {
      scrollTrigger: {
        trigger: serviceCardsRef.current[0],
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1
      },
      y: 100,
      opacity: 0,
      stagger: 0.1
    });

    // Parallax effect for hero
    gsap.to(heroContentRef.current, {
      scrollTrigger: {
        trigger: heroContentRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: 200,
      opacity: 0
    });

    gsap.to(gridPatternRef.current, {
      scrollTrigger: {
        trigger: gridPatternRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: -100
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const services = [
    { icon: '💻', title: 'Web Development', desc: 'Build responsive, scalable web applications with modern frameworks and cutting-edge technologies.' },
    { icon: '📱', title: 'Mobile Apps', desc: 'Create stunning native and cross-platform mobile applications for iOS and Android.' },
    { icon: '☁️', title: 'Cloud Solutions', desc: 'Migrate and optimize your infrastructure with secure, scalable cloud services.' },
    { icon: '🤖', title: 'AI & Machine Learning', desc: 'Leverage artificial intelligence to automate processes and gain valuable insights.' },
    { icon: '🔒', title: 'Cybersecurity', desc: 'Protect your business with comprehensive security solutions and threat monitoring.' },
    { icon: '📊', title: 'Data Analytics', desc: 'Transform raw data into actionable insights with advanced analytics solutions.' }
  ];

  return (
    <div className="min-h-screen bg-red-400 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-900">
        <div className="absolute inset-0 opacity-10">
          <div 
            ref={gridPatternRef}
            className="w-full h-full"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>
        
        <div className="absolute inset-0">
          <div ref={shape1Ref} className="absolute w-72 h-72 bg-white/10 rounded-full top-[10%] left-[10%]" />
          <div ref={shape2Ref} className="absolute w-48 h-48 bg-white/10 rounded-full top-[60%] right-[15%]" />
          <div ref={shape3Ref} className="absolute w-36 h-36 bg-white/10 rounded-full bottom-[10%] left-[40%]" />
        </div>
        
        <div ref={heroContentRef} className="text-center z-10 max-w-6xl px-5">
          <h1 ref={heroTitleRef} className="text-7xl font-bold mb-5 opacity-0">
            Transform Your Digital Future
          </h1>
          <p ref={heroSubtitleRef} className="text-2xl mb-10 opacity-0 text-white/90">
            Innovative IT Solutions for Modern Businesses
          </p>
          <a 
            ref={heroCtaRef}
            href="#about" 
            className="inline-block px-10 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg opacity-0 hover:scale-105 transition-transform"
          >
            Discover More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-black py-24 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 ref={aboutH2Ref} className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
              About TechVision
            </h2>
            <p ref={el => aboutPRef.current[0] = el} className="text-lg leading-relaxed text-white/70 mb-5">
              We are a cutting-edge IT company specializing in transforming businesses through innovative technology solutions. With over a decade of experience, we've helped hundreds of companies achieve their digital transformation goals.
            </p>
            <p ref={el => aboutPRef.current[1] = el} className="text-lg leading-relaxed text-white/70 mb-8">
              Our team of expert developers, designers, and consultants work together to deliver solutions that drive real business results.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mt-10">
              {[
                { number: 500, label: 'Projects' },
                { number: 50, label: 'Team Members' },
                { number: 98, label: 'Client Satisfaction' }
              ].map((stat, i) => (
                <div key={i} className="text-center p-5 bg-purple-600/10 rounded-xl border border-purple-600/20">
                  <span 
                    ref={el => statRefs.current[i] = el}
                    data-target={stat.number}
                    className="block text-4xl font-bold text-purple-600 mb-1"
                  >
                    0
                  </span>
                  <span className="text-sm text-white/60">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[500px]">
            <div 
              ref={codeBlock1Ref}
              className="absolute top-0 left-0 w-64 bg-purple-600/10 border border-purple-600/30 rounded-xl p-5 font-mono text-sm text-purple-600"
            >
              <div>const innovation = () ={'{'}</div>
              <div>&nbsp;&nbsp;return success;</div>
              <div>{'}'}</div>
            </div>
            <div 
              ref={codeBlock2Ref}
              className="absolute top-36 right-0 w-72 bg-purple-600/10 border border-purple-600/30 rounded-xl p-5 font-mono text-sm text-purple-600"
            >
              <div>function buildFuture() {'{'}</div>
              <div>&nbsp;&nbsp;technology++;</div>
              <div>&nbsp;&nbsp;creativity++;</div>
              <div>{'}'}</div>
            </div>
            <div 
              ref={codeBlock3Ref}
              className="absolute bottom-0 left-12 w-80 bg-purple-600/10 border border-purple-600/30 rounded-xl p-5 font-mono text-sm text-purple-600"
            >
              <div>class Excellence {'{'}</div>
              <div>&nbsp;&nbsp;deliver() {'{'}</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;return quality;</div>
              <div>&nbsp;&nbsp;{'}'}</div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 ref={servicesH2Ref} className="text-5xl font-bold mb-5 bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p ref={servicesPRef} className="text-xl text-white/60">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <div 
                key={i}
                ref={el => serviceCardsRef.current[i] = el}
                className="relative bg-white/5 border border-white/10 rounded-3xl p-10 hover:-translate-y-3 transition-all duration-300 hover:border-purple-600 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-900 rounded-2xl flex items-center justify-center text-3xl mb-5">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}