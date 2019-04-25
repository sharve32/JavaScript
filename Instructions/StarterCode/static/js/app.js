// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var submit = d3.select("#filter-btn");

tbody.html(" ");

tableData.forEach((line) => {
    var row = tbody.append("tr");
    Object.entries(line).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
});

submit.on("clilck", function() {
    d3.event.preventDefault();
    var d_date = d3.select("#datetime").property("value").trim();
    if (d_date) {
        console.log(d_date);
        tableData = tableData.filter(tableData => tableData.datetime === d_date);
    }
    tbody.html(" ");

    tableData.forEach((line) => {
        var row = tbody.append("tr");
        Object.entires(line).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});