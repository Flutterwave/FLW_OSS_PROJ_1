import '@/ui/global.css';
import { inter } from '@/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Wavework',
    default: 'Wavework',
  },
  description: 'This is a freelance financial suite app built by Flutterwave.',
  metadataBase: new URL('https://github.com/Flutterwave/FLW_OSS_PROJ_1'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
