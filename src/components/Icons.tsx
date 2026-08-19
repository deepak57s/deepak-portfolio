import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const Github: React.FC<IconProps> = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-github ${className}`}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Linkedin: React.FC<IconProps> = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-linkedin ${className}`}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Codepen: React.FC<IconProps> = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-codepen ${className}`}
    {...props}
  >
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
    <line x1="12" x2="12" y1="22" y2="15.5" />
    <polyline points="22 8.5 12 15.5 2 8.5" />
    <polyline points="2 15.5 12 8.5 22 15.5" />
    <line x1="12" x2="12" y1="2" y2="8.5" />
  </svg>
);

export const KotlinIcon: React.FC<IconProps> = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M24 24H0V0h24L12 12Z" />
  </svg>
);

export const JavaIcon: React.FC<IconProps> = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

export const PythonIcon: React.FC<IconProps> = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M11.9 2c-2.3 0-4.4.2-5.9.5-2.3.5-2.7 1.6-2.7 3.6v2.1h6.1v.8H3.3c-2 0-3.1 1.1-3.3 2.9-.2 2-.2 3.5 0 5.6.2 1.8 1.3 2.8 3.3 2.8h1.8v-2.4c0-2.4 2-4.5 4.3-4.5h6.1V11c0-2-.5-3.1-2.8-3.6-1.5-.3-3.6-.5-5.9-.5zm-3.5 1.8c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM12.1 22c2.3 0 4.4-.2 5.9-.5 2.3-.5 2.7-1.6 2.7-3.6v-2.1h-6.1v-.8h6.1c2 0 3.1-1.1 3.3-2.9.2-2 .2-3.5 0-5.6-.2-1.8-1.3-2.8-3.3-2.8h-1.8v2.4c0 2.4-2 4.5-4.3 4.5H8.5V13c0 2 .5 3.1 2.8 3.6 1.5.3 3.6.5 5.9.5zm3.5-1.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" />
  </svg>
);

export const AndroidIcon: React.FC<IconProps> = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M17.5 10c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1s-1-.4-1-1v-6c0-.6.4-1 1-1zm-11 0c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1s-1-.4-1-1v-6c0-.6.4-1 1-1zm2.3-3.7l-1.1-1.9c-.2-.3-.1-.7.2-.9.3-.2.7-.1.9.2l1.2 2c1-.4 2-.6 3.1-.6s2.1.2 3.1.6l1.2-2c.2-.3.6-.4.9-.2.3.2.4.6.2.9l-1.1 1.9c2 1.3 3.3 3.4 3.5 5.7H5.3c.2-2.3 1.5-4.4 3.5-5.7zM9.5 9c0-.4-.3-.8-.8-.8s-.8.3-.8.8.3.8.8.8.8-.4.8-.8zm5.8 0c0-.4-.3-.8-.8-.8s-.8.3-.8.8.3.8.8.8.8-.4.8-.8zm-7.1 5h11.6v4.5c0 1.4-1.1 2.5-2.5 2.5h-6.6c-1.4 0-2.5-1.1-2.5-2.5V14zm1.6 7h1.5v2.5c0 .4-.3.8-.8.8s-.8-.4-.8-.8V21zm5.3 0h1.5v2.5c0 .4-.3.8-.8.8s-.8-.4-.8-.8V21z" />
  </svg>
);

export const ComposeIcon: React.FC<IconProps> = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l-8-4v6l8 4 8-4v-6l-8 4zm0 6l-8-4v4l8 4 8-4v-4l-8 4z" />
  </svg>
);

export const ReactIcon: React.FC<IconProps> = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const TailwindIcon: React.FC<IconProps> = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.57.9 2.29 1.63 1.17 1.18 2.53 2.57 5.51 2.57 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.57-.9-2.29-1.63-1.17-1.18-2.53-2.57-5.51-2.57zm-6 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.57.9 2.29 1.63 1.17 1.18 2.53 2.57 5.51 2.57 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.57-.9-2.29-1.63-1.17-1.18-2.53-2.57-5.51-2.57z" />
  </svg>
);

export const FirebaseIcon: React.FC<IconProps> = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M3.89 15.57L8.25 3.32c.16-.44.83-.44.99 0l1.71 4.79-7.06 7.46zM18.88 18l-1.92-12c-.08-.47-.73-.55-.91-.12L12.03 14l6.85 4zm-13.62.9l12.87-7.46-3.83-7.55c-.17-.34-.69-.31-.82.06L3.89 15.57 5.26 18.9z" />
  </svg>
);

export const GitIcon: React.FC<IconProps> = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
);

export const PostmanIcon: React.FC<IconProps> = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const FigmaIcon: React.FC<IconProps> = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M8 2c-2.208 0-4 1.792-4 4s1.792 4 4 4h4V2H8zm4 8h-4c-2.208 0-4 1.792-4 4s1.792 4 4 4h4v-8zm0 8H8c-2.208 0-4 1.792-4 4s1.792 4 4 4h4v-8zm4-8c2.208 0 4-1.792 4-4s-1.792-4-4-4h-4v8h4zm0 8c2.208 0 4-1.792 4-4 0-2.208-1.792-4-4-4h-4v8h4z" />
  </svg>
);
