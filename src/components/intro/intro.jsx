import { useState } from 'react';
import SocialIcon from './_components/socialIcons';
import socialLinks from './_components/socialLinks';
import AnimatedText from './_components/AnimatedText';
import Modal from './_components/Modal'; 

export default function Intro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className="min-h-[calc(95vh-var(--navbar-height))] text-foreground flex flex-col md:flex-row items-center justify-center p-4 md:p-6 gap-6 md:gap-8"
    >
      {/* Text Content */}
      <div className="md:w-1/2 space-y-5 text-center md:text-left mb-3 md:mb-0">
        <h1 className="text-2xl md:text-6xl font-bold text-white">
          Kia ora, I&apos;m <span className="text-red-500">Minsu</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-white">
          I&apos;m a <AnimatedText />
        </h2>
        <p className="text-2xl text-white">Final year Software Development Major at AUT</p>
        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-8">
          {socialLinks.map(({ href, Icon, label }) => (
            <SocialIcon key={label} href={href} Icon={Icon} label={label} size="lg" />
          ))}
        </div>
        {/* Resume Button */}
        <button
          onClick={openModal}
          className="resume-button bg-zinc-900 inline-block text-primary-foreground px-8 py-4 rounded-md transition-colors text-xl"
        >
          View Resume
        </button>
      </div>
      {/* Image */}
      <div className="md:w-1/2 flex justify-center md:justify-center">
        <img
          src="./avatar.png"
          alt="Minsu"
          className="rounded-full w-96 h-96 object-cover avatar-image"
        />
      </div>

      {/* Modal for Resume */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="h-[90vh]">
          <iframe
            src="/resume.pdf"
            title="Resume"
            className="w-full h-full"
          ></iframe>
        </div>
      </Modal>
    </div>
  );
}