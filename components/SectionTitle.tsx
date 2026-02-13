import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, center = false, dark = false }) => {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      <div className={`inline-block px-4 py-1 rounded-full border mb-6 ${dark ? 'border-white/20 text-white' : 'border-black/10 text-black'}`}>
        <span className="uppercase text-xs tracking-widest font-semibold">{title}</span>
      </div>
      {subtitle && (
        <h2 className={`text-4xl md:text-6xl font-medium leading-tight ${dark ? 'text-white' : 'text-black'}`}>
          {subtitle}
        </h2>
      )}
    </div>
  );
};