
const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
  xl: 'w-14 h-14',
};

const SocialIcon = ({ href, Icon, label, size = 'md' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-red-500 border border-red-500 rounded-full p-3 transition-colors hover:bg-red-600"
  >
    <Icon className={`${sizeClasses[size]} text-white`} />
  </a>
);

export default SocialIcon;
