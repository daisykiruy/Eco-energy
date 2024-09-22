// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    
  
    // 'back to top' button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerText = '↑ Back to Top';
    backToTopBtn.classList.add('back-to-top');
    document.body.appendChild(backToTopBtn);
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });
  
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  