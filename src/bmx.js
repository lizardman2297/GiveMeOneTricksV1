let getRandomBmx = function() {
    // const date = require("../data/bmx.json");
    bmx = [
		{
			"id": 0,
			"name": "tailwhip",
			"difficulty": 2
		},
		{
			"id": 1,
			"name": "bus",
			"difficulty": 1
		},
		{
			"id": 2,
			"name": "360",
			"difficulty": 2
		},
		{
			"id": 3,
			"name": "180",
			"difficulty": 1
		},
		{
			"id": 4,
			"name": "180 bus",
			"difficulty": 2
		},
		{
			"id": 5,
			"name": "trucks (360 bus)",
			"difficulty": 3
		},
		{
			"id": 6,
			"name": "tail tap",
			"difficulty": 1
		},
		{
			"id": 7,
			"name": "air",
			"difficulty": 1
		},
		{
			"id": 8,
			"name": "nose grab",
			"difficulty": 1
		},
		{
			"id": 9,
			"name": "seat grab",
			"difficulty": 1
		},
		{
			"id": 10,
			"name": "270",
			"difficulty": 2
		},
		{
			"id": 11,
			"name": "foot plant",
			"difficulty": 2
		},
		{
			"id": 12,
			"name": "oppo bus",
			"difficulty": 3
		},
		{
			"id": 13,
			"name": "oppo 180",
			"difficulty": 2
		}
	];
    return bmx;
}

exports.getRandomBmx = getRandomBmx;