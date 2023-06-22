const div = document.body.firstElementChild;
console.log(div);

// Change the name "Pete" to "Richard"
const pete = document.querySelector(".list:first-child li:nth-child(2)");
pete.textContent="Richard";

// Delete the second <li> of the second <ul>
const secondUl = document.querySelector(".list:nth-child(2)");
const secondLi = secondUl.querySelector("li:nth-child(2)");
secondUl.removeChild(secondLi);

// Change the name of the first <li> of each <ul> to your name using a loop
const ulList = document.querySelectorAll(".list");
ulList.forEach((ul) => {
  const firstLi = ul.querySelector("li:first-child");
  firstLi.textContent = "Your Name";
});

// Add class "student_list" to both <ul>s
ulList.forEach((ul) => {
  ul.classList.add("student_list");
});

// Add classes "university" and "attendance" to the first <ul>
const firstUl = document.querySelector(".list:first-child");
firstUl.classList.add("university", "attendance");

// Add a "light blue" background color and padding to the <div>
container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

// Do not display the <li> that contains the text node "Dan" (last <li> of the first <ul>)
const danLi = firstUl.querySelector("li:last-child");
danLi.style.display = "none";

// Add a border to the <li> that contains the text node "Richard" (second <li> of the <ul>)
const richardLi = firstUl.querySelector("li:nth-child(2)");
richardLi.style.border = "1px solid black";

// Change the font size of the whole body
document.body.style.fontSize = "16px";

// Bonus: Check if the background color of the div is "light blue" and alert "Hello x and y"
if (container.style.backgroundColor === "lightblue") {
  const users = container.innerText.trim();
  alert(`Hello ${users}`);
}