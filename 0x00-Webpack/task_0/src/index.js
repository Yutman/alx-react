// Import jQuery
import $ from "jquery";

// Function to add paragraphs to the page body
function addParagraphs() {
  const body = $("body");

  // Create and append the 1st paragraph
  const paragraph1 = $("<p>Holberton Dashboard</p>");
  body.append(paragraph1);

  // Create and append the second paragraph
  const paragraph2 = $("<p>Dashboard data for the students</p>");
  body.append(paragraph2);

  // Create and append the third paragraph
  const paragraph3 = $("<p>Copyright - Holberton School</p>");
  body.append(paragraph3);
}
// Call the addParagraphs function when the document is ready
$(document).ready(function () {
  addParagraphs();
});
