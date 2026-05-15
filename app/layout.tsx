import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Standup Meeting Cost Calculator — Know the Real Price of Your Meetings',
  description: 'Track meeting frequency, duration, and attendee salaries to reveal the true cost of recurring team meetings. Built for engineering managers, CTOs, and HR leaders.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="799c7b9f-940f-4dba-b79d-4b1eb6d314e4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
