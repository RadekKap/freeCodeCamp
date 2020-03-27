
const padding = 40;
const w = 1200;
const h = 600;
console.clear();
document.addEventListener('DOMContentLoaded',function(){
    
const xhr= new XMLHttpRequest();
xhr.open('GET','https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json',true);
xhr.send();
xhr.onload= function(){
  const json= JSON.parse(xhr.responseText);
  const data=json.data;
 
  const maxXval= new Date(json.to_date);
  const minXval= new Date(json.from_date);

  const xScale = d3.scaleTime()
                   .domain([minXval,maxXval])
                   .range([0, w]);

  const maxYVal = d3.max(data, (d)=>d[1]);
  
  const yScale = d3.scaleLinear()
                    .domain([0,maxYVal])
                    .range([h, 0]);

  
  
   const svg=d3.select("div")
            .append("svg")
            .attr("width",w+2*padding)
            .attr("height",h+2*padding);
  
     
  
        svg.append("text")
        .attr("id","title")
        .attr("x", (w / 2)-300)             
        .attr("y", 50)
        .text(json.name.substring(0,22)+" Bar Chart");

  const div=d3.select("body").append("div") 
    .attr("id", "tooltip")  
    .style("opacity", 0);
  
         svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("class","bar")
            .attr("data-gdp", d=>d[1])
            .attr("data-date", d=>d[0])
            .attr("x",(d,i) => padding+xScale(Date.parse(d[0])))
            .attr("y",(d,i) =>yScale(d[1])+padding)
            .attr("width",w/data.length)
            .attr("height",d=> h-yScale(d[1]))
            .on("mouseover", function(d) {    
            div.transition()    
                .duration(200)    
                .style("opacity", .9);  
            div.html(d[0] + "<br/>"  + d[1])  
                .style("left", (d3.event.pageX) + "px")   
                .style("top", (d3.event.pageY - 28) + "px");  
            d3.select('#tooltip').attr("data-date",d[0]);
            })          
        .on("mouseout", function(d) {   
            div.transition()    
                .duration(500)    
                .style("opacity", 0); 
        });
            

     const xAxis = d3.axisBottom(xScale).tickFormat(d3.timeFormat("%Y"));
    
        svg.append('g')
            .attr("transform", "translate(40," + (h+padding) + ")")
            .attr('id','x-axis')
            .call(xAxis)
            .selectAll("text")  
            .style("text-anchor", "end")
            .attr("dx", "0.7em")
            .attr("dy", "0.7em")
            .attr("transform", "rotate(0)");
  
  const yAxis = d3.axisLeft(yScale);
        yAxis.ticks(20)
        svg.append('g')
            .attr('id','y-axis')
            .attr("transform", "translate(40,40)")
            .call(yAxis);
  
       
   
};

 
  
});

