import { withTranslation, TFunction } from "react-i18next";
import i18n from "i18next";
import logo from "../../assets/logo.png";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={src}
      className="inline-block"
    >
      <img src={src} alt={src} className="w-6 h-6" />
    </a>
  );

  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-72" />
        </a>

        {/* Contact Details */}
        <div className="text-center md:text-left mt-6 md:mt-0">
          <p className="m-0">
            E-mail:{" "}
            <a
              href="mailto:drgutuprofessional@gmail.com"
              className="text-blue-500 hover:underline"
            >
              drgutuprofessional@gmail.com
            </a>
          </p>
          <p className="m-0">
            Phone No:{" "}
            <a href="tel:0912005948" className="text-blue-500 hover:underline">
              0912 005948
            </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-lg mt-8">
        <p>
          © {new Date().getFullYear()} Professional Consultancy and Training
          Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default withTranslation()(Footer);
