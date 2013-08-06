/* ---------- dashboard ---------- */
jQuery(document).ready(function ($) {

    var d1 = [["创合供热公司", 10], ["合格服务商", 8], ["科利源供热公司", 4], ["特诚公司", 13], ["特力昆公司", 17], ["天禹供热公司", 9], ["销售公司", 9]];
    var d2 = [["创合供热公司", 9], ["合格服务商", 5], ["科利源供热公司", 3], ["特诚公司", 4], ["特力昆公司", 15], ["天禹供热公司", 4], ["销售公司", 9]];
    var d3 = [["创合供热公司", 1], ["合格服务商", 3], ["科利源供热公司", 1], ["特诚公司", 1], ["特力昆公司", 5], ["天禹供热公司", 3], ["销售公司", 2]];
    

    $.plot("#placeholder", [{ label: "总面积", data: d1 },
			{ label: "实际投入面积", data: d2 },
			{ label: "超标面积", data: d3}], {
			    series: {
			        stack: false,
			        bars: {
			            show: true,
			            barWidth: 0.6,
			            align: "center"
			        }

			    },
			    xaxis: {
			        show: true,
			        mode: "categories",
			        tickLength: 0,
			        color: "#F00",
			        tickColor: "#F00"

			    },
			    grid: { tickColor: "#eee", borderWidth: 0
			    },
			    colors: ["#cdcdcd", "#2FABE9", "#ff5454"]
			});


});