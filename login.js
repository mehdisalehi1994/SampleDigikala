document.addEventListener("DOMContentLoaded", function () {
  // بعد از ۲ ثانیه لودینگ حذف میشه و فرم نمایش داده میشه
  setTimeout(() => {
    document.getElementById("loading-screen-two").style.display = "none";
    document.querySelector(".login-container").style.display = "block";
  }, 2000);
});