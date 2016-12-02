'use strict';

var GraphPaper = {
	graph:[],
	h:0,
	w:0,
	row:0,
	col:0,
	d_char:' ',

	init:function(height, width){
		this.h = height;
		this.w = width;
		this.grid();
	},

	grid:function(){
		//multidimensional array
		
		for (var r = 0; r < this.h; r++){
			var row = []
			for (var i = 0; i < this.w; i++){
				row[i] = this.d_char;
			}
			this.graph.push(row)
		}
	},
	start:function(position, character){
		//(top_left , top_right, bottom_left, bottom_right)
		var p = position || 'top_left' , c = character || this.d_char;

		if(p === 'top_left'){
			this.row = 0;
			this.col = 0;
		}else if(p === 'top_right'){
			this.row = 0;
			this.col = this.w-1;
		}else if(p === 'bottom_left'){
			this.row = this.h-1;
			this.col = 0;
		}else if(p === 'bottom_right'){
			this.row = this.h-1;
			this.col = this.w-1;
		}else if(p === 'center'){
			this.row = Math.floor(this.h / 2)
			this.col = Math.floor(this.w / 2)
		}
		this.graph[this.row][this.col] = c;
	},
	left:function(character, times){
		for (var t=0; t < times; t++){

			if(this.col >= 1 && this.col <= this.w){
				this.col -= 1
				this.graph[this.row][this.col] = character;
			}

		}
	},

	right:function(character, times){
		for (var t=0; t < times; t++){

			if(this.col >= 0 && this.col < this.w-1){
				this.col += 1
				this.graph[this.row][this.col] = character;
			}

		}
	},

	up:function(character, times){
		for (var t=0; t < times; t++){

			if(this.row >= 1 && this.row <= this.h){
				this.row -= 1
				this.graph[this.row][this.col] = character;
			}

		}
	},

	down:function(character, times){
		for (var t=0; t < times; t++){

			if(this.row >= 0 && this.row < this.h-1){
				this.row += 1
				this.graph[this.row][this.col] = character;
			}

		}
	}
}

// var gp = Object.create(GraphPaper)

// gp.init(10, 10);


// gp.start('bottom_left', 'H');
// gp.up('#', gp.h)
// gp.down('#', gp.h / 2)
// gp.right('#', 2)
// gp.down('#', gp.h)
// gp.up('#', gp.h)

// gp.right(' ', 1)

// gp.right('#', 5)
// gp.left('#', 2)
// gp.down('#', gp.h)
// gp.right('#', 2)
// gp.left('#', 4)

// console.log(gp.graph)