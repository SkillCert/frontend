import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 h-[438px] font-normal">
      <section className={`font-poppins text-gray-300 flex justify-evenly`}>
        {/* About SkillCert */}
        <article className="w-[404px]">
          <h2>About SkillCert</h2>
          <p className="font-normal text-[20px] leading-[30px]">
            SkillCert is a revolutionary platform that enables universities,
            academies, and companies to issue digital NFT certificates on the
            Stellar blockchain.
          </p>
        </article>

        {/* Quick Links */}
        <article>
          <h2>Quick Links</h2>
          <nav aria-label="Quick links">
            <div className="flex">
              <div className="flex flex-col gap-[7px]">
                <a href="/about-us">About us</a>
                <a href="/coursesPage">Courses</a>
                <a href="/instructors">Instructors</a>
                <a href="/blog">Blog</a>
              </div>
            </div>
          </nav>
        </article>

        {/* Support */}
        <article>
          <h2>Support</h2>
          <nav aria-label="Support">
            <div className="flex flex-col gap-[7px]">
              <a href="/faq">FAQ</a>
              <a href="/contact-us">Contact Us</a>
              <a href="/terms-of-service">Terms of Service</a>
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
          </nav>
        </article>

        {/* Connect With Us */}
        <article>
          <h2>Connect With Us</h2>
          <div className="flex items-center gap-4">
            <Link
              href="https://telegram.org"
              className="h-10 w-10 flex hover:opacity-80"
            >
              <Image
                alt="Telegram"
                src="/telegram-icon.png"
                width={40}
                height={40}
                className="object-contain w-full h-full"
              />
            </Link>
            <Link
              href="https://discord.com"
              className="h-[22px] w-[30px] flex hover:opacity-80"
            >
              <Image
                alt="Discord"
                src="/discord-icon.png"
                width={40}
                height={40}
                className="object-contain w-full h-full"
              />
            </Link>
          </div>
        </article>
      </section>

      {/* Divider */}
      <hr className="max-w-[1800px] bg-gray-300 h-[1px] mt-[61.28px] mb-[46.91] px-[60px] mx-auto" />

      {/* Copyright */}
      <p
        className={`font-poppins text-center text-gray-300 leading-[20px] text-[20px]`}
      >
        Copyright &#169; {new Date().getFullYear()} - SkillCert
      </p>
    </footer>
  );
}
