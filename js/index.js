// Controls which of the graphs is on display

localStorage.setItem("attributeVar", "GDP_per_capita");

function changeAttribute(attributeName) {
  localStorage.setItem("attributeVar", attributeName);
  console.log("Update Attribute to: " + attributeName);
  
  if (attributeName == 'Perceptions_of_corruption') {
   var spec4 = "js/barChart.vg.json";
   vegaEmbed('#barChart', spec4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   }).catch(console.error)
  } else if (attributeName == 'GDP_per_capita') {
    var spec4 = "js/barChart2.vg.json";
    vegaEmbed('#barChart', spec4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error)
  } else if (attributeName == 'Generosity') {
    var spec4 = "js/barChart3.vg.json";
    vegaEmbed('#barChart', spec4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error) 
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//INITIALISE GRAPHS
changeAttribute('Perceptions_of_corruption')
