import Link from 'next/link';
import './about.css';

export default function About() {
  return (
    <div>
      <div className="header">
      <p className="brand">About</p>
        <div className="navigation">
          <div className="navigation-items">
            <Link href="/"><p>Home</p></Link>
            <Link href="/about"><p>About</p></Link>
            <Link href="/contact"><p>Contact</p></Link>
          </div>
        </div>
      </div>
      <section className="home">
        <video className="video=slide" src="/videos/3video.mp4" autoPlay muted loop></video>
      </section>
    </div>
  )
}