import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks } from "./_components/navLinks"
import useNavbarHeight from "@/hooks/useNavbarHeight"
import useSmoothScroll from "@/hooks/useSmoothScroll"
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog"
import { createHandleNavClick } from "./_components/navbarUtils"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollToSection } = useSmoothScroll()

  useNavbarHeight()

  const handleNavClick = createHandleNavClick(scrollToSection, setIsOpen)

  return (
    <nav className="bg-background sticky top-0 z-40 w-full border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={() => handleNavClick("intro")}
              className="text-2xl font-bold text-black"
            >
              Minsu
            </button>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                aria-describedby={`${link.id}-description`}
              >
                {link.name}
                <span id={`${link.id}-description`} className="sr-only">{link.description}</span>
              </button>
            ))}
          </div>
          <div className="sm:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px] h-[30vh]">
                <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
                <DialogDescription id="nav-menu-description" className="sr-only">
                  Navigation menu for quick access to different sections of the portfolio
                </DialogDescription>
                <nav className="flex flex-col space-y-4 mt-4" aria-describedby="nav-menu-description">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.id)}
                      className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                      aria-describedby={`mobile-${link.id}-description`}
                    >
                      {link.name}
                      <span id={`mobile-${link.id}-description`} className="sr-only">{link.description}</span>
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
