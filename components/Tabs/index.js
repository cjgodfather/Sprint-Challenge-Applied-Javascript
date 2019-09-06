// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function tabCreator(text) {
  const tabEl = document.createElement("div");
  tabEl.classList.add("tab");
  tabEl.textContent = text;
  return tabEl;
}

const topicsContainer = document.querySelector(".topics");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => response.data.topics)
  .then(topics => {
    return topics.forEach(topic => {
      const newTab = tabCreator(topic);
      topicsContainer.appendChild(newTab);
    });
  })
  .catch(error => console.log(`something is wrong`));
