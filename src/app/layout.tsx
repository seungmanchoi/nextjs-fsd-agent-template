import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@core/providers';

export const metadata: Metadata = {
  title: 'Next.js FSD Template',
  description: 'Next.js + Feature-Sliced Design + AI Agent Harness',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
