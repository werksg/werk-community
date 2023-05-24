import Image from "next/image";

export default function Navbar() {
  return (
    <header class="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full bg-background/95 backdrop-blur-lg bg-transparent">
      <div class="container flex h-16 items-center justify-between">
        <div>
          <div class="mr-4">
            <a class="mr-6 flex items-center space-x-2" href="/">
              <img
                className="w-20"
                src="https://insta-werk-app.s3.ap-northeast-1.amazonaws.com/werkLogo.png"
                alt="werk_logo"
                
              />
            </a>
          </div>
        </div>

        <nav class="flex items-center space-x-8 text-sm font-medium">
          <a
            class="transition-colors hover:text-foreground/80 text-foreground/60"
            href="/#faq"
          >
            FAQ
          </a>
          <a
            class="text-foreground/60 transition-colors hover:text-foreground/80"
            href="/#contact"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
