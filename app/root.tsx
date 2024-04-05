// ルートコンポーネントを定義するファイル
// アプリケーション全体のレイアウトやスタイルなどを定義する
// コンポーネントとしてはクライアントサイドで最初に呼び出されるもの

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

// アプリケーション全体の共通レイアウトを定義
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// アプリケーションのルートコンポーネント
export default function App() {
  return <Outlet />;
}

// ハイドレーション中の一時的なフォールバックUIを提供
// SSR使用時はフォールバックとして表示される
// clientLoaderが完了するとルートコンポーネントに置き換わる
// SPAモードではroot.tsx以外で使用することはできない
export function HydrateFallback() {
  return <p>Loading...</p>;
}
