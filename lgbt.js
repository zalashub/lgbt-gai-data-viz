const w = 1350;
const h = 1000;

var dataset;

//Load in the data
d3.csv("Social-Acceptance-of-LGBT-people-in-174-countries.csv", function(d) {
  return {
    country : d["country"],
    continent : d["continent"],
    gai2000 : parseFloat(d.gai2000),
    // gai2000 : +d.gai2000,
    gai2017 : parseFloat(d.gai2017),
    // gai2017 : +d.gai2017,
    difference : parseFloat(d.difference)
    // difference : +d.difference

  };
}).then(function(data) {
    dataset = data;
    // console.log(data);
    // console.log(dataset);


//Make colours
// var colours = d3.scaleOrdinal(d3.schemeCategory10);
// var colours = ["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"]


// var bandColors = ["#ff0000", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee"];

var bandColors = ["#e40303", "#ffed00", "#ff8c00", "#008026", "#004dff", "#750787"];

// var bandColors = ["#A6DEC9", "#A6DEC9", "#A6DEC9", "#A6DEC9", "#A6DEC9", "#A6DEC9"];

// var bandColors = ["#D1FAFF", "#D1FAFF", "#D1FAFF", "#D1FAFF", "#D1FAFF", "#D1FAFF"];

// var bandColors = ["#DCFFFD", "#DCFFFD", "#DCFFFD", "#DCFFFD", "#DCFFFD", "#DCFFFD"];


dataset.sort(function (a,b) {return d3.ascending(a.continent, b.continent);});
// console.log(dataset);

// var increaseColor = "#83EEFF";
// var increaseColor = "#CBEAA6";
var increaseColor = "#6BBF59";


// var decreaseColor = '#A50000';
// var decreaseColor = '#D77A61';
var decreaseColor = '#FCA311';


// var colours = d3.scaleSequential().domain(dataset)
//                 .interpolator(d3.interpolateViridis);

var colours = d3.scaleOrdinal().domain(dataset)
                .range(d3.schemeSet3);

var outerRadius = Math.round(h / 2.65); //257
// console.log(outerRadius)
var innerRadius = 145; //
// console.log(innerRadius)

//Create SVG
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            // .style("background-color", "#373f4d");
            .style("background-color", "#1e2136");

//Signature
var signature = svg.append('g')
                   .attr("class", "signatureCont")
                   .attr("transform", "translate(" + 0.03 * w + "," + 0.97 * h + ")")
                   // .attr("transform", "translate(" + 0.5 * w + "," + 0.5 * h + ")")

//Just text
// signature.append('text')
//          .attr("transform", "translate(" + 50 + "," + 0 + ")")
//          .attr("font-family", "Karla")
//          .style("fill", "rgba(255, 255, 255, 0.5)")
//          .attr("font-size", 10)
//          .text('Zala S. Rose')

//The rose
signature.append('path')
          .attr("transform", "translate(" + 0 + "," + -20 + ") scale(.05)")
          .attr("fill", "rgba(255, 255, 255, 0.45)")
          .attr("d", "M369.4,65.81c16.41,16.41,20.93,39.11,26.17,65.39.34,1.7.71,3.49,1.07,5.22a.2.2,0,0,0,0,.11c.41,2,.85,4,1.25,6.07.24,1.11.46,2.18.7,3.3.81,3.77,1.71,7.59,2.64,11.44.31,1.26.62,2.52.95,3.8,1.07,4.14,2.24,8.33,3.54,12.55.3,1,.63,1.93.95,2.91,1.36,4.2,2.84,8.42,4.52,12.68.13.36.23.7.37,1.07a570.26,570.26,0,0,0-56-15.3c-4.27-1-8.53-2-12.63-3L338.76,171c-1.87-.46-3.67-.93-5.48-1.4a35.36,35.36,0,0,0-2.51-6.5c-.17-.33-.44-.6-.63-.94a35,35,0,0,0-3-4.47c-.58-.74-1.18-1.45-1.8-2.14a40.86,40.86,0,0,0-3.82-3.74c-.6-.51-1.22-1-1.84-1.46a48.64,48.64,0,0,0-4.67-3.18c-.67-.41-1.36-.79-2.06-1.17-1.7-.93-3.54-1.84-5.52-2.68-.77-.34-1.58-.64-2.38-1q-2.32-.9-4.87-1.71c-1.48-.47-3-.89-4.52-1.3-1.18-.32-2.37-.63-3.62-.91-1.65-.38-3.31-.73-5-1.05l-.33,0c-2.09-.39-4.17-.78-6.27-1.06l-.07-.14c-1.32-3.42-2.85-7-4.56-10.75-.25-.52-.47-1-.72-1.57-1.71-3.59-3.61-7.26-5.71-10.94-.34-.6-.67-1.19-1-1.79q-3.25-5.56-7.18-11l-1-1.34a116.31,116.31,0,0,0-9.12-10.93c-.07-.07-.11-.15-.17-.21,3.73-1,7.31-2,10.88-3.06.75-.22,1.56-.41,2.3-.64,13.81-4.22,26.38-9.11,38-13.66C336,57,354.37,50.79,369.4,65.81Zm-29,159.71.12.12c1.41,1.47,2.78,3,4.13,4.64l1.19,1.46c1,1.27,2,2.56,3,3.95.35.49.71,1,1.05,1.47,1.23,1.82,2.42,3.69,3.52,5.64l.48.95c.91,1.7,1.75,3.41,2.56,5.17.27.63.54,1.27.8,1.92q1,2.55,1.81,5.12c.16.53.35,1,.5,1.58a61.28,61.28,0,0,1,1.49,7c.09.54.12,1.11.19,1.7a58.34,58.34,0,0,1,.45,5.9v2.29a67.49,67.49,0,0,1-.43,6.82c-.05.41-.06.81-.11,1.22a69.26,69.26,0,0,1-1.71,8.34c-.18.73-.44,1.48-.65,2.23-.65,2.23-1.44,4.51-2.35,6.82-.32.86-.64,1.71-1,2.51a95,95,0,0,1-4.51,9.31c-1.48,2.65-3.11,5.22-4.8,7.68-.53.79-1.11,1.5-1.7,2.25-1,1.38-2.06,2.72-3.13,4-.68.8-1.37,1.55-2.06,2.3q-1.49,1.61-3,3.08c-.77.74-1.55,1.45-2.33,2.14-1,.85-2,1.7-3,2.49-.85.64-1.64,1.27-2.48,1.86-1,.73-2.09,1.39-3.14,2.05-.86.52-1.71,1.07-2.56,1.55-1.11.61-2.25,1.16-3.42,1.7-.85.41-1.65.86-2.5,1.21-1.36.59-2.75,1.08-4.14,1.57-1.17.42-2.36.8-3.55,1.15-1.42.41-2.83.85-4.27,1.14-1,.22-1.94.37-2.92.55s-2.2.42-3.31.57-2.07.24-3.11.34-2.1.22-3.15.27-2.15.11-3.23.13-2,0-3.05,0-2.19,0-3.29-.07-2-.11-3-.18-2.21-.16-3.31-.27-2-.22-2.94-.35-2.16-.27-3.23-.43-2-.34-3-.52-2.05-.36-3.05-.57l-.38-.08c21.12-4.27,45.72-16.13,67.59-52.6a87.44,87.44,0,0,0,5.35-72.43,47.26,47.26,0,0,1,3.57,3.36Zm-6.63,165.89c-2,3.07-4.14,6.18-6.53,9.3l-.37.5q-3.47,4.52-7.5,9.11l-1,1.09c-2.73,3-5.59,6.11-8.68,9.2a42.4,42.4,0,0,1-4.67,4c-.36.27-.72.51-1.08.76a35.31,35.31,0,0,1-4.32,2.56c-.21.11-.43.25-.65.35a33.28,33.28,0,0,1-5.12,1.94c-.59.18-1.2.28-1.81.41-1,.23-1.95.42-2.94.56a35.4,35.4,0,0,1-3.6.32h-.45a47.34,47.34,0,0,1-9.65-.8A94.49,94.49,0,0,1,247.67,420a358,358,0,0,1-43.79-30.64l-2.45-1.92a93,93,0,0,0,45.49-27.09c1.15.34,2.37.67,3.57,1l1.2.33c3.08.81,6.32,1.56,9.67,2.22l1.6.32c3.23.61,6.57,1.1,10,1.48.79.09,1.54.2,2.34.27,3.24.32,6.56.48,9.91.53.66,0,1.29.11,1.95.11a85.13,85.13,0,0,0,60.36-22.67c.07,1.13.12,2.27.14,3.41v1c0,2-.09,4.06-.26,6.17-.06.6-.11,1.19-.18,1.79-.15,1.27-.33,2.56-.56,3.85-.26,1.45-.57,2.93-.94,4.43-.22.9-.47,1.83-.74,2.75-.56,1.92-1.17,3.89-1.94,5.91-.2.5-.43,1-.63,1.54-.94,2.32-2,4.68-3.19,7.11l-.12.24a105.19,105.19,0,0,1-5.34,9.29ZM154,375.14c-1.71-.13-3.23-.35-4.79-.57s-3-.34-4.35-.62a53.1,53.1,0,0,1-7.63-2.07c-.74-.26-1.36-.61-2.07-.91a38.46,38.46,0,0,1-4.83-2.35c-.69-.41-1.31-.85-2-1.32a30.12,30.12,0,0,1-3.67-3c-.53-.52-1.06-1.05-1.55-1.6a26.2,26.2,0,0,1-2.8-3.88,17.37,17.37,0,0,1-1-1.7,29.38,29.38,0,0,1-2.48-6.39,42,42,0,0,1-1-6.21c-.06-.65-.08-1.32-.11-2-.07-1.52-.09-3.05,0-4.59,0-.72.06-1.45.11-2.17.12-1.66.32-3.32.56-5,.08-.54.13-1.09.23-1.62.37-2.2.83-4.38,1.39-6.56.12-.52.28-1,.43-1.53.45-1.71.94-3.37,1.49-5,.24-.73.49-1.45.75-2.17.51-1.45,1-2.87,1.61-4.26.27-.66.53-1.34.8-2,.72-1.7,1.47-3.41,2.24-5l.35-.78c.86-1.84,1.8-3.56,2.7-5.22l.28-.5c.08.24.21.45.29.68a38.82,38.82,0,0,0,2,4.69c.24.47.47.93.74,1.39a41.34,41.34,0,0,0,3.35,5.12c12.33,15.72,37.71,24.76,69.66,24.76a97.77,97.77,0,0,0,12.8-.81,79.45,79.45,0,0,0,32.87-11.45l.24-.12a86.35,86.35,0,0,1-6.89,15.36c-.09.13-.25.2-.33.35a75.48,75.48,0,0,1-6,9,.71.71,0,0,0-.13.12,70.33,70.33,0,0,1-4.93,5.57c-.15.14-.31.29-.45.44-1.59,1.58-3.25,3.08-5,4.52l-.74.6a89.52,89.52,0,0,1-45.73,17.84c-4.13.53-8,.86-11.76,1-1.1.05-2.22.08-3.36.11-2.13.06-4.16,0-6.16,0C157.45,375.31,155.69,375.27,154,375.14ZM197.35,77.55c.73.1,1.46.2,2.17.32A64,64,0,0,1,208.6,80l.48.17a67.29,67.29,0,0,1,18.51,9.53,109.87,109.87,0,0,1,33.73,45A261.83,261.83,0,0,0,224,136.25l-.21-.13c-.73-.48-1.57-1-2.55-1.62l-.43-.26c-1-.64-2.16-1.31-3.41-2l-.13-.08c-1.26-.73-2.66-1.5-4.13-2.29l-.64-.35c-1.44-.77-3-1.55-4.57-2.34l-.91-.44c-1.63-.79-3.34-1.57-5.12-2.36L201,124q-2.78-1.2-5.74-2.33l-.54-.2c-2-.75-4.06-1.46-6.17-2.13l-.4-.13c-2.12-.66-4.27-1.26-6.48-1.8l-1-.24c-2.15-.51-4.32-.95-6.52-1.3l-1.1-.17c-2.22-.34-4.46-.6-6.71-.75l-.91,0a69.45,69.45,0,0,0-7.07-.07h-.23a62.09,62.09,0,0,0-7.07.76l-.59.08a53.7,53.7,0,0,0-6.83,1.71l-1,.31a50.36,50.36,0,0,0-6.46,2.65c-.35.16-.69.35-1,.53a50.06,50.06,0,0,0-6.28,3.82c-.25.18-.5.39-.75.57a54.69,54.69,0,0,0-6.24,5.33,94.49,94.49,0,0,0-7.54,8.6c-.64.81-1.22,1.63-1.81,2.45q-2.49,3.41-4.61,7c-.44.74-.85,1.48-1.3,2.21A82.07,82.07,0,0,0,101.75,161a79.2,79.2,0,0,1-14.5-22.31c-.1-.25-.2-.51-.29-.77a36.08,36.08,0,0,1-1.09-4.08c-.07-.33-.16-.64-.22-1a30.34,30.34,0,0,1-.33-4.85c0-21.26,31.77-51.2,102.4-51.2A72.19,72.19,0,0,1,197.35,77.55Zm119.52,97a21.47,21.47,0,0,1,.47,2.39v.43a.38.38,0,0,1,0,.15,33.71,33.71,0,0,1-1.55,13.38c-.06.18-.1.36-.16.55-.46,1.47-1,3-1.64,4.57a131.77,131.77,0,0,1-17.87,29.86,79.25,79.25,0,0,0-3.84-23.36c-.06-.17-.08-.33-.15-.49-.2-.6-.32-1.18-.54-1.78a99,99,0,0,0-40.1-48.42c2.93,0,6,0,9,.08l2.66.1,1.45.07c2.93.14,5.89.36,8.85.66,17.65,1.8,38.78,7,43.27,21.4A3.15,3.15,0,0,1,316.87,174.52Zm.05,111.24c-16.85,28.07-34.74,38.95-51.39,43.46a123.08,123.08,0,0,0,6.92-29.68A106.08,106.08,0,0,0,289.52,260a275.94,275.94,0,0,0,29.6-37.09C325.29,239.81,329.8,264.3,316.92,285.76Zm-69.11,15.71c-.35.29-.69.6-1.05.85a55.66,55.66,0,0,1-4.74,3.36c-.72.46-1.48.85-2.23,1.33-1,.6-2.12,1.18-3.22,1.7-.85.42-1.65.86-2.56,1.24-1.75.78-3.54,1.49-5.38,2.1-.85.29-1.71.5-2.56.75-1.31.38-2.63.74-4,1-.92.21-1.86.39-2.8.57-1.5.26-3,.49-4.56.66-.85.1-1.62.23-2.46.29a70.68,70.68,0,0,1-7.49.4c-26.27,0-47.27-6.83-56.18-18.23a24,24,0,0,1-2.84-4.68c-.25-.54-.35-1.13-.55-1.7a20.88,20.88,0,0,1-.91-3,117.53,117.53,0,0,0,51.95,10.55,146.33,146.33,0,0,0,70.37-22.35,75.3,75.3,0,0,1-9.06,15.06c0,.05-.09.07-.12.11a65.41,65.41,0,0,1-4.88,5.63l-.13.13a61.32,61.32,0,0,1-4.63,4.2ZM113.34,188.62a71.26,71.26,0,0,1,.9-8.49,64.88,64.88,0,0,1,2.44-9.91c.09-.25.17-.49.25-.74a67,67,0,0,1,9.14-17.42c.43-.59.85-1.19,1.32-1.78a76.37,76.37,0,0,1,6.62-7.63,36.14,36.14,0,0,1,6-4.79c.69-.44,1.43-.74,2.13-1.12a35.41,35.41,0,0,1,4.38-2.13c.85-.33,1.7-.54,2.63-.8a41.59,41.59,0,0,1,4.26-1.1c.93-.16,1.88-.25,2.82-.35,1.45-.16,2.89-.3,4.35-.34h2.94c1.4,0,2.8.13,4.21.28,1,.1,2,.23,3,.37,1.41.22,2.82.46,4.22.76.95.2,1.91.41,2.86.64q2.1.52,4.17,1.14c.9.28,1.8.54,2.68.86,1.44.48,2.87,1,4.27,1.5l1.43.54a79.63,79.63,0,0,0-41.36,21.83c-17.06,17.42-25.27,43-24.7,76.37A106.23,106.23,0,0,1,113.34,188.62Zm122.38,84.14c-22.11-1.36-37.18-6.71-46.15-16.95,7.85-27.39,37.27-42.45,83.47-42.45,1.59,0,3.06.08,4.61.11a66.33,66.33,0,0,1-3,37.12,190.4,190.4,0,0,1-38.91,22.13Zm-55.46-37.85a76.66,76.66,0,0,1-1.08-13,8.53,8.53,0,1,0-17.06,0c0,29.6,11.45,49.36,34.78,59.72h-.65a88.66,88.66,0,0,1-51.77-13.06c-7.45-45.07-2-77.64,16.52-96.61,20.7-21.28,52.22-19.17,58.41-18.55,25.14,11.63,42.47,26,51.75,43-54.28.45-79.37,19.6-90.91,38.51ZM212.92,15.73A60.22,60.22,0,0,1,256,.05c20.48,0,31.81,14.62,46.18,33.15,3.68,4.73,7.44,9.58,11.51,14.38l-.77.29c-4.95,1.78-10,3.73-15.19,5.75l-2.14.81q-4.95,1.92-10.15,3.92c-1.7-.28-3.41-.62-5.06-1s-3.41-.64-5.12-1c-2-.46-4-1-6-1.55l-4.72-1.28c-2.15-.65-4.27-1.37-6.36-2.08-1.29-.44-2.6-.86-3.88-1.3-2.56-.93-5.12-1.92-7.57-2.93l-2.24-.85C231.39,41,219.25,34.64,207.85,28.71l-7.68-4C205,21.68,209.05,18.6,212.92,15.73ZM130.68,25.2a40.13,40.13,0,0,1,12.86-2,83.6,83.6,0,0,1,34,9.42c.08,0,.14.11.23.15,7,3.25,14.37,7,22.14,11.09,8.07,4.2,16.54,8.53,25.44,12.73l1.13.54q6.58,3,13.52,5.88l1.47.56q5.88,2.33,12.06,4.38c.59.2,1.14.43,1.7.63-1.42.41-2.78.85-4.26,1.25-1.09.3-2.17.6-3.27.86-4.33,1.11-8.83,2.07-13.38,3a81.88,81.88,0,0,0-21.16-10c-.69-.22-1.36-.41-2-.61A84.7,84.7,0,0,0,202,61c-.85-.13-1.71-.32-2.56-.44a89.37,89.37,0,0,0-11.67-.79C110.13,59.78,68.26,95,68.26,128a44.2,44.2,0,0,0,.5,6.29c.1.85.23,1.61.39,2.4,0,.29.07.59.13.86-1.85,1.3-3.67,2.62-5.58,3.91-1,.65-2,1.33-3,2l-.94.61C55.74,96.18,77.56,42.92,130.68,25.2Zm-92,291.67c-1.06-1.21-2.13-2.39-3.19-3.59C15.67,291,0,273.46,0,239c0-36.1,28.51-54.39,58.68-73.75l.58-.38c4.68-3,9.39-6.08,14.09-9.25.8-.53,1.6-1,2.38-1.55A164,164,0,0,0,94.8,179l2,2.34c-.27,2.13-.42,4.09-.46,5.66-4.34,30.71-20.82,60.5-36.77,89.33q-2.84,5.13-5.63,10.24l-.25.45q-2.33,4.28-4.58,8.54l-1.42,2.72q-1.71,3.25-3.32,6.51c-.53,1.08-1.08,2.18-1.61,3.25-1.11,2.3-2.15,4.57-3.17,6.83C39.33,315.56,39,316.23,38.7,316.87Zm11.44,17.57c1-2.85,2.16-5.77,3.41-8.72.86-2,1.81-4.12,2.79-6.24q.94-2,1.95-4.1,2.79-5.73,6-11.88c.44-.85.85-1.7,1.32-2.56l3.41-6.4,5.46-10q3.39-6.1,6.83-12.42c.53-1,1-1.94,1.56-2.91q2.55-4.67,5-9.43c.92-1.78,1.82-3.56,2.72-5.36,1.21-2.42,2.39-4.86,3.56-7.31,1.06-2.23,2.11-4.45,3.12-6.7.85-1.95,1.71-3.93,2.56-5.91s1.9-4.26,2.75-6.4l.13.36a162.41,162.41,0,0,0,22.19,43.41c-.27.28-.53.64-.8.95s-.76.85-1.15,1.36c-.66.81-1.32,1.7-2,2.56-.35.48-.71.94-1.07,1.45-.79,1.09-1.56,2.26-2.33,3.46-.24.36-.47.69-.7,1.06-1,1.59-2,3.25-2.94,5-.26.45-.51.94-.75,1.41q-1.07,2-2.1,4c-.33.67-.64,1.36-1,2-.58,1.23-1.14,2.46-1.7,3.74-.34.75-.65,1.52-1,2.29-.53,1.27-1,2.56-1.53,3.88-.28.76-.57,1.51-.85,2.29-.52,1.46-1,2.94-1.47,4.43-.19.64-.41,1.26-.6,1.9-.62,2.11-1.2,4.27-1.71,6.38-.1.43-.17.85-.26,1.29-.39,1.71-.73,3.46-1,5.19-.13.76-.23,1.51-.33,2.27-.2,1.42-.39,2.83-.52,4.26-.08.86-.14,1.64-.19,2.46-.09,1.36-.14,2.71-.16,4.06V342c0,1.43.13,2.82.24,4.21.06.68.1,1.37.17,2a52.48,52.48,0,0,0,1,6c4.12,17.48,18.2,38.29,61.89,38.29,4,0,8-.22,12.24-.57,1.57-.11,3.25-.12,4.78-.28,2.91,2.27,5.83,4.57,9,7.05l5.72,4.52c-3.64.35-7.18.71-10.63,1.11H183c-4.5.51-8.78,1.07-13,1.63l-4.12.56-7.4,1-3.47.48c-3.24.47-6.36.92-9.38,1.34l-.69.09c-2.78.37-5.46.73-8.08,1l-1.05.13c-5.69.67-11.09,1.19-16.16,1.4l-.23,0c-23.31,1-40.61-4.1-62.16-25.64C43,372.23,42.57,355.61,50.14,334.44ZM213.31,477.87c-22.8,0-49.95-26.16-74.23-50.34,1.59-.19,3.25-.42,4.88-.64l3.16-.42c3.34-.45,6.76-.93,10.33-1.44l6.05-.85,6.83-1,3.17-.41c3.53-.47,7.09-.93,10.84-1.36,1.48-.17,3.08-.32,4.6-.48,3.42-.37,6.88-.73,10.52-1.05,1.85-.16,3.85-.27,5.76-.42,3-.22,6-.43,9.1-.61,4,2.86,8.48,5.92,13.21,9h.07q5.4,3.47,11.28,6.71c1.06.59,2.13,1.15,3.2,1.71,2.65,1.4,5.32,2.7,8.06,3.94q3.17,1.43,6.31,2.64c1,.38,2,.9,3,1.24l-.39.55c-.41.57-.85,1.14-1.24,1.71-1.76,2.47-3.57,5-5.42,7.45l-.09.12c-1.71,2.3-3.51,4.53-5.35,6.68A42.26,42.26,0,0,1,213.31,477.87ZM395,412.11c-27.7,27.7-74.42,44.77-124.74,46.22l1.45-2,1.4-1.94c1.19-1.71,2.38-3.31,3.54-4.87.3-.4.61-.76.91-1.16h.24a61.46,61.46,0,0,0,6.51.37,50.15,50.15,0,0,0,22.56-5.21h.06a50.06,50.06,0,0,0,4.89-2.78l.36-.21q2.19-1.44,4.33-3.15c.2-.16.41-.3.62-.46,1.55-1.28,3.1-2.66,4.61-4.17,3.26-3.26,6.25-6.45,9.07-9.6,1.16-1.3,2.2-2.56,3.31-3.87,1.57-1.85,3.13-3.69,4.56-5.5,1.14-1.45,2.22-2.91,3.3-4.35,1.26-1.71,2.47-3.42,3.61-5.08.93-1.36,1.85-2.73,2.71-4.09,1.29-2,2.45-4,3.56-6,.45-.8,1-1.6,1.42-2.4l2.9-1.95,4.59-3.06a595.35,595.35,0,0,0,48.79-35.16l.36-.28C411.27,373.77,408.8,398.32,395,412.11Zm16.61-84.72c-.21.16-.42.26-.61.43a391.36,391.36,0,0,1-47.74,36.75c.07-.38.07-.72.13-1.08A81.74,81.74,0,0,0,364.5,355c.08-1,.11-2,.15-3,.09-2.28.1-4.53,0-6.72,0-1-.1-2.06-.18-3.09-.17-2.05-.39-4.06-.68-6-.13-.85-.25-1.71-.4-2.56-.41-2.3-.85-4.52-1.4-6.68a1.79,1.79,0,0,0-.09-.46c1.35-2.08,2.66-4.27,3.93-6.55,1.18-2.13,2.26-4.23,3.27-6.31.34-.7.62-1.38.94-2.07.63-1.39,1.26-2.76,1.82-4.12.34-.79.62-1.57.92-2.36.48-1.23,1-2.46,1.37-3.68.28-.85.52-1.62.78-2.43.36-1.16.72-2.32,1-3.46.22-.86.42-1.63.62-2.44.27-1.11.53-2.22.75-3.32.16-.8.3-1.6.45-2.39.19-1.09.35-2.16.49-3.24.11-.76.21-1.54.29-2.31.1-1.07.18-2.13.25-3.17.05-.74.1-1.48.13-2.21v-5.23c0-1.1-.11-2.19-.2-3.27,0-.6-.06-1.2-.13-1.79-.12-1.28-.3-2.56-.49-3.77-.06-.38-.09-.77-.16-1.15-.27-1.62-.59-3.22-1-4.78-.07-.33-.17-.64-.25-1-.3-1.23-.63-2.45-1-3.64-.17-.56-.36-1.1-.54-1.64-.31-1-.62-1.89-1-2.82-.21-.59-.46-1.18-.69-1.76-.33-.86-.67-1.71-1-2.56-.27-.61-.54-1.2-.81-1.79-.37-.79-.73-1.58-1.12-2.35-.3-.6-.61-1.19-.91-1.77-.4-.75-.8-1.48-1.2-2.21l-1-1.71-1.29-2.1c-.35-.57-.71-1.12-1.07-1.71s-.9-1.34-1.36-2l-1.11-1.59c-.48-.66-1-1.3-1.45-1.94s-.75-1-1.14-1.5-1-1.25-1.52-1.86l-1.15-1.41c-.56-.66-1.12-1.29-1.71-1.93s-1.18-1.33-1.79-2-1.26-1.36-1.9-2c-.5-.5-1-1-1.49-1.46l-1.28-1.29c-.44-.44-1-1-1.54-1.44s-.85-.78-1.23-1.15-1-.94-1.56-1.4l-1.17-1-1.56-1.32-1.12-.93-1.57-1.28-1-.78-1.59-1.22-.85-.67L334.47,198l-.72-.51-1.62-1.16a61.73,61.73,0,0,0,2.16-8.9l1.71.4q7.53,1.88,15.44,3.74a356.38,356.38,0,0,1,73.38,22.79c17.47,8.79,26.39,19,27.24,31.12,0,.66.2,1.27.2,2C452.22,279.78,434.79,305.62,411.61,327.39Zm52.56-100.68a66.55,66.55,0,0,0-29.24-26.4c-.47-.91-.9-1.81-1.36-2.71-1.21-2.45-2.37-4.88-3.41-7.29-.73-1.66-1.44-3.33-2.12-5-.79-1.92-1.52-3.84-2.22-5.76s-1.4-3.71-2-5.56-1.11-3.51-1.7-5.26q-1.5-4.83-2.76-9.57c-.54-2-1.06-3.92-1.54-5.88-.13-.51-.24-1-.36-1.52,3.15,1.71,6.3,3.42,9.39,5.12,22.74,12.21,51,27.45,51,39.4A57.9,57.9,0,0,1,464.17,226.71Z")

//The Z
signature.append('path')
          .attr("transform", "translate(" + 0 + "," + -20 + ") scale(.05)")
          .attr("fill", "rgba(220, 220, 220)")
          .attr("d", "M344.36,137.51l-161,203.75h78.05q29.74,0,45.15-18.9t19.6-60.9l23.45,2.45-8.75,104.65H119.31v-28.7l165.2-203.7h-81.9q-13,0-22.05,4.55a36.85,36.85,0,0,0-15.05,14.35q-6,9.8-9.62,25a270.17,270.17,0,0,0-5.78,36.58l-22.05-1V108.86h216.3Z")

//Title
var titleCont = svg.append('g')
                   .attr('class', 'title');

var title = titleCont.append('text')
               .attr('x', 60)
               .attr("y", 85)
               // .attr("font-family", "Roboto Slab, serif")
               .attr("font-family", "Arvo")
               .attr("font-style", "italic")
               .attr("font-size", 38)
               .style("fill", "#ffffff")
               .text("LGBT Acceptance Across the World")

var subtitle = titleCont.append('text')
               .attr('x', 230)
               .attr("text-anchor", "middle")
               .attr("y", 125)
               // .attr("font-family", "Roboto Slab, serif")
               .attr("font-family", "Zilla Slab")
               .attr("font-size", 16)
               .style("fill", "#ffffff")
               .style("opacity", 0.7)
               .text("Data visualisation of 174 countries and their")

var subtitle2 = titleCont.append('text')
              .attr('x', 230)
              .attr("text-anchor", "middle")
              .attr("y", 145)
              // .attr("font-family", "Roboto Slab, serif")
              .attr("font-family", "Zilla Slab")
              .attr("font-size", 16)
              .style("fill", "#ffffff")
              .style("opacity", 0.7)
              .text("Global Acceptance Index 2000-2017")

//LEGEND
var legend = svg.append('g')
                .attr("class", "legend")
                .attr("font-family", "Karla")
                .style("fill", "rgba(255, 255, 255, 0.85)")
                .attr("font-size", 13)
                .attr("letter-spacing", 0.9)
                .attr("transform", "translate(" + 0.725 * w + "," + 0.750 * h + ")")


let legendWidth = 350;
let legendHeight = 220;

legend.append('rect')
      .attr('x', 0)
      .attr('y', -5)
      .attr("width", legendWidth)
      .attr("height", legendHeight)
      .style("fill", "rgba(255, 255, 255, 0.05)")
      .style("stroke", "none")

legend.append('text')
      .style("fill", "#ffffff")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "central")
      .attr('x', legendWidth/2)
      .attr('y', legendHeight * 0.12)
      .attr("font-size", 17)
      .text("How To Read")

legend.append('text')
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "central")
      .attr('x', legendWidth/2)
      .attr('y', 60)
      .text("The height of the line represents the Global")

