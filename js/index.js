// Controls which of the graphs is on display

localStorage.setItem("continentSelect", "NA");

function changeAttribute(attributeName) {
  localStorage.setItem("attributeVar", attributeName);
  console.log("Update Attribute to: " + attributeName);
  
  if (attributeName == 'Perceptions_of_corruption') {
   var spec4 = "js/barChart.vg.json";
  } else if (attributeName == 'GDP_per_capita') {
    var spec4 = "js/barChart2.vg.json";
  } else if (attributeName == 'Generosity') {
    var spec4 = "js/barChart3.vg.json";
  } else if (attributeName == 'Freedom_to_make_life_choices') {
    var spec4 = "js/barChart4.vg.json";
  } else if (attributeName == 'Healthy_life_expectancy') {
    var spec4 = "js/barChart5.vg.json";
  } else if (attributeName == 'Social_support') {
    var spec4 = "js/barChart6.vg.json";
  }
  
  updateAttribute(spec4);
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
changeAttribute('Perceptions_of_corruption');
