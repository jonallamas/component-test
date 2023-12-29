import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testeo de componentes',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  );
}
