import './homeStyle.css';

export const metadata = {
  title: 'Test Molécules',
  description: 'Application pour ajouter et afficher des molécules',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