legend.append('text')
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "central")
      .attr('x', legendWidth/2)
      .attr('y', 77)
      .text("Acceptance Index of the individual country in")

legend.append('text')
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "central")
      .attr('x', legendWidth/2)
      .attr('y', 94)
      .text("2017. The higher the line, the more accepting")

legend.append('text')
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "central")
      .attr('x', legendWidth/2)
      .attr('y', 111)
      .text("was the country that year.")

let circlePos1 = [legendWidth * 0.15, legendHeight * 0.69]

legend.append('circle')
      .attr('cx', circlePos1[0])
      .attr('cy', circlePos1[1])
      .attr('r', 3)
      .style('fill', increaseColor)

legend.append('text')
      .attr('x', circlePos1[0] + 10)
      .attr('y', circlePos1[1])
      .attr("alignment-baseline", "central")
      .attr("letter-spacing", 1.0)
      .text("Increase in GAI from 2000 to 2017")

let circlePos2 = [circlePos1[0], circlePos1[1] + 20]

legend.append('circle')
      .attr('cx', circlePos2[0])
      .attr('cy', circlePos2[1])
      .attr('r', 3)
      .style('fill', decreaseColor)

legend.append('text')
      .attr('x', circlePos2[0] + 10)
      .attr('y', circlePos2[1])
      .attr("alignment-baseline", "central")
      .attr("letter-spacing", 1.0)
      .text("Decrease in GAI from 2000 to 2017")


