import { socials } from '@/data/socials';

export function Footer() {
  return (
    <footer className="w-full py-8 mt-32 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Yusuf. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <span className="sr-only">{social.platform}</span>
                <i className={`text-xl ri-${social.icon}-line`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
