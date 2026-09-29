import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'

export default function HomePage() {
  return (
    <>
      <Header />

      {/* =================== HERO SECTION =================== */}
      <section className="hero" id="home">
        <Image
          src="/images/campus_bg.jpg"
          alt="Mahanaim Bible College Campus"
          fill
          style={{ objectFit: 'cover', zIndex: 0 }}
          priority
        />
        <div className="hero-content" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-title">MAHANAIM BIBLE<br />COLLEGE</h1>
          <p className="hero-subtitle">Church Of God (Full Gospel)<br />In India</p>
          <p className="hero-region">Central West Region</p>
          <p className="hero-city">Mumbai</p>
          <div className="hero-buttons">
            <a href="https://cims.mbcmumbai.com" className="btn-magenta" target="_blank" rel="noopener noreferrer">MBC Portal</a>
            <a href="#about-us" className="btn-green">About Us</a>
          </div>
        </div>
      </section>

      {/* =================== PATRON SECTION (SPLIT) =================== */}
      <section className="patron-section">
        <div className="patron-left">
          <h2>Preparing<br />Laborers for<br />His Harvest</h2>
        </div>
        <div className="patron-right">
          <div className="patron-image-container">
            <Image
              src="/images/patron.jpeg"
              alt="Rev. E.P. Samkutty"
              width={150}
              height={150}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
          <h3 className="patron-name">REV. E.P SAMKUTTY</h3>
          <div className="patron-role">
            PATRON / OVERSEER<br />
            CHURCH OF GOD (F.G) IN INDIA<br />
            CENTRAL WEST REGION
          </div>

          <div className="patron-message">
            <p className="verse">
              "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work." 2 Timo 3:16,17.
            </p>

            <p>It is my great joy to welcome you to our Mahanaim Bible College website.</p>

            <p>The mission of our Bible College is to prepare men and women who are deeply rooted in the Word of God, empowered by the Holy Spirit, and committed to serving Christ with integrity, humility, and excellence. In a world that is constantly changing, the need for faithful, Spirit-filled leaders has never been greater.</p>

            <p>Through sound biblical teaching, practical ministry training, and spiritual formation, we seek to equip students to proclaim the Gospel, plant and strengthen churches, and serve communities with the love of Christ.</p>

            <p>Christian education is a lifelong process of learning God's Word, growing in Christ, and serving Him faithfully. It strengthens the church, equips believers for ministry, protects against false doctrine, and prepares Christians to fulfill God's mission in the world.</p>

            <p>I invite you to explore our programs and become part of this journey of learning, growing, and serving. May God guide you as you seek His will, and may He use this institution to prepare laborers for His harvest.</p>

            <p>May the Lord richly bless you.</p>
          </div>
        </div>
      </section>

      {/* =================== ABOUT SECTION (FLOATING) =================== */}
      <section className="about-section-container" id="about-us">
        <div className="about-card">
          <h2>Our History</h2>
          <p>The Mahanaim Bible College (formerly known as Mahanaim Bible Training Centre) was established in 1983 with a great burden and vision to reach the unreached in India. This vision of Pr. A. Mathai, the former Overseer was unravelled at God's appropriate time that Mahanaim Bible College was accredited by the International Association for Theological Accreditation (IATA) in 2018. It is a significant landmark in the Church of God Central West Region.</p>

          <p>It is estimated that there are still unreached villages where the Good-news needs to be preached. The graduates of the MBC were sent out to proclaim the Goodnews to reach the lost and trodden in India.</p>

          <p>Its top priority is to train 'Native Missionaries' and send them to areas where they are familiar with the local language, culture, customs and traditions. Church of God recognizes the success of the 'Native Missionaries' work in their mission fields. Mahanaim Bible College is now proud to have sent hundreds of qualified staff to various parts of India as well as the world.</p>
        </div>
      </section>

      {/* =================== COURSES SECTION =================== */}
      <section className="courses-section" id="courses">
        <div className="courses-header">
          <h2>Our Courses</h2>
          <p>The courses which are currently offered by MBC Mumbai and also courses that are coming soon.</p>
        </div>

        <div className="courses-grid">
          {/* CIMS */}
          <div className="course-card">
            <Image
              src="/images/badge-cims.png"
              alt="CIMS Badge"
              width={100}
              height={100}
              className="course-badge"
            />
            <h3 className="course-title">
              <span>CIMS</span>
              Certificate In Ministerial<br />Studies
            </h3>
            <p className="course-desc">Certificate In Ministerial Studies is the ongoing online course of MBC.</p>
            <p className="course-req">Requirement: 12th<br />Passed (English)</p>
          </div>

          {/* C.Min */}
          <div className="course-card">
            <Image
              src="/images/badge-cmin.png"
              alt="C.Min Badge"
              width={100}
              height={100}
              className="course-badge"
            />
            <h3 className="course-title">
              <span>C.Min</span>
              Certificate In<br />Ministries
            </h3>
            <p className="course-desc">Certificate In Ministries is a 1 year course offered by MBC.</p>
            <p className="course-req">Requirement: Studied in<br />any Bible College</p>
          </div>

          {/* C.Th */}
          <div className="course-card">
            <Image
              src="/images/badge-cth.png"
              alt="C.Th Badge"
              width={100}
              height={100}
              className="course-badge"
            />
            <h3 className="course-title">
              <span>C.Th</span>
              Certificate In<br />Theology
            </h3>
            <p className="course-desc">Certificate In Theology is a 2 year course offered by MBC.</p>
            <p className="course-req">Requirement: Xth<br />Passed Hindi/English</p>
          </div>

          {/* B.Th */}
          <div className="course-card">
            <Image
              src="/images/badge-bth.png"
              alt="B.Th Badge"
              width={100}
              height={100}
              className="course-badge"
            />
            <h3 className="course-title">
              <span>B.Th</span>
              Bachelor Of<br />Theology
            </h3>
            <p className="course-desc">Bachelor Of Theology is a 3 year course offered by MBC.</p>
            <p className="course-req">Requirement: 12th<br />Passed (English)</p>
          </div>
        </div>
      </section>

      {/* =================== WHY CHOOSE MBC SECTION =================== */}
      <section className="why-section" id="why-mbc">
        <div className="why-inner">
          <div className="why-left">
            <h2>Why Choose<br />MBC?</h2>
          </div>
          <div className="why-right">
            <div className="why-item">
              <h3>Online Mode Of Courses</h3>
              <p>Exclusive online availability of courses with unique student - teacher portal, videos, E-library and study material enhances the quality of online learning experience.</p>
            </div>

            <div className="why-item">
              <h3>Experienced Faculty</h3>
              <p>Learn from dedicated and experienced faculty members who are committed to nurturing the next generation of ministry leaders with both academic excellence and spiritual depth.</p>
            </div>

            <div className="why-item">
              <h3>Scholarship Available</h3>
              <p>Offers scholarship for eligible applicants from the Church Of God (Full Gospel) In India, Central West Region.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =================== FOOTER =================== */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-col">
            <h4>Mahanaim Bible College</h4>
            <p>Church Of God (Full Gospel) In India<br />Central West Region, Mumbai</p>
          </div>

          <div className="footer-col">
            <h4>Locate/Get Directions</h4>
            <p>Diva, Thane, Maharashtra 400612<br />Google Map: <a href="#" style={{textDecoration: 'underline'}}>Click Here To Get Map</a></p>
          </div>

          <div className="footer-col">
            <h4>Important Links</h4>
            <ul>
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#about-us">About Us</Link></li>
              <li><Link href="#courses">Courses</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>News</h4>
            <p>MBC has resumed the courses. Admissions are open for the academic year 2026.</p>
          </div>

          <div className="footer-col">
            <h4>Connect with us!</h4>
            <p>Connect with us using social media platforms or directly through our contact details below:</p>
            <p style={{marginTop: '1rem'}}>Email: <a href="mailto:info@mbcmumbai.com">info@mbcmumbai.com</a></p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright &copy; {new Date().getFullYear()} Mahanaim Bible College. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
