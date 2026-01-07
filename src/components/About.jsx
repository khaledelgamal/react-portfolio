import aboutImg from '../assets/about.svg'
import Title from './Title'
const About = () => {
  return (
    <section className="bg-white" id="about">
      <div className="grid md:grid-cols-2 py-16  align-element">
        <img src={aboutImg} alt="About img" className="w-full h-60 m-auto hidden md:block" />
        <div>
          <Title text="Tech Journey" />
          <p className="text-slate-600 py-8">
            I'm Khaled, a Full Stack Developer with over a year of professional experience
            building scalable, high-performance web applications. I hold a Bachelor's
            degree in Computer Science and Artificial Intelligence from Cairo University,
            where I developed a strong foundation in algorithms, data structures,
            databases, and software engineering principles.
            <br />
            <br />
            Professionally, I’ve worked across healthcare, business, and AI-driven SaaS
            products. I currently contribute to a large-scale microfrontend architecture,
            developing and maintaining multiple React portals while focusing heavily on
            performance optimization, state management, and clean, maintainable code. My
            work has directly improved application load times and overall performance
            scores through caching, memoization, and bundle optimization techniques.
            <br />
            <br />
            Previously, I played a key role in delivering full-stack and AI-powered
            platforms from scratch — building authentication systems, real-time features,
            subscription billing, and AI-integrated workflows. I enjoy working across the
            stack using technologies like React, Next.js, Node.js, TypeScript, and modern
            tooling to turn complex ideas into production-ready products.
            <br />
            <br />
            I'm passionate about continuous learning, performance-driven development, and
            building reliable software that delivers real value. Always excited to take
            on challenging projects and grow alongside ambitious teams.
          </p>
        </div>
      </div>
    </section>
  )
}
export default About
