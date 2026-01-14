import "./globals.css";

export const metadata = {
  title: "하천 수위 정보 알림 - River Level Info"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-[#ffffff] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
