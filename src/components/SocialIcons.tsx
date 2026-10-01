import React from 'react';
import { getWhatsAppUrl } from '../data/products';

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export const SocialIcons: React.FC<SocialLinksProps> = ({ 
  className = "flex items-center gap-3",
  iconClassName = "w-9 h-9"
}) => {
  const socials = [
    {
      name: 'Facebook',
      href: 'https://facebook.com/tigerfoamandmattress', // Placeholder ready for user details
      ariaLabel: 'Tiger Foam & Mattress on Facebook',
      hoverColor: 'hover:bg-blue-600 hover:border-blue-600 hover:text-white',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@tigerfoamandmattress',
      ariaLabel: 'Tiger Foam & Mattress on TikTok',
      hoverColor: 'hover:bg-black hover:border-slate-700 hover:text-white dark:hover:bg-slate-800',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.48 2.76 1.34-.03 2.55-.83 3.07-2.07.24-.52.34-1.1.34-1.68.02-4.83.01-9.67.01-14.5.01-.03 0-.06.01-.09z" />
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      href: getWhatsAppUrl('Hello Tiger Foam & Mattress! I found your social channels and would like to connect.'),
      ariaLabel: 'Tiger Foam & Mattress on WhatsApp',
      hoverColor: 'hover:bg-emerald-600 hover:border-emerald-600 hover:text-white',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.031 0C5.397 0 0 5.397 0 12.031c0 2.12.553 4.184 1.604 6.007L.067 24l6.15-1.612c1.764.962 3.754 1.47 5.814 1.47 6.634 0 12.031-5.397 12.031-12.031C24.062 5.397 18.665 0 12.031 0zm0 22.012c-1.83 0-3.618-.492-5.18-1.423l-.372-.222-3.85 1.01 1.028-3.753-.243-.387a9.975 9.975 0 01-1.528-5.206c0-5.518 4.489-10.007 10.007-10.007 5.518 0 10.007 4.489 10.007 10.007 0 5.518-4.489 10.007-10.007 10.007zm5.485-7.502c-.3-.15-1.776-.877-2.051-.977-.275-.1-.475-.15-.675.15-.2.3-.775.977-.95 1.176-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.49-1.045-.932-1.751-2.083-1.956-2.434-.205-.35-.022-.539.128-.688.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.626-.925-2.226-.243-.585-.49-.506-.675-.515l-.575-.01c-.2 0-.525.075-.8.375-.275.3-1.05 1.026-1.05 2.502s1.075 2.899 1.225 3.099c.15.2 2.116 3.23 5.127 4.532.716.31 1.275.495 1.71.634.72.229 1.375.197 1.893.119.578-.086 1.776-.726 2.026-1.427.25-.701.25-1.302.175-1.427-.075-.125-.275-.2-.575-.35z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/tigerfoamandmattress',
      ariaLabel: 'Tiger Foam & Mattress on Instagram',
      hoverColor: 'hover:bg-gradient-to-tr hover:from-amber-600 hover:via-pink-600 hover:to-purple-600 hover:border-pink-600 hover:text-white',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    }
  ];

  return (
    <div className={className}>
      {socials.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.ariaLabel}
          title={item.name}
          className={`${iconClassName} rounded-xl bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center transition-all duration-200 ${item.hoverColor} hover:scale-105 shadow-xs`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};