//DESCRIPTION
var briefCont = svg.append('g')
                  .attr("transform", "translate(" + 0.715 * w + "," + 0.06 * h + ")")
                  .attr("class", "briefCont")

briefCont.append('rect')
      .attr('x', -20)
      .attr('y', -30)
      .attr("width", 380)
      .attr("height", 175)
      .style("fill", "rgba(255, 255, 255, 0.08)")
      .style("stroke", "none")

var brief = briefCont.append('text')
              .attr("class", "description")
              // .attr("font-family", "Zilla Slab")
              .attr("font-family", "Karla")
              .attr("font-size", 14)
              .style("fill", "#ffffff")
              .style("opacity", 0.9)

brief.append("tspan")
      .attr('x', 0)
      .text("The Global Acceptance Index (GAI) is a measure of");

brief.append("tspan")
      .attr('x', 0)
      .attr('dy', 20)
      .text("the relative level of social acceptance of LGBT people")

brief.append("tspan")
      .attr('x', 0)
      .attr('dy', 20)
      .text("and rights in each country. Grouped by continent, the")

brief.append("tspan")
      .attr('x', 0)
      .attr('dy', 20)
      .text("GAI of 174 countries as recorded in the year 2017 is")

brief.append("tspan")
      .attr('x', 0)
      .attr('dy', 20)
      .text("presented in the visualisation. The data was retrieved")

