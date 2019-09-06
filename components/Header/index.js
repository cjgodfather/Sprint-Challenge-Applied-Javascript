// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
  const headerEl = document.createElement("div");
  const dateEl = document.createElement("span");
  const titleEl = document.createElement("h1");
  const tempEl = document.createElement("span");

  headerEl.classList.add("header");
  dateEl.classList.add("date");
  tempEl.classList.add("temp");

  dateEl.textContent = "SMARCH 28, 2019";
  titleEl.textContent = "Lambda Times";
  tempEl.textContent = "98°";

  headerEl.appendChild(dateEl);
  headerEl.appendChild(titleEl);
  headerEl.appendChild(tempEl);
  return headerEl;
}

const hContainer = document.querySelector(".header-container");
hContainer.appendChild(Header());
