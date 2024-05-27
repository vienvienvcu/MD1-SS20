const slideItem = document.querySelector(".slide-item");
const arrowBtn = document.querySelectorAll(".food-slider-items .left .right");
console.log(arrowBtn);
let isDragging = false,
  startX,
  startScrollLeft;

const dragStart = (e) => {
  isDragging = true;
  slideItem.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = slideItem.scrollLeft;
};
arrowBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn);
  });
});
const dragging = (e) => {
  //   console.log(e.pageX);
  // CHUOT keo sang ben trai phai theo truc x se hoat dong
  if (!isDragging) return;
  //  updates the scroll position of the slideItem based on the cursor movement
  // cập nhật vị trí cuộn của slideItem dựa trên chuyển động của con trỏ
  slideItem.scrollLeft = startScrollLeft - (e.pageX - startX);
};
const dragStop = (e) => {
  isDragging = false;
  slideItem.classList.remove("dragging");
};
slideItem.addEventListener("mousedown", dragStart);
slideItem.addEventListener("mousemove", dragging);
slideItem.addEventListener("mouseup", dragStop);
