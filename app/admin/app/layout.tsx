import { PropsWithChildren } from 'react';

import '../styles/index.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
