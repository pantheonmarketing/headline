import React from 'react';
import packageJson from '../../package.json';

function Footer() {
  return (
    <footer className="footer text-center py-4 bg-gray-100 text-gray-700">
      <p>Version {packageJson.version}</p>
    </footer>
  );
}

export default Footer;