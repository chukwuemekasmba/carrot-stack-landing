import type { Metadata, Viewport } from 'next';

import { Provider } from '@/components/ui/provider';
import { Layout } from '@/lib/layout';

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = 'CarrotStack';

export const metadata: Metadata = {
  title: { default: APP_NAME, template: '%s | Carrotstack' },
  description: 'Stack Expenses, Track Payments, and Manage Funds.',
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    url: 'https://carrot-stack.com',
    title: 'CarrotStack',
    description: 'Stack Expenses, Track Payments, and Manage Funds.',
    images: {
      url: '/social-image.png',
      alt: 'og-image',
    },
  },
  twitter: {
    creator: '@tryportify',
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
