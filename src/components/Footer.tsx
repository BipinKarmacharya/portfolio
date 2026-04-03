const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="font-mono-code text-sm text-muted-foreground">
          Designed & Built by{" "}
          <span className="text-primary">Bipin Karmacharya</span>
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
