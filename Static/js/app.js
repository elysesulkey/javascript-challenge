var tableData = data;

function tableDisplay(ufoSightings) {
  var tbody = d3.select("tbody");
  ufoSightings.forEach((ufoRecord) => {
    var row = tbody.append("tr");
    Object.entries(ufoRecord).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.html(value);
    });
  });
};
function deleteTbody() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};

console.log(tableData);
tableDisplay(tableData);

var button = d3.select("#filter-btn");

button.on("click", function(event) {
  d3.event.preventDefault();
  deleteTbody();
  var dateInput = d3.select("#datetime").property("value");
  //var cityInput = d3.select("#city).property("value");
//  var stateInput = d3.select("#state").property("value");
//var countryInput = d3.select("#country").property("value");
//  var shapeInput = d3.select("#shape").property("value");

  if (dateInput.trim() === "" ) {
    var filteredData = tableData;
  } else {
    var filteredData = tableData.filter(ufoSighting =>
      ufoSighting.datetime === dateInput.trim());
  };

//  if (cityInput.trim() === "" ) {
//    var filteredData = tableData;
//  } else {
  //  var filteredData = tableData.filter(ufoSighting =>
  //    ufoSighting.city === cityInput.trim());
//  };

//  if (stateInput.trim() === "" ) {
  //  var filteredData = tableData;
//  } else {
  //  var filteredData = tableData.filter(ufoSighting =>
  //    ufoSighting.state === stateInput.trim());
//  };

//  if (countryInput.trim() === "" ) {
//    var filteredData = tableData;
//  } else {
  //  var filteredData = tableData.filter(ufoSighting =>
  //    ufoSighting.country === countryInput.trim());
//  };

//  if (shapeInput.trim() === "" ) {
  //  var filteredData = tableData;
//  } else {
//  //  ufoSighting.shape === shapeInput.trim());
//  };
  console.log(filteredData);
  tableDisplay(filteredData);
});
