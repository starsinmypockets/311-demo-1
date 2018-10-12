{
    "title": "Philly 311 Data Visualized",
    "backend": "cartodb",
    "dataResources": [
        {
            "resourceHandle": "philly_311",
            "resourceType": "cartodb",
            "url": "https://phl.carto.com/api/v2/sql",
            "query": "?q=SELECT service_name, COUNT(cartodb_id) FROM public_cases_fc WHERE service_name NOT IN ('Information Request') GROUP BY service_name ORDER BY count DESC LIMIT 10"
        }
    ],
    "regions": [
        {
            "id": "filters",
            "className": "col-md-6",
            "children": [
                {
                    "type": "NeighborhoodFilter",
                    "filterKey": "neighborhood",
                    "multi": true,
                    "className": "map-left",
                    "willFilter": ["philly_311"]
                },
                {
                    "type": "Autocomplete",
                    "filterKey": "service_name",
                    "label": "Request type",
                    "className": "filter-right",
                    "willFilter": ["philly_311"],
                    "field": "service_name",
                    "multi": true,
                    "operation": "IN",
                    "options": 
			[
			    {"label": "Maintenance Residential or Commercial", "value": "Maintenance Residential or Commercial"},
			    {"label": "Rubbish/Recyclable Material Collection", "value": "Rubbish/Recyclable Material Collection"},
			    {"label": "Illegal Dumping", "value": "Illegal Dumping"},
			    {"label": "Abandoned Vehicle", "value": "Abandoned Vehicle"},
			    {"label": "Directory Assistance", "value": "Directory Assistance"},
			    {"label": "Graffiti Removal", "value": "Graffiti Removal"},
			    {"label": "Street Defect", "value": "Street Defect"},
			    {"label": "Street Light Outage", "value": "Street Light Outage"},
			    {"label": "Vacant Lot Clean-Up", "value": "Vacant Lot Clean-Up"},
			    {"label": "Vacant House or Commercial", "value": "Vacant House or Commercial"}
			]
                }
            ]
        },
        {
            "id": "region-1",
            "className": "col-md-6",
            "children": [
                {
                    "type": "Chart",
                    "componentKey": "chart-3",
                    "dataType": "NVD3ChartSeries",
                    "resourceHandle": "philly_311",
                    "count": "service_name",
                    "limit": 10,
                    "x": "service_name",
                    "y": "count",
                    "dataFields": [
                        {
                            "resourceHandle": "philly_311",
                            "field": "service_name",
                            "type": "STRING",
                            "fieldHandle": "serviceName"
                        },
                        {
                            "resourceHandle": "philly_311",
                            "field": "count",
                            "type": "INTEGER",
                            "fieldHandle": "count"
                        }
                    ],
                    "settings": {
                        "type": "discreteBarChart",
                        "rotateLabels": 45,
                        "height": 700,
                        "legend": {
                            "maxKeyLength": 1500
                        }
                    }
                }
	    ]
        },
        {
            "id": "region-3",
            "lassName": "row",
            "children": [
                {
                    "type": "Metric",
                    "componentKey": "metric-a",
                    "resourceHandle": "philly_311",
                    "background": "red",
                    "caption": "Total Requests",
                    "icon": "globe",
                    "count": "service_name",
                    "where": [{
                        "attribute": "service_name",
                        "value" : ["Information Request"]
                    }],
                    "dataFields": [
                        {
                            "resourceHandle": "philly_311",
                            "field": "service_name",
                            "type": "STRING",
                            "fieldHandle": "serviceName"
                        }
                    ],
                    "cardProps": {
                        "cardClasses": ["col-md-3"]
                    } 
                }
            ]
        }
   ]
}
