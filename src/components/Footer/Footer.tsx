import React from 'react';

import styles from './Footer.css';

export interface FooterProps {
  prop?: string;
}

export function Footer({ prop = 'default value' }: FooterProps) {
  return <div className="bg-cyan-900 p-6 text-center">
    <p>Copyright © 2022 Victor S. Fernandes</p>
  </div>;
}
