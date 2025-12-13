/* بعد از ۲ ثانیه لودینگ حذف می‌شود */
setTimeout(() => {
  const loading = document.getElementById("loading-screen");
  const content = document.getElementById("content");

  if (loading) loading.style.display = "none";
  if (content) content.style.display = "block";
}, 2000);


/* login button */
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      window.location.href = "index1.html";
    });
  }
});


/* menu hover + sliders */
$(document).ready(() => {
  $(".menu > li").on("mouseover", (event) => {
    let right = 15;
    let width = 0;
    let that = event.target;

    $(".menu > li:not(.hover)").each((index, item) => {
      if (that === item) {
        width = $(item).css("width");
        return false;
      } else {
        right += parseInt($(item).css("width"), 10);
      }
    });

    $(".menu > li.hover").css({
      right: right,
      width: width,
      transform: "scaleX(1)",
    });
  });

  $(".menu > li").on("mouseout", () => {
    $(".menu > li.hover").css("transform", "scaleX(0)");
  });

  // Swipers
  new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    scrollbar: { el: ".swiper-scrollbar" },
    autoplay: { delay: 5000 },
  });

  new Swiper(".swiper-special-part", {
    slidesPerView: 4,
    autoplay: { delay: 5000 },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  });

  new Swiper(".swiper-body-part", {
    slidesPerView: 6,
    autoplay: { delay: 5000 },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  });
});


/* timer */
document.addEventListener("DOMContentLoaded", () => {
  const timers = document.querySelectorAll(".timer");

  function toPersianNumbers(num) {
    const persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return num.toString().replace(/\d/g, (d) => persian[d]);
  }

  timers.forEach((timer) => {
    const timerId = timer.dataset.timerId;
    const duration = 3 * 60 * 60;

    let currentTime =
      localStorage.getItem("timer-" + timerId)
        ? parseInt(localStorage.getItem("timer-" + timerId))
        : duration;

    function startCountdown() {
      let hours = Math.floor(currentTime / 3600);
      let minutes = Math.floor((currentTime % 3600) / 60);
      let seconds = currentTime % 60;

      timer.textContent =
        toPersianNumbers(hours.toString().padStart(2, "0")) +
        ":" +
        toPersianNumbers(minutes.toString().padStart(2, "0")) +
        ":" +
        toPersianNumbers(seconds.toString().padStart(2, "0"));

      currentTime--;

      if (currentTime < 0) {
        alert("پایان شگفت انگیز 🎉");
        currentTime = duration;
      }

      localStorage.setItem("timer-" + timerId, currentTime);
      setTimeout(startCountdown, 1000);
    }

    startCountdown();
  });
});


/* bootstrap carousel */
document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carouselEl) => {
    const carousel = new bootstrap.Carousel(carouselEl, {
      interval: 3000,
      wrap: true,
      ride: "carousel",
    });

    const prevBtn = carouselEl.querySelector(".carousel-control-prev");
    const nextBtn = carouselEl.querySelector(".carousel-control-next");

    if (prevBtn) prevBtn.addEventListener("click", () => carousel.prev());
    if (nextBtn) nextBtn.addEventListener("click", () => carousel.next());
  });
});


/* support icon chat */
document.addEventListener("DOMContentLoaded", () => {
  const supportButton = document.getElementById("support-button");
  const supportChat = document.getElementById("support-chat");
  const closeChat = document.getElementById("close-chat");
  const submitBtn = document.getElementById("submit-number");

  if (supportButton && supportChat) {
    supportButton.addEventListener("click", () => {
      supportChat.style.display = "flex";
      supportChat.style.flexDirection = "column";
      supportButton.style.display = "none";
    });
  }

  if (closeChat && supportButton) {
    closeChat.addEventListener("click", () => {
      supportChat.style.display = "none";
      supportButton.style.display = "flex";
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      const input = document.querySelector("#chat-input input");
      if (input.value.trim() !== "") {
        alert("شماره ثبت شد: " + input.value);
        input.value = "";
      } else {
        alert("لطفا شماره را وارد کنید");
      }
    });
  }
});


/* footer back-to-top */
document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("back-to-top");
  const footer = document.getElementById("main-footer");

  if (!backBtn || !footer) return;

  window.addEventListener("scroll", () => {
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop < windowHeight) backBtn.style.display = "flex";
    else backBtn.style.display = "none";
  });

  backBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
