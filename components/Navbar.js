export default function Navbar() {
  return (
    <header class="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full bg-background/95 backdrop-blur-lg bg-transparent">
      <div class="container flex h-16 items-center justify-between">
        <div>
          <div class="mr-4">
            <a class="mr-6 flex items-center space-x-2" href="/">
              <img
                className="w-20"
                src="https://github.com/werksg/email_signature_pack/blob/main/werkLogo.png?raw=true"
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
            href="/Contact"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
