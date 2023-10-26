// Import jQuery and load dash
import $ from "jquery";
import _ from "lodash";

// Create and append the elements
$(document).ready(function () {
  // Create and append the first paragraph
  const paragraph1 = $("<p>Holberton Dashboard</p>");
  $("body").append(paragraph1);

  // Create and append the second paragraph
  const paragraph2 = $("<p>Dashboard data for the students</p>");
  $("body").append(paragraph2);

  // Create and append the button element
  const button = $("<button>Click here to get started</button>");
  $("body").append(button);

  // Create and append the paragraph with id='count'
  const countParagraph = $('<p id="count"></p>');
  $("body").append(countParagraph);

  // Create and append the last paragraph
  const paragraph3 = $("<p>Copyright - Holberton School</p>");
  $("body").append(paragraph3);
});

// Initialize a click counter
let clickCount = 0;

// Function to update the click count and display it in the paragraph
function updateCounter() {
  clickCount += 1;
  const countParagraph = $("#count");
  countParagraph.text(
    `${clickCount} click${clickCount !== 1 ? "s" : ""} on the button`
  );
}
// Bind the debounced updateCounter function to the button click event
const debouncedUpdateCounter = _.debounce(updateCounter, 1000); // Adjust the debounce delay (in milliseconds) as needed

// When the button is clicked, execute the debounced function
$("#clickButton").on("click", debouncedUpdateCounter);
