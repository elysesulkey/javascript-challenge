var tableData = data;

var tbody = d3.select("tbody")

function tableDisplay(ufoSightings) {
  tbody.html("")
  ufoSightings.forEach((ufoRecord) => {
    var row = tbody.append("tr");
    Object.entries(ufoRecord).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.html(value);
    })
  })
}

function deleteTbody() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};

console.log(tableData);

tableDisplay(tableData)

function filterclick() {
  d3.event.preventDefault();
  deleteTbody();
  var filterinput = d3.select("#datetime").property("value") || d3.select("#city").property("value");
  //var cityinput = d3.select("#city").property("value");
  //var stateinput = d3.select("#state").property("value");
  //var countryinput = d3.select("#country").property("value");
  //var shapeinput = d3.select("#shape").property("value");
  //var filterinput = dateinput, cityinput

  var filteredData = tableData
  if (filterinput) {
    filteredData = filteredData.filter(ufoRecord => (ufoRecord.datetime === filterinput || ufoRecord.city === filterinput))
  }
  console.log(filteredData)
  tableDisplay(filteredData)
}

function reset(){
  d3.event.preventDefault();
  deleteTbody();
  tableDisplay(tableData)
}

var button = d3.select("#filter-btn").on("click", filterclick)

var resetbutton = d3.select("#reset-btn").on("click", reset)
