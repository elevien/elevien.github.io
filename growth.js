
// Model paramaters
var tau_avg = 6000.;
var tau_std = 600;
var max_depth = 10;
var drawFlag = true;
var dh = 300;
var dt = 20;
var w = 500;
console.log(d3.select('#d3-canvas'))
var h = 200;
var time = 0;
var x0 = w/2
var y0 = h/2
var svg = d3.select('#d3-canvas')
        .append("svg")
        .attr("width", w)
        .attr("height", h)
var N_cells = 1;
var cells =  [
{x: x0, y: y0, tau:tau_avg,radius:100,p:0.8}];
var g= svg.append("g")
var points = g.selectAll("circle").data(cells);
//
// svg.append("circle")
// .attr("cx", x0)
// .attr("cy", y0)
// .attr("r", 80)
// .style("fill-opacity",0.0)
// .style("stroke-width",3)
// .style("stroke","black")
// .style("stroke-opacity",1);
var redscale = d3.scaleLinear().domain([1,10]).range(["white", d3.rgb(114, 0, 0) ])

// draw a circle
svg.append("clipPath")       // define a clip path
.attr("id", "circle-clip")
.append("circle")            // shape it as an ellipse
.attr("cx", x0)            // position the x-centre
.attr("cy", y0)            // position the y-centre
.attr("r",80);

points.attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .attr("r", function(d) { return Math.sqrt(d.radius/3.14); })
      .style("fill-opacity",1)
      .attr("fill", function(d) { return redscale(1+10*d.p); })
      .style("stroke-opacity",1)
      .style("stroke-width", 0)
      .style("stroke","black");



var simulation = d3.forceSimulation(cells)
    .force("collide", d3.forceCollide().radius(collide).strength(0.6))
    //.force("many-body",d3.forceManyBody().strength(-0.2))
    .on("tick", ticked);
simulation.nodes(cells);




  function ticked() {

    // update time
    time = time + dt;

    // update cell positions and divide cells
    var n = cells.length

    for(var i=0;i<n;i++){
      cells[i].radius = cells[i].radius+cells[i].radius/cells[i].tau*dt;
      cells[i].p = cells[i].p + 0.0001*(0.6-cells[i].p)*dt+d3.randomNormal(0, Math.sqrt(dt*0.00001))();
      if (cells[i].radius>700){
        cells.push({
          x:cells[i].x+ d3.randomNormal(0, 0.5)(),
          y:cells[i].y+ d3.randomNormal(0, 0.5)(),
          tau:d3.randomNormal(tau_avg, tau_std)(),
          radius:cells[i].radius/2,
          p:cells[i].p});
        cells[i].tau = d3.randomNormal(tau_avg, tau_std)();
        cells[i].radius = cells[i].radius/2;
        cells[i].p = cells[i].p;
      }

    }



    var new_cells = []
    for (var i=0;i<cells.length;i++){
      if (cells[i].y-y0<100 & y0-cells[i].y<100  & cells[i].x-x0<500 & x0-cells[i].x<500){
        new_cells.push(cells[i]);
      }
    }
    cells = new_cells;
    console.log(cells)



    points = g.selectAll("circle").data(cells);
    points.exit().remove();
    points.enter().append("circle");
    points.attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", function(d) { return Math.sqrt(d.radius/3.14); })
    .style("fill-opacity",1)
    .attr("fill", function(d) { return redscale(1+10*d.p); })
    .style("stroke-opacity",1)
    .style("stroke-width", 0)
    .style("stroke","black");


    simulation.nodes(cells).alpha(1);
    svg.append("svg").attr("clip-path","url(#circle-clip)");


  }


  function collide(d){
    return Math.sqrt(d.radius/3.14)+1;
  }
