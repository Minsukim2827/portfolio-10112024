// ./Intro.jsx
import { Link } from 'react-router-dom';
import SocialIcon from './_components/socialIcons';
import socialLinks from './_components/socialLinks';
import AnimatedText from './_components/AnimatedText'; // Import the AnimatedText component

export default function Intro() {
  return (
    <div
      className="min-h-[calc(95vh-var(--navbar-height))] text-foreground flex flex-col md:flex-row items-center justify-center p-4 md:p-6 gap-6 md:gap-8"
    >
      {/* Text Content */}
      <div className="md:w-1/2 space-y-5 text-center md:text-left mb-3 md:mb-0">
        <h1 className="text-6xl font-bold text-white">
          Kia ora, I&apos;m <span className="text-red-500">Minsu</span>
        </h1>
        <h2 className="text-4xl font-semibold text-white">
          I&apos;m a <AnimatedText />
        </h2>
        <p className="text-2xl text-white">Final year Software Development Major at AUT</p>
        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-8">
          {socialLinks.map(({ href, Icon, label }) => (
            <SocialIcon key={label} href={href} Icon={Icon} label={label} size="lg" />
          ))}
        </div>
        {/* Resume Link */}
        <Link
          to="./resume.pdf"
          className="inline-block bg-red-800 text-primary-foreground px-8 py-4 rounded-md hover:bg-red-900 transition-colors text-xl"
        >
          View Resume
        </Link>
      </div>
      {/* Image */}
      <div className="md:w-1/2 flex justify-center md:justify-center">
        <img
          src="./avatar.png"
          alt="Minsu"
          className="rounded-full w-96 h-96 object-cover border-4 border-primary"
        />
      </div>
    </div>
  );
}
