'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <Link href="/" className="header-logo">
        <Image
          src="/images/logo.png"
          alt="Mahanaim Bible College"
          width={60}
          height={60}
          style={{ width: 'auto', height: '60px' }}
          priority
        />
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Hidden menu for now, would slide out or drop down */}
    </header>
  )
}
