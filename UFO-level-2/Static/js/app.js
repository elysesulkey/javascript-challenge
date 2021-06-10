var tableData = data;

// console.log(table_Data);


let tbody = d3.select("tbody");
let table = d3.select("table");



table.attr("class", "table table-striped");



function build_Table(table_Data) {

  tbody.html("");

  table_Data.forEach((UFO_report) => {

    let row = tbody.append("tr");

    Object.values(UFO_report).forEach((value) => {

      let UFO_data = row.append("td");

        UFO_data.text(value);

      });

  });

};






build_Table(table_Data);


let submit = d3.select("#filter-btn");


let inputDate = d3.select("#datetime");
let inputCity = d3.select("#city");
let inputState = d3.select("#state");
let inputCountry = d3.select("#country");
let inputShape = d3.select("#shape");
let inputShape = d3.select("#durationMinutes");
let inputShape = d3.select("#comments");


// function buttonClick() {

submit.on("click", function() {

  d3.event.preventDefault();


// let date = d3.select("#datetime").property("value");

  let input_Value = inputDate.property("value");
  console.log(input_Value);

//      let data_Filtered = table_Data;


//      if (date) {

//        data_Filtered = data_Filtered.filter(row => row.datetime === date);
//      }


//      table(data_Filtered);

  let data_Filtered = table_Data.filter(UFO_report => UFO_report.datetime == input_Value);
  console.log(data_Filtered);



  build_Table(data_Filtered);

});
