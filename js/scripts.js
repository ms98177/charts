
// Chart code
// Load the Visualization API and the corechart package.
// We need this for all chart library usage in this file.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded- trigger drawing the bar chart
google.charts.setOnLoadCallback(drawBasic);

// Hold all our count data in key/value format so it's easy to access
var taskCounter = {
  Jeremy: 0,
  Rosa: 0,
  Raquel: 0
}

// Assign click handlers to each of the voting buttons
window.onload = function(){
  // REVIEW: Could we instead select by element type "button",
  // since we're assigning same click handler for all of them??
  document.getElementById("Jeremy").onclick = vote;
  document.getElementById("Rosa").onclick = vote;
  document.getElementById("Raquel").onclick = vote;

}

// The click handler function
function vote(){
  // "this" refers to DOM element that triggered this handler,
  // in this case the button, which has an id that perfectly matches our counter's keys!
  console.log(this.id)
  // Update count for the selected topping
  taskCounter[this.id] = taskCounter[this.id] + 1;
  // Redraw the chart
  drawBasic();
}

// Draws a bar chart
// Documentation: https://developers.google.com/chart/interactive/docs/gallery/columnchart
function drawBasic() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Task');
      data.addColumn('number', 'Tasks');

      // Numeric values for rows are pulled from our global variable that holds counts for each topping
      data.addRows([
        ['Jeremy', taskCounter.Jeremy],
        ['Rosa', taskCounter.Rosa],
        ['Raquel', taskCounter.Raquel]
      ]);

      var options = {
        title: 'Task Assignments',
        hAxis: {
          title: 'Tasks'
        },
        vAxis: {
          title: 'Tasks Assigned'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    }

// Draws a donut chart- not currently being used
// Documentation: https://developers.google.com/chart/interactive/docs/gallery/piechart
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Tasks');
  data.addColumn('number', 'Tasks Assigned');
  data.addRows([
    ['Jeremy', 0],
    ['Rosa', 0],
    ['Raquel', 0]
  ]);

  // Set chart options
  var options = {'title':'Tasks Assignments',
                 'width':400,
                 'height':300,
                  pieHole: 0.4};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
