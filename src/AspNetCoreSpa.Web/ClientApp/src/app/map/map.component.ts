import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
import { geoPath } from "d3-geo";

@Component({
  selector: 'appc-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
    var width = 800,
        height = 600;
    var pathSettings = {
      defaultColor: 'green',
      mouseoverColor: 'pink'
    };
    var svg = d3.select('#map').append('svg')
        .attr("width", width)
        .attr("height", height);
      
    var projection = d3.geoMercator()
        .center([121,24])
        .scale(6000);

    var path = d3.geoPath()
        .projection(projection);

    console.log('test');
    
    d3.json("assets/data/taiwanGeo.json")
      .then(function (countries){
        var g = svg.append("g");

        g.selectAll("path")
          .data(countries.features)
          .enter()
          .append("path")
          .attr("d", path)
          .style('fill', pathSettings.defaultColor)
          .on("mouseover",function(d) {
            console.log("just had a mouseover", d3.select(d));
            d3.select(this)
              .style('fill', pathSettings.mouseoverColor)
              .style("cursor", "pointer")
          })
          .on("mouseout",function(d){
            d3.select(this)
              .style('fill', pathSettings.defaultColor)
              .style("cursor", "default"); 
          });
      });
  }

}
