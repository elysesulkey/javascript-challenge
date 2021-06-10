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

var filterbutton = d3.select("#filter-btn");

filterbutton.on("click", function(event) {
  d3.event.preventDefault();
  deleteTbody();
  var dateInput = d3.select("#datetime").property("value");

  if (dateInput.trim() === "" ) {
    var filteredData = tableData;
  } else {
    var filteredData = tableData.filter(ufoSighting =>
      ufoSighting.datetime === dateInput.trim());
  };

  console.log(filteredData);
  tableDisplay(filteredData);

var resetbutton = d3.select("#reset-btn");

resetbutton.on("click", function(event) {
  d3.event.preventDefault();
  deleteTbody();
  };

  console.log(filteredData);
  tableDisplay(filteredData);

});