brief.append("tspan")
      .attr('x', 0)
      .attr('dy', 20)
      .text("from a report of the Williams Institute at the UCLA")

brief.append("tspan")
      .attr('x', 0)
      .attr('dy', 20)
      .text("School of Law.")


//the y scale representing GAI from 2017
var yScale = d3.scaleLinear()
               // .domain([0, d3.max(dataset, function(d) { return d.gai2017; })])
               .domain([0, 10])
               .range([innerRadius, outerRadius])

var continentGroup = Array.from(d3.group(dataset, d => d.continent), ([continent, countries]) => ({continent, countries}));
console.log("continentGroup is ");
console.log(continentGroup);

console.log(yScale.ticks(9));

var grid = svg.append("g")
              .attr("transform", "translate(" + w/2 + "," + h/2 + ")")

var yAxis = grid.append("g")
                .attr("class", "gridWrapper")
                .attr("text-anchor", "middle")
                .attr("font-family", "sans-serif")
                .attr("font-size", 10)

yAxis.selectAll("circle")
     .data(yScale.ticks(10).reverse()) //generate 5 tick values from the scale and use them for the number of circles
     .enter()
       .append("circle")
       .attr("class", "gridCircle")
       .attr("r", yScale)
       .style("stroke", "#ffffff")
       .attr("stroke-opacity", 0.15)
       .style("fill", "none")

