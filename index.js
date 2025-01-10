document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".about-tixio_heading-wrap");
  
    if (tabs.length === 0) {
      console.error("No tabs found!");
      return;
    }
  
    let currentTab = 0; 
    let tabInterval; 
    const triggerHeight = window.innerHeight * 0.6; 
  
    
    const autoClickTab = () => {
      tabs[currentTab].click();
      currentTab = (currentTab + 1) % tabs.length; 
    };
  
   
    const scrollSwitchTabs = () => {
      tabs.forEach((tab, index) => {
        const rect = tab.getBoundingClientRect();
        if (rect.top <= triggerHeight && rect.bottom > triggerHeight) {
          tab.click(); 
          currentTab = index; 
        }
      });
    };
  
    const startAutoClick = () => {
      tabInterval = setInterval(autoClickTab, 3000); 
    };
  
    const stopAutoClick = () => {
      clearInterval(tabInterval);
    };
  
    const initializeBehavior = () => {
      if (window.innerWidth < 768) {
        console.log("Mobile mode: Enabling auto and scroll tab switching");
        stopAutoClick();
        startAutoClick(); 
        window.addEventListener("scroll", scrollSwitchTabs);
      } else {
        console.log("Desktop mode: Enabling auto tab switching only");
        stopAutoClick();
        startAutoClick(); 
        window.removeEventListener("scroll", scrollSwitchTabs); 
      }
    };
  
  
    initializeBehavior();
      window.addEventListener("resize", () => {
      console.log("Window resized, reinitializing behavior...");
      initializeBehavior();
    });
  });
  
  
    gsap.to(".get-started_arrow-left", {
        x: 70, 
        y: 70, 
        duration: 2, 
        repeat: -1, 
        yoyo: true, 
        ease: "power1.inOut"
      });

    gsap.to(".get-started_arrow-right", {
      // x: -50, 
      y: -100, 
      duration: 2, 
      repeat: -1, 
      yoyo: true, 
      ease: "power1.inOut"
    });

    gsap.to("#pulseSvg", {
      scale: 1.5,   
      duration: 0.8, 
      repeat: -1,   
      yoyo: true,   
      transformOrigin: "center", 
      ease: "power1.inOut" 
    });

    gsap.to(".rotate-image", {
      rotation: 360, 
      duration: 4,   
      repeat: -1,    
      ease: "linear" 
    });


 