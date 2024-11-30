import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="header">
      <p className="brand">Profile</p>
        <div className="navigation">
          <div className="navigation-items">
            <p>Home</p>
            <Link href="/about"><p>About</p></Link>
            <Link href="/contact"><p>Contact</p></Link>
          </div>
        </div>
      </div>
      <section className="home">
        <video className="video=slide" src="/videos/3video.mp4" autoPlay muted loop></video>
          <div className="content">
            <h1 className="texthi">Hello Everyone!</h1>
            <h1 className="nametext">I'm Kitsada Bamrungkhet</h1>
            <p>I am a student of software engineering. I am in my second year.  I am a quiet person. Not very good at approaching people Have a passion for programming. Nice to meet you.</p>
          </div>
      </section>
    </div>
  )
}
