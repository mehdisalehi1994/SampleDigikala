document.addEventListener("DOMContentLoaded", () => {
  
  // تنظیم Swiper بر اساس سایز صفحه
  function initResponsiveSwipers() {
    const width = window.innerWidth;
    
    // اسلایدر شگفت‌انگیز
    const swiperSpecial = document.querySelector(".swiper-special-part");
    if (swiperSpecial && typeof Swiper !== "undefined") {
      let slidesPerViewSpecial = 5;
      let spaceBetweenSpecial = 10;
      
      if (width <= 360) {
        slidesPerViewSpecial = 1.8;
        spaceBetweenSpecial = 8;
      } else if (width <= 400) {
        slidesPerViewSpecial = 2;
        spaceBetweenSpecial = 8;
      } else if (width <= 576) {
        slidesPerViewSpecial = 2.5;
        spaceBetweenSpecial = 10;
      } else if (width <= 768) {
        slidesPerViewSpecial = 3;
        spaceBetweenSpecial = 10;
      } else if (width <= 992) {
        slidesPerViewSpecial = 4;
        spaceBetweenSpecial = 10;
      }
      
      new Swiper(swiperSpecial, {
        slidesPerView: slidesPerViewSpecial,
        spaceBetween: spaceBetweenSpecial,
        autoplay: { delay: 5000 },
        navigation: {
          nextEl: ".swiper-special-part .swiper-button-next",
          prevEl: ".swiper-special-part .swiper-button-prev"
        },
        breakpoints: {
          360: {
            slidesPerView: 1.8,
            spaceBetween: 8
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 8
          },
          576: {
            slidesPerView: 2.5,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 10
          }
        }
      });
    }
    
    // اسلایدر بادی (سوپرمارکت و غیره)
    const swiperBodyElements = document.querySelectorAll(".swiper-body-part");
    swiperBodyElements.forEach((swiperBody) => {
      if (swiperBody && typeof Swiper !== "undefined") {
        let slidesPerViewBody = 6;
        let spaceBetweenBody = 10;
        
        if (width <= 360) {
          slidesPerViewBody = 2.2;
          spaceBetweenBody = 8;
        } else if (width <= 400) {
          slidesPerViewBody = 2.5;
          spaceBetweenBody = 8;
        } else if (width <= 576) {
          slidesPerViewBody = 3;
          spaceBetweenBody = 10;
        } else if (width <= 768) {
          slidesPerViewBody = 4;
          spaceBetweenBody: 10;
        } else if (width <= 992) {
          slidesPerViewBody = 5;
          spaceBetweenBody = 10;
        }
        
        new Swiper(swiperBody, {
          slidesPerView: slidesPerViewBody,
          spaceBetween: spaceBetweenBody,
          autoplay: { delay: 5000 },
          navigation: {
            nextEl: swiperBody.parentElement.querySelector(".swiper-button-next"),
            prevEl: swiperBody.parentElement.querySelector(".swiper-button-prev")
          },
          breakpoints: {
            360: {
              slidesPerView: 2.2,
              spaceBetween: 8
            },
            400: {
              slidesPerView: 2.5,
              spaceBetween: 8
            },
            576: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 10
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 10
            }
          }
        });
      }
    });
  }
  
  // اجرای اولیه با تاخیر
  setTimeout(initResponsiveSwipers, 300);
  
  // تنظیم مجدد هنگام تغییر سایز
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      location.reload(); // ریلود برای اعمال تغییرات Swiper
    }, 500);
  });
  
});

// فیکس اسکرول افقی
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 768) {
    document.body.style.overflowX = "hidden";
    
    // فیکس برای تمام کانتینرها
    const containers = document.querySelectorAll(".container, .container-fluid, .row");
    containers.forEach(container => {
      container.style.overflowX = "hidden";
    });
  }
});