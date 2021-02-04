// Controls which of the graphs is on display

localStorage.setItem("attributeVar", "GDP_per_capita");

function changeAttribute(attributeName) {
  localStorage.setItem("attributeVar", attributeName);
  console.log("Update Attribute to: " + attributeName);
}
