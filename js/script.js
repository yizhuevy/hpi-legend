document.getElementById("Columbia").click();


// Set the dimensions of the canvas / graph
var margin = {top: 90, right: 20, bottom: 70, left: 50},
    width = $(".chart").width() - margin.left - margin.right,
    height =650- margin.top - margin.bottom;
    
// Parse the date / time
var parseDate = d3.time.format("%Y%b").parse;

// Set the ranges
var x = d3.time.scale().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

// Define the axes
var xAxis = d3.svg.axis().scale(x)
    .orient("bottom").ticks(8);

var yAxis = d3.svg.axis().scale(y)
    .orient("left").ticks(8);

// Define the line
var hpiLine = d3.svg.line()   
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.price); });
    //.interpolate("basis");
    
// Adds the svg canvas
var svg = d3.select(".chart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");




 //$(".btn").on("click", function() {
      // Determine if current line is visible 
//                 var active   = d.active ? false : true,
//                 newOpacity = active ? 0 : 1; 
//                 // Hide or show the elements based on the ID
//                 d3.select("#tag"+d.key.replace(/\s+/g, ''))
//                     .transition().duration(100) 
//                     .style("opacity", newOpacity); 
//                 // Update whether or not the elements are active
//                 d.active = active;
//                 })  
// })


// Get the data
d3.csv("js/hpi.csv", function(error, data) {
  
    data.forEach(function(d) {
        d.date = parseDate(d.date.trim());
        d.price = +d.price;
});

    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain([0, d3.max(data, function(d) { return d.price; })]);

    // Nest the entries by symbol
    var dataNest = d3.nest()
        .key(function(d) {return d.city;})
        .entries(data);

    var color = d3.scale.category10();   // set the colour scale
   // var background-color=d3.rgb

    legendSpace = width/dataNest.length; // spacing for the legend

    // Loop through each symbol / key
    dataNest.forEach(function(d,i) { 

        svg.append("path")
            .attr("class", "line")
            .style("stroke", function() { // Add the colours dynamically
                return d.color = color(d.key);})
            .attr("id", 'tag'+d.key.replace(/\s+/g, '')) // assign ID
            .attr("d", hpiLine(d.values));

        // Add the Legend
        svg.append("text")
            .attr("x", (legendSpace/2)+i*legendSpace)  // space legend
            .attr("y", (margin.bottom/2) - 80)
            .attr("class", "legend")
            // style the legend
            .style("fill", function() { // Add the colours dynamically
                return d.color = color(d.key); 
              })
            .style("background-color", function(){
                return d.backgroundColor = "gery";
            })

            function changeBackground(color) {
   document.legend.style.background = color;
}

         
            $(".btn-Columbia").on("click", function(){              
                // Determine if current line is visible 
                if(d.key == "Columbia"){
                var active   = d.active ? false : true,
                newOpacity = active ? 1 : 0; 
                // Hide or show the elements based on the ID
                d3.select("#tag"+d.key.replace(/\s+/g, ''))
                    .transition().duration(100) 
                    .style("opacity", newOpacity); 
                // Update whether or not the elements are active
               d.active = active;
                }
                });  
                
                $(".btn-Jefferson").on("click", function(){
                // Determine if current line is visible 
                if(d.key == "Jefferson City"){
                var active   = d.active ? false : true,
                newOpacity = active ? 1 : 0; 
                // Hide or show the elements based on the ID
                d3.select("#tag"+d.key.replace(/\s+/g, ''))
                    .transition().duration(100) 
                    .style("opacity", newOpacity); 
                // Update whether or not the elements are active
                d.active = active;
                }
                });  
                
                $(".btn-Springfield").on("click", function(){
                // Determine if current line is visible 
                if(d.key == "Springfield"){
                var active   = d.active ? false : true,
                newOpacity = active ? 1 : 0; 
                // Hide or show the elements based on the ID
                d3.select("#tag"+d.key.replace(/\s+/g, ''))
                    .transition().duration(100) 
                    .style("opacity", newOpacity); 
                // Update whether or not the elements are active
                d.active = active;
                }
                });  

                $(".btn-Joplin").on("click", function(){
                // Determine if current line is visible 
                if(d.key == "Joplin"){
                var active   = d.active ? false : true,
                newOpacity = active ? 1 : 0; 
                // Hide or show the elements based on the ID
                d3.select("#tag"+d.key.replace(/\s+/g, ''))
                    .transition().duration(100) 
                    .style("opacity", newOpacity); 
                // Update whether or not the elements are active
                d.active = active;
                }
                });  
                
                $(".btn-Fayetteville").on("click", function(){
                // Determine if current line is visible 
                if(d.key == "Fayetteville"){
                var active   = d.active ? false : true,
                newOpacity = active ? 1 : 0; 
                // Hide or show the elements based on the ID
                d3.select("#tag"+d.key.replace(/\s+/g, ''))
                    .transition().duration(100) 
                    .style("opacity", newOpacity); 
                // Update whether or not the elements are active
                d.active = active;
                }
                });  
                
                $(".btn-Missouri").on("click", function(){
                // Determine if current line is visible 
                if(d.key == "Missouri"){
                var active   = d.active ? false : true,
                newOpacity = active ? 1 : 0; 
                // Hide or show the elements based on the ID
                d3.select("#tag"+d.key.replace(/\s+/g, ''))
                    .transition().duration(100) 
                    .style("opacity", newOpacity); 
                // Update whether or not the elements are active
                d.active = active;
                }
                });  
                
                $(".btn-USA").on("click", function(){
                // Determine if current line is visible 
                if(d.key == "USA"){                 
                    var active   = d.active ? false : true,
                    newOpacity = active ? 1 : 0; 
                    // Hide or show the elements based on the ID
                    d3.select("#tag"+d.key.replace(/\s+/g, ''))
                        .transition().duration(100) 
                        .style("opacity", newOpacity); 
                    // Update whether or not the elements are active
                    d.active = active;
                }
                });  
                
    });

    // Add the X Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Add the Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);


  });