yAxis.selectAll("text")
     .data(yScale.ticks(5).reverse())
     .enter()
     .append("text")
     .attr("y", function(d){return -yScale(d)})
     .attr("dy", "0.25rem")
     .attr("stroke", "#1e2136")
     .attr("stroke-width", 3)
     .style("fill", "rgba(255, 255, 255, 0.85)")
     .text(function(d, i){return "" + d + ""})
     .clone(true)
     //the commented out code would create the scale on the bottom bit
            // .attr("y", d => yScale(d))
          // .selectAll(function() { return [this, this.previousSibling]; })
          // .clone(true)
            .attr("fill", "currentColor")
            .attr("stroke", "none")


//LEGEND GRAPHIC
var graphicHeight = 250;

var legendGCont = svg.append("g")
                .attr("transform", "translate(" + 0.087 * w + "," + 0.60 * h + ")")
                .attr("class", "legendGCont")


var smallScaleY = d3.scaleLinear()
                    .domain([10, 0])
                    .range([0, graphicHeight])

var smallAxis = d3.axisRight(smallScaleY)


legendGCont.append('rect')
      .attr('x', -40)
      .attr('y', -20)
      .attr("width", 170)
      .attr("height", graphicHeight + 40)
      .style("fill", "rgba(255, 255, 255, 0.06)")
      .style("stroke", "none")

//1st
legendGCont.append('line')
           .attr('x1', 0)
           .attr('x2', 0)
           .attr('y1', graphicHeight)
           .attr('y2', function(){ return graphicHeight - smallScaleY(dataset[3].gai2017); })
           .style("stroke", "#ffffff")

legendGCont.append('circle')
            .attr('cx', 0)
            .attr('cy', function(){ return graphicHeight - smallScaleY(dataset[3].gai2017); })
            .attr("r", 3)
            .style("fill", increaseColor)

legendGCont.append('text')
           .text(function() { return dataset[3].country })
           .attr("alignment-baseline", "central")
           .attr("fill", "rgba(255, 255, 255, 0.75)")
           .attr("font-family", "Karla, sans-serif")
           .attr("font-size", 11)
           .attr("letter-spacing", 1)
           .attr("transform", function() {
                var y = graphicHeight - smallScaleY(dataset[3].gai2017) - 10;

             return "translate(" + 0 + "," + y + ") rotate(" + -90 + ")" } )

//2nd
legendGCont.append('line')
            .attr('x1', 20)
            .attr('x2', 20)
            .attr('y1', graphicHeight)
            .attr('y2', function(){ return graphicHeight - smallScaleY(dataset[74].gai2017); })
            .style("stroke", "#ffffff")
            .style("stroke-width", "1px")

legendGCont.append('circle')
            .attr('cx', 20)
            .attr('cy', function(){ return graphicHeight - smallScaleY(dataset[74].gai2017); })
            .attr("r", 3)
            .style("fill", decreaseColor)

legendGCont.append('text')
           .text(function() { return dataset[74].country })
           .attr("alignment-baseline", "central")
           .attr("fill", "rgba(255, 255, 255, 0.75)")
           .attr("font-family", "Karla, sans-serif")
           .attr("font-size", 11)
           .attr("letter-spacing", 1)
           .attr("transform", function() {
                var y = graphicHeight - smallScaleY(dataset[74].gai2017) - 10;

             return "translate(" + 20 + "," + y + ") rotate(" + -90 + ")" } )

//3rd
legendGCont.append('line')
            .attr('x1', 40)
            .attr('x2', 40)
            .attr('y1', graphicHeight)
            .attr('y2', function(){ return graphicHeight - smallScaleY(dataset[103].gai2017); })
            .style("stroke", "#ffffff")
            .style("stroke-width", "1px")

legendGCont.append('circle')
            .attr('cx', 40)
            .attr('cy', function(){ return graphicHeight - smallScaleY(dataset[103].gai2017); })
            .attr("r", 3)
            .style("fill", increaseColor)

legendGCont.append('text')
           .text(function() { return dataset[103].country })
           .attr("alignment-baseline", "central")
           .attr("fill", "rgba(255, 255, 255, 0.75)")
           .attr("font-family", "Karla, sans-serif")
           .attr("font-size", 11)
           .attr("letter-spacing", 1)
           .attr("transform", function() {
                var y = graphicHeight - smallScaleY(dataset[103].gai2017) - 10;

             return "translate(" + 40 + "," + y + ") rotate(" + -90 + ")" } )

//axis
legendGCont.append('g')
            .attr("transform", "translate(" + 60 + "," + 0 + ")")
            .attr("class", "smallAxis")
            .call(smallAxis)
            .selectAll("text")
                .attr("fill", "rgba(255, 255, 255, 0.75)")
                .attr("font-family", "Karla, sans-serif")
                .attr("font-size", 8)

legendGCont.append('text')
           .attr("transform", "translate(" + 95 + "," + graphicHeight/2 + ") rotate(" + -90 + ")")
           .attr("alignment-baseline", "central")
           .attr("text-anchor", "middle")
           .attr("fill", "rgba(255, 255, 255, 0.75)")
           .attr("font-family", "Karla, sans-serif")
           .attr("font-size", 11)
           .text("Global Acceptance Index")

//COUNTRY BANDS
var pie = d3.pie()
    // .startAngle(-90 * Math.PI/180)
    // .endAngle(-90 * Math.PI/180 + 2*Math.PI)
    .padAngle(0.05)
    .sort(null)
    .value(d => d.countries.length)

var bands = pie(continentGroup)

console.log("bands are");
console.log(bands);

//generator for each arc
var band = d3.arc()
             .innerRadius(innerRadius - 5)
             .outerRadius(innerRadius)

