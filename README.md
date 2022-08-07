# Belly Button Diversity

CWRU Data Analytics Module Twelve Challenge


## Overview of Project

The project involved loading data into a javascript (DOM) environment and using Plotly to create several dynamic visualizations/plots regarding belly button bacteria test results in a dashboard which was published on gitHub Pages.   

### Summary

The effort involved using the d3 library to first load json data in java through a local server.  That data was then rendered via bar, gauge and bubble charts using Plotly.   Bootstrap and local css were used for formatting the grid and customizing the jumbotron, in addition to modifying the color schemes and layout of the dashboard and plots.  The dashboard is dynamic in that it loads the first patient sample information upon initialization and then a pulldown allows a user to pick other patient ID's when, upon change, all the plots regenerate in addition to a meta-data panel with summary information about the patient.  

## Major components of the work:

# Setting up a local server
![img](https://github.com/fhsal/Mars/blob/main/images/jumbotron.png)

# Setting up a local server
![img](https://github.com/fhsal/Mars/blob/main/images/jumbotron.png)

: using a jupyter notebook to step-wise scrape news title, article summary and featured image  

* Deliverable 2: exporting the jupyter notebook to a py file and updating it to create functions to automate scraping through the web sites and looping through the html to grab hemisphere images from an additional site, storing that image information and metadata in Mongo.  That data was then read from Mongo and displayed on a page rendered using Flask  

* Deliverable 3: adding Bootstrap formatting to the page, including changing the styling of the scrape button, jumbotron and turning the hemisphere images into a single row similar to thumbnails. 

## Rendered page and Mongo database images

### Page header with jumbotron and button styled using style.scc

![img](https://github.com/fhsal/Mars/blob/main/images/jumbotron.png)


### Page body with news summary, main image and table of facts

![img](https://github.com/fhsal/Mars/blob/main/images/mid-page.png)


### Hemisphere images shown in a single row using Bootstrap

![img](https://github.com/fhsal/Mars/blob/main/images/hemispheres.png)


### Mongo database with stored hemisphere information

![img](https://github.com/fhsal/Mars/blob/main/images/mongo.png)

