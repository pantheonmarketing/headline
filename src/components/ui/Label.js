import React from 'react';

export function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="label">
      {children}
    </label>
  );
}