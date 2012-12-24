function generate() {
	this.complete = function(n) {
		var verts = new Array();
		var graph = new Graph()
		
		for(var i=0;i < n;i++) verts[i] = graph.newNode();
		
		for(var i=0;i < n;i++)
			for(var j=i;j < n;j++)
				if(i != j)
					graph.newEdge(verts[i],verts[j],{color: 'blue', directional:false});
		return graph;
	};

	this.cn  = function(n)   {
		var verts = new Array();
		var graph = new Graph()
		
		for(var i=0;i < n;i++) verts[i] = graph.newNode();
		for(var i=0;i < n-1;i++) graph.newEdge(verts[i],verts[i+1],{color: 'blue', directional:false});
		graph.newEdge(verts[n-1],verts[0]);
		return graph;
	};

	this.cmn = function(m,n) {
		return new Graph();
	};
};