var bandCont = svg.append("g")
                  .attr("class", "bandsWrapper")
                  .attr("text-anchor", "middle")
                  .attr("font-family", "sans-serif")
                  .attr("font-size", 12)
                  .attr("letter-spacing", 1)
                  .attr("transform", "translate(" + w/2 + "," + h/2 + ")");
//draw each band
var continentBands = bandCont.selectAll("path")
                      .data(bands)
                      .enter()
                      .append("path")
                      .attr("id", function(d, i) {
                        return "bandPath" + i + "";
                      })
                      .attr("d", band)
                      .attr("fill", function(d,i){return bandColors[i]})
                      .style("stroke", "none");


var continentNames = bandCont.selectAll("text")
                      .data(continentGroup)
                      .enter()
                      .append("text")
                      .attr("x", function(d, i){

                        if (d.continent == "South America") { return 30 }
                        else if (d.continent == "North America") { return 50 }
                        else { return 105 }
                        })   //Move the text from the start angle of the arc
                      .attr("dy", 20) //Move the text down
                      .append("textPath")
                      .attr("xlink:href", function(d, i) {
                                  return "#bandPath" + i + "";})
                      .style("text-anchor","middle")
                      .attr("font-family", "Karla")
                      .attr("stroke", "none")
                      .style("fill", "#ffffff")
                      .style("opacity", 0.5)
                      .attr("font-size", 10)
                      .text(function(d, i){

                        if (d.continent == "South America") { return "S America" }
                        else { return "" + d.continent + "" }
                        })

//Lines
// var lines = svg.selectAll("line")
//                .data(dataset)
//                .enter()
//                .append("line")
//                .attr("x1", xScale(0))
//                .attr("y1", yScale(0))
//                .attr("x2", function(d){return xScale(d.country);})
//                .attr("y2", function(d){return yScale(d.gai2017);})
//                .attr("stroke", "white")
//                .style("stroke-width",".5px")
//                .attr("opacity", 0.7)
//                .attr("transform", function(d, i) {
//                  return "translate(" + w/2 + "," + h/2 + ") rotate(" + (i * 360 / dataset.length-1) + ")";})

console.log(bands[0].data.countries);

//AFRICA
var africaScale = d3.scalePoint()
                    .domain(bands[0].data.countries)
                    .range([bands[0].startAngle, bands[0].endAngle])

var africaGroup = svg.append('g')
                     .attr("class", "lineGroup")
                     .attr("transform", "translate(" + w/2 + "," + h/2 + ")");

var africaLines = africaGroup.selectAll("line")
                  .data(bands[0].data.countries)
                  .enter()
                  .append("line")
                  .attr("x1", function(d, i){
                                          let all = (bands[0].endAngle - bands[0].startAngle - 0.05)/bands[0].data.countries.length;
                                          let a = 0.05 + all * i;
                                          let p = d3.pointRadial(a, innerRadius);
                                          return p[0]; })
                  .attr("y1", function(d, i){
                                          let all = (bands[0].endAngle - bands[0].startAngle - 0.05)/bands[0].data.countries.length;
                                          let a = 0.05 + all * i;
                                          let p = d3.pointRadial(a, innerRadius);
                                          return p[1]; })
                  .attr("x2", function(d, i){
                                        let all = (bands[0].endAngle - bands[0].startAngle - 0.05)/bands[0].data.countries.length;
                                        let a = 0.05 + all * i;
                                        let p = d3.pointRadial(a, yScale(d.gai2017));
                                        return p[0];  })
                  .attr("y2", function(d, i){
                                        let all = (bands[0].endAngle - bands[0].startAngle - 0.05)/bands[0].data.countries.length;
                                        let a = 0.05 + all * i;
                                        let p = d3.pointRadial(a, yScale(d.gai2017));
                                        return p[1];  })
                  .attr("stroke", "white")
                  .style("stroke-width","1px")
                  .attr("opacity", 0.7);

var africaCircles = africaGroup.selectAll("circle")
                    .data(bands[0].data.countries)
                    .enter()
                    .append("circle")
                    .attr("cx", function(d, i){
                                          let all = (bands[0].endAngle - bands[0].startAngle - 0.05)/bands[0].data.countries.length;
                                          let a = 0.05 + all * i;
                                          let p = d3.pointRadial(a, yScale(d.gai2017));
                                          return p[0];  })
                    .attr("cy", function(d, i){
                                          let all = (bands[0].endAngle - bands[0].startAngle - 0.05)/bands[0].data.countries.length;
                                          let a = 0.05 + all * i;
                                          let p = d3.pointRadial(a, yScale(d.gai2017));
                                          return p[1];  })
                    .attr("r", function(d){return 2 + Math.abs(d.difference)/2;})
                    .attr("fill", "white")
                    .attr("fill", function(d) {
                      if(d.difference <= 0) return decreaseColor
                      else return increaseColor;
                    })


var africaNames = africaGroup.selectAll("text")
                   .data(bands[0].data.countries)
                   .enter()
                   .append("text")
                   .attr("fill", "rgba(255, 255, 255, 0.75)")
                   .attr("alignment-baseline", "central")
                   .attr("font-family", "Karla, sans-serif")
                   .attr("font-size", 7)
                   .attr("letter-spacing", 1)
                   .attr("x", 0)
                   .attr("y", 0)
                   .attr("transform", function(d, i) {

                                 var all = (bands[0].endAngle - bands[0].startAngle - 0.05)/bands[0].data.countries.length;
                                 var a = 0.05 + all * i;

                                 var p = d3.pointRadial(a, yScale(d.gai2017) + 8);

                                  return "translate(" + p[0] + "," + p[1] + ") rotate(" + (a * (180/Math.PI) - 90 )+ ")";})
                  .text(function (d) {
                    return "" + d.country + ""
                  })

//ASIA
var asiaScale = d3.scaleLinear()
                    .domain(bands[1].data.countries)
                    .range([bands[1].startAngle, bands[1].endAngle])

var asiaGroup = svg.append('g')
                     .attr("class", "lineGroup")
                     .attr("transform", function(d, i) {
                       return "translate(" + w/2 + "," + h/2 + ")";})

var asiaLines = asiaGroup.selectAll("line")
                 .data(bands[1].data.countries)
                 .enter()
                 .append("line")
                 .attr("x1", function(d, i){
                                         var all = (bands[1].endAngle - bands[1].startAngle - 0.05)/bands[1].data.countries.length;
                                         var a = bands[0].endAngle + 0.05 + all * i;
                                         var p = d3.pointRadial(a, innerRadius);
                                         return p[0]; })
                 .attr("y1", function(d, i){
                                         var all = (bands[1].endAngle - bands[1].startAngle - 0.05)/bands[1].data.countries.length;
                                         var a = bands[0].endAngle + 0.05 + all * i;
                                         var p = d3.pointRadial(a, innerRadius);
                                         return p[1]; })
                 .attr("x2", function(d, i){
                                       var all = (bands[1].endAngle - bands[1].startAngle - 0.05)/bands[1].data.countries.length;
                                       var a = bands[0].endAngle + 0.05 + all * i;
                                       var p = d3.pointRadial(a, yScale(d.gai2017));
                                       return p[0];  })
                 .attr("y2", function(d, i){
                                       var all = (bands[1].endAngle - bands[1].startAngle - 0.05)/bands[1].data.countries.length;
                                       var a = bands[0].endAngle + 0.05 + all * i;
                                       var p = d3.pointRadial(a, yScale(d.gai2017));
                                       return p[1];  })
                 .attr("stroke", "white")
                 .style("stroke-width","1px")
                 .attr("opacity", 0.7);

 var asiaCircles = asiaGroup.selectAll("circle")
                     .data(bands[1].data.countries)
                     .enter()
                     .append("circle")
                     .attr("cx", function(d, i){
                                           var all = (bands[1].endAngle - bands[1].startAngle - 0.05)/bands[1].data.countries.length;
                                           var a = bands[0].endAngle + 0.05 + all * i;
                                           var p = d3.pointRadial(a, yScale(d.gai2017));
                                           return p[0];  })
                     .attr("cy", function(d, i){
                                           var all = (bands[1].endAngle - bands[1].startAngle - 0.05)/bands[1].data.countries.length;
                                           var a = bands[0].endAngle + 0.05 + all * i;
                                           var p = d3.pointRadial(a, yScale(d.gai2017));
                                           return p[1];  })
                     .attr("r", function(d){return 2 + Math.abs(d.difference)/2;})
                     .attr("fill", "white")
                     .attr("fill", function(d) {
                       if(d.difference <= 0) return decreaseColor
                       else return increaseColor;
                     })

