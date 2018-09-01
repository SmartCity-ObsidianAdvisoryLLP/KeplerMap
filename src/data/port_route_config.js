// Copyright (c) 2018 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

export const config = {
  "version": "v1",
  "config": {
    "visState": {
      "filters": [
        {
          "dataId": "forward_data",
          "id": "e5gpwfoce",
          "name": "Disability",
          "type": "multiSelect",
          "value": [
            "失明",
            "拐杖",
            "無",
            "行動不便",
            "輪椅",
            "電動輪椅"
          ],
          "enlarged": false,
          "plotType": "histogram",
          "yAxis": null
        },
        {
          "dataId": "districtdata",
          "id": "b4w158844",
          "name": "Drop off district",
          "type": "multiSelect",
          "value": [
            "九龍城區",
            "屯門區",
            "深水埗區",
            "南區",
            "西貢區",
            "觀塘區",
            "東區",
            "大埔區",
            "北區",
            "元朗區",
            "中西區"
          ],
          "enlarged": false,
          "plotType": "histogram",
          "yAxis": null
        },
        {
          "dataId": "districtdata",
          "id": "gskoqs553",
          "name": "Pickup District",
          "type": "multiSelect",
          "value": [
            "屯門區",
            "九龍城區",
            "東區",
            "沙田區",
            "灣仔區",
            "中西區",
            "大埔區",
            "元朗區",
            "南區",
            "北區",
            "深水埗區",
            "油尖旺區",
            "荃灣區"
          ],
          "enlarged": false,
          "plotType": "histogram",
          "yAxis": null
        },
        {
          "dataId": "districtdata",
          "id": "nij0h4nyn",
          "name": "Purpose",
          "type": "multiSelect",
          "value": [
            "工作",
            "訓練"
          ],
          "enlarged": false,
          "plotType": "histogram",
          "yAxis": null
        },
        {
          "dataId": "districtdata",
          "id": "po6sqwlhl",
          "name": "Wheel Chair",
          "type": "multiSelect",
          "value": [
            "Y",
            "N"
          ],
          "enlarged": false,
          "plotType": "histogram",
          "yAxis": null
        }
      ],
      "layers": [
        {
          "id": "erk7fq9",
          "type": "arc",
          "config": {
            "dataId": "forward_data",
            "label": "Smart City",
            "color": [
              18,
              92,
              119,
              255
            ],
            "columns": {
              "lat0": "Pickup Lat",
              "lng0": "Pickup Long",
              "lat1": "Drop down Lat",
              "lng1": "Drop down Long"
            },
            "isVisible": true,
            "visConfig": {
              "opacity": 0.82,
              "thickness": 1.9,
              "colorRange": {
                "name": "Global Warming",
                "type": "sequential",
                "category": "Uber",
                "colors": [
                  "#5A1846",
                  "#900C3F",
                  "#C70039",
                  "#E3611C",
                  "#F1920E",
                  "#FFC300"
                ]
              },
              "sizeRange": [
                0,
                10
              ],
              "targetColor": null,
              "hi-precision": true
            }
          },
          "visualChannels": {
            "colorField": {
              "name": "Disability",
              "type": "string"
            },
            "colorScale": "ordinal",
            "sizeField": null,
            "sizeScale": "linear"
          }
        },
        {
          "id": "0652d3d",
          "type": "geojson",
          "config": {
            "dataId": "districtdata",
            "label": "District",
            "color": [
              23,
              184,
              190,
              255
            ],
            "columns": {
              "geojson": "_geojson"
            },
            "isVisible": true,
            "visConfig": {
              "opacity": 0.04,
              "thickness": 1.2,
              "colorRange": {
                "name": "Ice And Fire",
                "type": "diverging",
                "category": "Uber",
                "colors": [
                  "#0198BD",
                  "#49E3CE",
                  "#E8FEB5",
                  "#FEEDB1",
                  "#FEAD54",
                  "#D50255"
                ],
                "reversed": false
              },
              "radius": 10,
              "sizeRange": [
                0,
                10
              ],
              "radiusRange": [
                0,
                50
              ],
              "heightRange": [
                0,
                500
              ],
              "elevationScale": 5,
              "hi-precision": false,
              "stroked": true,
              "filled": true,
              "enable3d": false,
              "wireframe": false
            }
          },
          "visualChannels": {
            "colorField": {
              "name": "District",
              "type": "string"
            },
            "colorScale": "ordinal",
            "sizeField": null,
            "sizeScale": "linear",
            "heightField": null,
            "heightScale": "linear",
            "radiusField": null,
            "radiusScale": "linear"
          }
        }
      ],
      "interactionConfig": {
        "tooltip": {
          "fieldsToShow": {
            "32tn999c": [
              "Date",
              "Disability",
              "Pickup District",
              "Purpose",
              "Wheel Chair",
              "Drop off district"
            ],
            "slrqm7osh": [
              "OBJECTID",
              "TCNAME",
              "ENAME",
              "Shape__Area",
              "Shape__Length"
            ],
            "i28lssq88": [
              "地區號碼",
              "District",
              "地區",
              "Administrative District Boundary of Hong Kong"
            ]
          },
          "enabled": true
        },
        "brush": {
          "size": 49.8,
          "enabled": false
        }
      },
      "layerBlending": "additive",
      "splitMaps": []
    },
    "mapState": {
      "bearing": 24,
      "dragRotate": true,
      "latitude": 22.606157132676408,
      "longitude": 114.16103837646405,
      "pitch": 50,
      "zoom": 9.1906371590409,
      "isSplit": false
    },
    "mapStyle": {
      "styleType": "dark",
      "topLayerGroups": {
        "label": true,
        "road": true,
        "building": true
      },
      "visibleLayerGroups": {
        "label": true,
        "road": true,
        "border": false,
        "building": true,
        "water": true,
        "land": true
      },
      "mapStyles": {}
    }
  }
}