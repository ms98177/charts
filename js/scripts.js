var task = {
  "person": "Jeremy",
  "description": "paint the house",
  "difficulty": "easy"
}

// Loop through an object! "key" is temporary variable representing key of key: value pair
for(let key in task){
  // console.log(key);
  // console.log(typeof(house[key]));
}

var taskList = {
  tasks: [task]
}

// prints to HTML (practice from slide 41)
function drawList() {
  // Select #list-container element from HTML (add it to HTML first!)
  var parent = document.getElementById("list-container")

  // Clear out existing contents
  parent.innerHTML = ""

  // Create a <ul> node
  var ul = document.createElement("ul")
  // console.log(task.person + " needs to " + task.description)

  for(var i =0; i<taskList.tasks.length; i++){
    console.log(taskList.tasks[i].person +
                " needs to " +
                taskList.tasks[i].description +
                "(" + taskList.tasks[i].difficulty +
                ")")
    // Create an <li> node
    var li = document.createElement("li")

    // Add the person string to the li
    li.innerHTML = taskList.tasks[i].person

    // Append li to ul
    ul.appendChild(li)
  }

  // Append the ul to the #list-container
  parent.appendChild(ul)
}


// Form submit handler
function taskBuilder(){
  console.log("TODO list")
  event.preventDefault();

  var form = document.querySelector("form");

  // Create a new house object with form values (just one for right now)
  var newTask = { person: form.person.value,
                  description: form.description.value,
                  difficulty: form.difficulty.value
                  }

  // Insert new house object into neighborhood.houses
   taskList.tasks.push(newTask)

  // Trigger printing the list to page
  drawList();
}

// Will run after all HTML is done rendering
window.onload = function(){
  // Call this function
  drawList();

  // Select the form, attach houseBuilder as onSubmit handler
  var form = document.querySelector("form");
  form.onsubmit = taskBuilder;


  // Get all the <p> tags on the page, print their contents to console
  // (practice from slide 25)
  var paras = document.querySelectorAll('p');
  for(var i=0; i<paras.length; i++){
    // console.log(paras[i]);
  }

  // Select the <h1> and add class of "bright" to it
  // (practice from slide 32)
  var headline = document.querySelector('h1');
  headline.classList.add("bright");

  // Practicing creating & appending new HTML nodes
  var div = document.createElement("div");
  var p = document.createElement("p");
  p.innerHTML = "Easier to read text!";
  var text = document.createTextNode("This is text");
  p.appendChild(text);
  div.appendChild(p);

  var parent = document.getElementById("parent");
  parent.appendChild(div);
}

// Chart code
google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {
        var data = new google.visualization.arrayToDataTable([
          ['Person', 'Number of Tasks'],
          ["Jeremy", 5],
          ["Rosa", 4],
          ["Raquel", 4],
        ]);

        var options = {
          width: 600,
          legend: { position: 'none' },
          chart: {
            title: 'Task Distribution Chart',
            subtitle: 'number of tasks per person' },
          axes: {
            x: {
              0: { side: 'top', label: 'People'} // Top x-axis.
            }
          },
          bar: { groupWidth: "90%" }
        };

        var chart = new google.charts.Bar(document.getElementById('top_x_div'));
        // Convert the Classic options to Material options.
        chart.draw(data, google.charts.Bar.convertOptions(options));
      };
