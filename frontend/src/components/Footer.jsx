import { Github, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-base-300 fixed w-full bottom-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-center h-full">
          <div className="flex items-center gap-2 text-base">
            <span>Made with</span>
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            <span>by Vaibhav Saini</span>
            <Link
              to="https://github.com/VaibhavEra/chattr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 ml-2 hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
