export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  export const createHandleNavClick = (scrollToSection, setIsOpen) => (id) => {
    if (id === 'intro') {
      scrollToTop();
    } else {
      scrollToSection(id);
    }
    setIsOpen(false);
  };
  