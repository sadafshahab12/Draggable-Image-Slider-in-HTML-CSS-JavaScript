let slider = document.querySelector(".slider");
let arrow_icon = document.querySelectorAll("i");
let first_img = slider.querySelectorAll("img")[0];

// =======================arrow_icon================================
arrow_icon.forEach((icon) => {
  icon.addEventListener("click", () => {
    slider.scrollLeft += icon.id == "left" ? -first_img_width : first_img_width;
  });
});
// ===========================drag_start================================
let is_drag_start = false,
  prev_pageX,
  prev_scroll_left;
let first_img_width = first_img.clientWidth + 14; //getting first image width and margin value
const drag_start = (e) => {
  //updating global variable values on mouse down
  is_drag_start = true;
  prev_pageX = e.pageX;
  prev_scroll_left = slider.scrollLeft;
};
// ========================dragging=============================
const dragging = (e) => {
  //scrolling image according to mouse pointer
  //   console.log(e.pageX);
  if (!is_drag_start) return;
  e.preventDefault();
  slider.classList.add("dragging");
  let position_diff = e.pageX - prev_pageX;
  slider.scrollLeft = prev_scroll_left - position_diff;
};
// =======================drag_stop===============================
const drag_stop = () => {
  is_drag_start = false;
  slider.classList.remove("dragging");
};
// =====================EventListener=============================
slider.addEventListener("mousedown", drag_start);
slider.addEventListener("mousemove", dragging);
slider.addEventListener("mouseup", drag_stop);
