export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Andrew Eliezer Tarigan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
