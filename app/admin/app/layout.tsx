import { PropsWithChildren } from 'react';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <title>Dever no Bug</title>
      <body>{children}</body>
    </html>
  );
}
