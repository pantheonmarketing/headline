import React from 'react';

export function Select({ children, className, ...props }) {
  return (
    <select className={`select ${className}`} {...props}>
      {children}
    </select>
  );
}

export function SelectTrigger({ children, className, ...props }) {
  return (
    <div className={`select-trigger ${className}`} {...props}>
      {children}
    </div>
  );
}

export function SelectValue({ children, className, ...props }) {
  return (
    <div className={`select-value ${className}`} {...props}>
      {children}
    </div>
  );
}

export function SelectContent({ children, className, ...props }) {
  return (
    <div className={`select-content ${className}`} {...props}>
      {children}
    </div>
  );
}

export function SelectItem({ children, className, ...props }) {
  return (
    <div className={`select-item ${className}`} {...props}>
      {children}
    </div>
  );
}