var asiaNames = asiaGroup.selectAll("text")
                   .data(bands[1].data.countries)
                   .enter()
                   .append("text")
                   .attr("fill", "rgba(255, 255, 255, 0.75)")
                   .attr("alignment-baseline", "central")
                   .attr("font-family", "Karla, sans-serif")
                   .attr("font-size", 7)
                   .attr("letter-spacing", 1)
                   .attr("x", 0)
                   .attr("y", 0)
                   .attr("transform", function(d, i) {

                                 var all = (bands[1].endAngle - bands[1].startAngle - 0.05)/bands[1].data.countries.length;
                                 var a = bands[0].endAngle + 0.05 + all * i;

                                 var p = d3.pointRadial(a, yScale(d.gai2017) + 8);

                                  return "translate(" + p[0] + "," + p[1] + ") rotate(" + (a * (180/Math.PI) - 90 )+ ")";})
                  .text(function (d) {
                    return "" + d.country + ""
                  })

 //AUSTRALIA
 var australiaScale = d3.scaleLinear()
                     .domain(bands[2].data.countries)
                     .range([bands[2].startAngle, bands[2].endAngle])

 var australiaGroup = svg.append('g')
                      .attr("class", "lineGroup")
                      .attr("transform", function(d, i) {
                        return "translate(" + w/2 + "," + h/2 + ")";})

 var australiaLines = australiaGroup.selectAll("line")
                  .data(bands[2].data.countries)
                  .enter()
                  .append("line")
                  .attr("x1", function(d, i){
                                          var all = (bands[2].endAngle - bands[2].startAngle - 0.05)/bands[2].data.countries.length;
                                          var a = bands[1].endAngle + 0.05 + all * i;
                                          var p = d3.pointRadial(a, innerRadius);
                                          return p[0]; })
                  .attr("y1", function(d, i){
                                          var all = (bands[2].endAngle - bands[2].startAngle - 0.05)/bands[2].data.countries.length;
                                          var a = bands[1].endAngle + 0.05 + all * i;
                                          var p = d3.pointRadial(a, innerRadius);
                                          return p[1]; })
                  .attr("x2", function(d, i){
                                        var all = (bands[2].endAngle - bands[2].startAngle - 0.05)/bands[2].data.countries.length;
                                        var a = bands[1].endAngle + 0.05 + all * i;
                                        var p = d3.pointRadial(a, yScale(d.gai2017));
                                        return p[0];  })
                  .attr("y2", function(d, i){
                                        var all = (bands[2].endAngle - bands[2].startAngle - 0.05)/bands[2].data.countries.length;
                                        var a = bands[1].endAngle + 0.05 + all * i;
                                        var p = d3.pointRadial(a, yScale(d.gai2017));
                                        return p[1];  })
                  .attr("stroke", "white")
                  .style("stroke-width","1px")
                  .attr("opacity", 0.7);

var australiaCircles = australiaGroup.selectAll("circle")
                    .data(bands[2].data.countries)
                    .enter()
                    .append("circle")
                    .attr("cx", function(d, i){
                                          var all = (bands[2].endAngle - bands[2].startAngle - 0.05)/bands[2].data.countries.length;
                                          var a = bands[1].endAngle + 0.05 + all * i;
                                          var p = d3.pointRadial(a, yScale(d.gai2017));
                                          return p[0];  })
                    .attr("cy", function(d, i){
                                          var all = (bands[2].endAngle - bands[2].startAngle - 0.05)/bands[2].data.countries.length;
                                          var a = bands[1].endAngle + 0.05 + all * i;
                                          var p = d3.pointRadial(a, yScale(d.gai2017));
                                          return p[1];  })
                    .attr("r", function(d){return 2 + Math.abs(d.difference)/2;})
                    .attr("fill", "white")
                    .attr("fill", function(d) {
                      if(d.difference <= 0) return decreaseColor
                      else return increaseColor;
                    })

var australiaNames = australiaGroup.selectAll("text")
                  .data(bands[2].data.countries)
                  .enter()
                  .append("text")
                  .attr("fill", "rgba(255, 255, 255, 0.75)")
                  .attr("alignment-baseline", "central")
                  .attr("text-anchor", "end")
                  .attr("font-family", "Karla, sans-serif")
                  .attr("font-size", 7)
                  .attr("letter-spacing", 1)
                  .attr("x", 0)
                  .attr("y", 0)
                  .attr("transform", function(d, i) {

                                var all = (bands[2].endAngle - bands[2].startAngle - 0.05)/bands[2].data.countries.length;
                                var a = bands[1].endAngle + 0.05 + all * i;

                                var p = d3.pointRadial(a, yScale(d.gai2017) + 8);

                                 return "translate(" + p[0] + "," + p[1] + ") rotate(" + (a * (180/Math.PI) + 90 )+ ")";})
                 .text(function (d) {
                   return "" + d.country + ""
                 })

//EUROPE
var europeScale = d3.scaleLinear()
                    .domain(bands[3].data.countries)
                    .range([bands[3].startAngle, bands[3].endAngle])

var europeGroup = svg.append('g')
                     .attr("class", "lineGroup")
                     .attr("transform", function(d, i) {
                       return "translate(" + w/2 + "," + h/2 + ")";})

var europeLines = europeGroup.selectAll("line")
                 .data(bands[3].data.countries)
                 .enter()
                 .append("line")
                 .attr("x1", function(d, i){
                                         var all = (bands[3].endAngle - bands[3].startAngle - 0.05)/bands[3].data.countries.length;
                                         var a = bands[2].endAngle + 0.05 + all * i;
                                         var p = d3.pointRadial(a, innerRadius);
                                         return p[0]; })
                 .attr("y1", function(d, i){
                                         var all = (bands[3].endAngle - bands[3].startAngle - 0.05)/bands[3].data.countries.length;
                                         var a = bands[2].endAngle + 0.05 + all * i;
                                         var p = d3.pointRadial(a, innerRadius);
                                         return p[1]; })
                 .attr("x2", function(d, i){
                                       var all = (bands[3].endAngle - bands[3].startAngle - 0.05)/bands[3].data.countries.length;
                                       var a = bands[2].endAngle + 0.05 + all * i;
                                       var p = d3.pointRadial(a, yScale(d.gai2017));
                                       return p[0];  })
                 .attr("y2", function(d, i){
                                       var all = (bands[3].endAngle - bands[3].startAngle - 0.05)/bands[3].data.countries.length;
                                       var a = bands[2].endAngle + 0.05 + all * i;
                                       var p = d3.pointRadial(a, yScale(d.gai2017));
                                       return p[1];  })
                 .attr("stroke", "white")
                 .style("stroke-width","1px")
                 .attr("opacity", 0.7);

var europeCircles = europeGroup.selectAll("circle")
                   .data(bands[3].data.countries)
                   .enter()
                   .append("circle")
                   .attr("cx", function(d, i){
                                         var all = (bands[3].endAngle - bands[3].startAngle - 0.05)/bands[3].data.countries.length;
                                         var a = bands[2].endAngle + 0.05 + all * i;
                                         var p = d3.pointRadial(a, yScale(d.gai2017));
                                         return p[0];  })
                   .attr("cy", function(d, i){
                                         var all = (bands[3].endAngle - bands[3].startAngle - 0.05)/bands[3].data.countries.length;
                                         var a = bands[2].endAngle + 0.05 + all * i;
                                         var p = d3.pointRadial(a, yScale(d.gai2017));
                                         return p[1];  })
                   .attr("r", function(d){return 2 + Math.abs(d.difference)/2;})
                   .attr("fill", "white")
                   .attr("fill", function(d) {
                     if(d.difference <= 0) return decreaseColor
                     else return increaseColor;
                   })

