import Link from "next/link";
import "./contact.css";

export default function Contact() {
  return (
    <div>
      {/* Header */}
      <div className="header">
        <p className="brand">Contact</p>
        <div className="navigation">
          <div className="navigation-items">
            <Link href="/"><p>Home</p></Link>
            <Link href="/about"><p>About</p></Link>
            <Link href="/contact"><p>Contact</p></Link>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <section className="home">
        <video
          className="video-slide"
          src="/videos/3video.mp4"
          autoPlay
          muted
          loop
        ></video>

        {/* Image Link */}
        <div className="content">
            <div className="image-with-text">
                <Link href="https://github.com/Maewnamarm">
                <img
                    src="/image/github-mark.svg"
                    alt="GitHub"
                    className="navigation-image"
                />
                </Link>
                <p className="description">GitHub Profile</p>
            </div>
            <div className="image-with-text">
                <Link href="https://www.facebook.com/kkitt.arm">
                <img
                    src="/image/icons8-facebook-100.svg"
                    alt="Facebook"
                    className="navigation-image"
                />
                </Link>
                <p className="description">Facebook Profile</p>
            </div>
            <div className="image-with-text">
                <Link href="https://www.instagram.com/kitsada_a_04/">
                <img
                    src="/image/icons8-instagram.svg"
                    alt="Instagram"
                    className="navigation-image"
                />
                </Link>
                <p className="description">Instagram Profile</p>
            </div>
        </div>
      </section>
    </div>
  );
}

