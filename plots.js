
// d3.json("samples.json").then(function(data){
//   console.log(data);
// });

var firstName = ""

function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    firstName = data;
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    buildMetadata(firstName.names[0]);
    buildCharts(firstName.names[0]);
})



}

init();

function optionChanged(newSample) {
  console.log(newSample)
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);

}

function buildCharts(patientID) {

  // Read the data
  d3.json("samples.json").then((data => {

  // Define samples
      var samples = data.samples
      var metadata = data.metadata
      var filteredMetadata = metadata.filter(patientInfo => patientInfo.id == patientID)[0]

  // Filter by patient IDdata
      var filteredSample = samples.filter(patientInfo => patientInfo.id == patientID)[0]

  // Create variable for values for bar chart

      var sample_values = filteredSample.sample_values

  // Use otu_ids as labels
      var otu_ids = filteredSample.otu_ids

  // use otu_labels as hovertext
      var otu_labels = filteredSample.otu_labels

  // BAR CHART
    // Create the trace
      var bar_data = [{
        // Use otu_ids for x values
          x: sample_values.slice(0, 10).reverse(),
        // Use sample_values for y values
          y: otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse(),
        // Use otu_labels for text values
          text: otu_labels.slice(0, 10).reverse(),
          type: 'bar',
          orientation: 'h',
          marker: {
              color: 'teal'
          },
      }]
  // Define plot layout
      var bar_layout = {
          title: "Top 10 Microbial Species in Belly Buttons",
          xaxis: { title: "Bacteria Sample Values" },
          yaxis: { title: "OTU IDs" }
      };
  // Display plot
      Plotly.newPlot('bar', bar_data, bar_layout)

// BUBBLE CHART
  // Create the trace
      var bubble_data = [{
        // Use otu_ids for x values
          x: otu_ids,
        // Use sample_values for y values
          y: sample_values,
        // Use otu_labels for the text values
          text: otu_labels,
          mode: 'markers',
          marker: {
        // Use otu_ids for the marker colors
              color: otu_ids,
        // Use sample_values for the marker size
              size: sample_values,
              colorscale: 'viridis'
          }
      }];
  // Define plot layout
      var layout = {
          title: "Belly Button Samples",
          xaxis: { title: "OTU IDs" },
          yaxis: { title: "Sample Values" }
      };
  // Display plot
      Plotly.newPlot('bubble', bubble_data, layout)

// GAUGE CHART
  // Create variable for washing frequency data
      var washFrequency = filteredMetadata.wfreq
  // Create the trace
      var gauge_data = [
          {   domain: { x: [0, 1], y: [0, 1] },
              value: washFrequency,
              title: { text: "Belly Button Washing Frequency <br> scrubs per Week" },
              type: "indicator",
              mode: "gauge+number",
              gauge: {
                  bar: {color: 'steelblue'},
                  axis: { range: [null, 9] },
                  steps: [
                      { range: [0, 2], color: 'salmon'},
                      { range: [2, 4], color: 'darkorange' },
                      { range: [4, 6], color: 'yellow' },
                      { range: [6, 8], color: 'mediumaquamarine' },
                      { range: [8, 10], color: 'green' }],
          }}];
  // Define Plot layout
      var gauge_layout = { width: 500, height: 400};
  // Display plot
      Plotly.newPlot('gauge', gauge_data, gauge_layout);
  }))
};

// Demographics Panel 
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      // Filter the data for the object with the desired sample number
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      // Use d3 to select the panel with id of `#sample-metadata`
      var PANEL = d3.select("#sample-metadata");
  
      // Use `.html("") to clear any existing metadata
      PANEL.html("");
  
      // Use `Object.entries` to add each key and value pair to the panel
      // Hint: Inside the loop, you will need to use d3 to append new
      // tags for each key-value in the metadata.
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
  
    });
  }