var europeNames = europeGroup.selectAll("text")
                  .data(bands[3].data.countries)
                  .enter()
                  .append("text")
                  .attr("fill", "rgba(255, 255, 255, 0.75)")
                  .attr("alignment-baseline", "central")
                  .attr("text-anchor", "end")
                  .attr("font-family", "Karla, sans-serif")
                  .attr("font-size", 7)
                  .attr("letter-spacing", 1)
                  .attr("x", 0)
                  .attr("y", 0)
                  .attr("transform", function(d, i) {

                                var all = (bands[3].endAngle - bands[3].startAngle - 0.05)/bands[3].data.countries.length;
                                var a = bands[2].endAngle + 0.05 + all * i;

                                var p = d3.pointRadial(a, yScale(d.gai2017) + 8);

                                 return "translate(" + p[0] + "," + p[1] + ") rotate(" + (a * (180/Math.PI) + 90 )+ ")";})
                 .text(function (d) {
                   return "" + d.country + ""
                 })

//NORTH AMERICA
var northAScale = d3.scaleLinear()
                    .domain(bands[4].data.countries)
                    .range([bands[4].startAngle, bands[4].endAngle])

var northAGroup = svg.append('g')
                     .attr("class", "lineGroup")
                     .attr("transform", function(d, i) {
                       return "translate(" + w/2 + "," + h/2 + ")";})

var northALines = northAGroup.selectAll("line")
                 .data(bands[4].data.countries)
                 .enter()
                 .append("line")
                 .attr("x1", function(d, i){
                                         var all = (bands[4].endAngle - bands[4].startAngle - 0.05)/bands[4].data.countries.length;
                                         var a = bands[3].endAngle + 0.05 + all * i;
                                         var p = d3.pointRadial(a, innerRadius);
                                         return p[0]; })
                 .attr("y1", function(d, i){
                                         var all = (bands[4].endAngle - bands[4].startAngle - 0.05)/bands[4].data.countries.length;
                                         var a = bands[3].endAngle + 0.05 + all * i;
                                         var p = d3.pointRadial(a, innerRadius);
                                         return p[1]; })
                 .attr("x2", function(d, i){
                                       var all = (bands[4].endAngle - bands[4].startAngle - 0.05)/bands[4].data.countries.length;
                                       var a = bands[3].endAngle + 0.05 + all * i;
                                       var p = d3.pointRadial(a, yScale(d.gai2017));
                                       return p[0];  })
                 .attr("y2", function(d, i){
                                       var all = (bands[4].endAngle - bands[4].startAngle - 0.05)/bands[4].data.countries.length;
                                       var a = bands[3].endAngle + 0.05 + all * i;
                                       var p = d3.pointRadial(a, yScale(d.gai2017));
                                       return p[1];  })
                 .attr("stroke", "white")
                 .style("stroke-width","1px")
                 .attr("opacity", 0.7);

var northACircles = northAGroup.selectAll("circle")
                   .data(bands[4].data.countries)
                   .enter()
                   .append("circle")
                   .attr("cx", function(d, i){
                                         var all = (bands[4].endAngle - bands[4].startAngle - 0.05)/bands[4].data.countries.length;
                                         var a = bands[3].endAngle + 0.05 + all * i;
                                         var p = d3.pointRadial(a, yScale(d.gai2017));
                                         return p[0];  })
                   .attr("cy", function(d, i){
                                         var all = (bands[4].endAngle - bands[4].startAngle - 0.05)/bands[4].data.countries.length;
                                         var a = bands[3].endAngle + 0.05 + all * i;
                                         var p = d3.pointRadial(a, yScale(d.gai2017));
                                         return p[1];  })
                   .attr("r", function(d){return 2 + Math.abs(d.difference)/2;})
                   .attr("fill", "white")
                   .attr("fill", function(d) {
                     if(d.difference <= 0) return decreaseColor
                     else return increaseColor;
                   })


var northANames = northAGroup.selectAll("text")
                   .data(bands[4].data.countries)
                   .enter()
                   .append("text")
                   .attr("fill", "rgba(255, 255, 255, 0.75)")
                   .attr("alignment-baseline", "central")
                   .attr("text-anchor", "end")
                   .attr("font-family", "Karla, sans-serif")
                   .attr("font-size", 7)
                   .attr("letter-spacing", 1)
                   .attr("x", 0)
                   .attr("y", 0)
                   .attr("transform", function(d, i) {

                                 var all = (bands[4].endAngle - bands[4].startAngle - 0.05)/bands[4].data.countries.length;
                                 var a = bands[3].endAngle + 0.05 + all * i;

                                 var p = d3.pointRadial(a, yScale(d.gai2017) + 8);

                                  return "translate(" + p[0] + "," + p[1] + ") rotate(" + (a * (180/Math.PI) + 90 )+ ")";})
                  .text(function (d) {
                    return "" + d.country + ""
                  })

//SOUTH AMERICA
var southAScale = d3.scaleLinear()
                    .domain(bands[5].data.countries)
                    .range([bands[5].startAngle, bands[5].endAngle])

var southAGroup = svg.append('g')
                     .attr("class", "lineGroup")
                     .attr("transform", function(d, i) {
                       return "translate(" + w/2 + "," + h/2 + ")";})

var southALines = southAGroup.selectAll("line")
                 .data(bands[5].data.countries)
                 .enter()
                 .append("line")
                 .attr("x1", function(d, i){
                                         var all = (bands[5].endAngle - bands[5].startAngle - 0.05)/bands[5].data.countries.length;
                                         var a = bands[4].endAngle + 0.05 + all * i;
                                         var p = d3.pointRadial(a, innerRadius);
                                         return p[0]; })
                 .attr("y1", function(d, i){
                                         var all = (bands[5].endAngle - bands[5].startAngle - 0.05)/bands[5].data.countries.length;
                                         var a = bands[4].endAngle + 0.05 + all * i;
                                         var p = d3.pointRadial(a, innerRadius);
                                         return p[1]; })
                 .attr("x2", function(d, i){
                                       var all = (bands[5].endAngle - bands[5].startAngle - 0.05)/bands[5].data.countries.length;
                                       var a = bands[4].endAngle + 0.05 + all * i;
                                       var p = d3.pointRadial(a, yScale(d.gai2017));
                                       return p[0];  })
                 .attr("y2", function(d, i){
                                       var all = (bands[5].endAngle - bands[5].startAngle - 0.05)/bands[5].data.countries.length;
                                       var a = bands[4].endAngle + 0.05 + all * i;
                                       var p = d3.pointRadial(a, yScale(d.gai2017));
                                       return p[1];  })
                 .attr("stroke", "white")
                 .style("stroke-width","1px")
                 .attr("opacity", 0.7);

var southACircles = southAGroup.selectAll("circle")
                   .data(bands[5].data.countries)
                   .enter()
                   .append("circle")
                   .attr("cx", function(d, i){
                                         var all = (bands[5].endAngle - bands[5].startAngle - 0.05)/bands[5].data.countries.length;
                                         var a = bands[4].endAngle + 0.05 + all * i;
                                         var p = d3.pointRadial(a, yScale(d.gai2017));
                                         return p[0];  })
                   .attr("cy", function(d, i){
                                         var all = (bands[5].endAngle - bands[5].startAngle - 0.05)/bands[5].data.countries.length;
                                         var a = bands[4].endAngle + 0.05 + all * i;
                                         var p = d3.pointRadial(a, yScale(d.gai2017));
                                         return p[1];  })
                   .attr("r", function(d){return 2 + Math.abs(d.difference)/2;})
                   .attr("fill", "white")
                   .attr("fill", function(d) {
                     if(d.difference <= 0) return decreaseColor
                     else return increaseColor;
                   })

var southANames = southAGroup.selectAll("text")
                   .data(bands[5].data.countries)
                   .enter()
                   .append("text")
                   .attr("fill", "rgba(255, 255, 255, 0.75)")
                   .attr("alignment-baseline", "central")
                   .attr("text-anchor", "end")
                   .attr("font-family", "Karla, sans-serif")
                   .attr("font-size", 7)
                   .attr("letter-spacing", 1)
                   .attr("x", 0)
                   .attr("y", 0)
                   .attr("transform", function(d, i) {

                                 var all = (bands[5].endAngle - bands[5].startAngle - 0.05)/bands[5].data.countries.length;
                                 var a = bands[4].endAngle + 0.05 + all * i;

                                 var p = d3.pointRadial(a, yScale(d.gai2017) + 8);

                                  return "translate(" + p[0] + "," + p[1] + ") rotate(" + (a * (180/Math.PI) + 90 )+ ")";})
                  .text(function (d) {
                    return "" + d.country + ""
                  })


});
