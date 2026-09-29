import Link from 'next/link'
import Header from '@/components/Header'

export const metadata = {
  title: 'News – Mahanaim Bible College',
  description: 'Latest news and updates from Mahanaim Bible College, Mumbai.',
}

export default function NewsPage() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <section className="news-section" style={{ background: '#fff', padding: '3rem 2rem' }}>
          <div className="news-inner">
            <div className="news-header">
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--color-gold-dark)', marginBottom: '0.75rem' }}>
                News & Updates
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-gray)' }}>
                Stay up to date with the latest from Mahanaim Bible College, Mumbai.
              </p>
            </div>

            <div style={{ maxWidth: '800px', margin: '3rem auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <article style={{ padding: '2rem', background: 'var(--color-off-white)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ background: 'var(--color-gold)', color: 'var(--color-dark)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, fontFamily: 'var(--font-sans)', textTransform: 'uppercase' }}>
                    Announcement
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-gray)', fontFamily: 'var(--font-body)' }}>July 2026</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '0.75rem' }}>
                  New Academic Year 2026-2027 Admissions Open
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--color-gray)', lineHeight: 1.7 }}>
                  Admissions are now open for the new academic year. Apply for our Certificate and Bachelor programs in Theology and Ministerial Studies. Visit the MBC Portal for more details.
                </p>
              </article>

              <article style={{ padding: '2rem', background: 'var(--color-off-white)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ background: 'var(--color-gold)', color: 'var(--color-dark)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, fontFamily: 'var(--font-sans)', textTransform: 'uppercase' }}>
                    Update
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-gray)', fontFamily: 'var(--font-body)' }}>2026</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '0.75rem' }}>
                  Online CIMS Course Continues
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--color-gray)', lineHeight: 1.7 }}>
                  The Certificate In Ministerial Studies (CIMS) program continues to run through our online portal. Students can access course materials, attend live sessions, and complete assessments from anywhere.
                </p>
              </article>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-gold-dark)', textDecoration: 'underline' }}>
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="footer-bottom" style={{ borderTop: 'none' }}>
          <p>&copy; {new Date().getFullYear()} Mahanaim Bible College, Mumbai. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}
