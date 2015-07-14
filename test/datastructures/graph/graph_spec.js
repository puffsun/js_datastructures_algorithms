"use strict";

var Graph, addNodesTo, l;

Graph = require('../../../src/datastructures/graph/graph').Graph;

l = function(x) {
  return console.log(require('util').inspect(x, true, 10));
};

addNodesTo = function(graph, addEdges) {
  var initEdgeSize, initNodeSize;
  if (addEdges === null) {
    addEdges = false;
  }
  initNodeSize = graph.nodeSize;
  graph.addNode("1");
  graph.addNode("2");
  graph.addNode("3");
  graph.addNode("4");
  graph.addNode("5");
  graph.addNode("6");
  expect(graph.nodeSize).toBe(initNodeSize + 6);
  if (addEdges) {

    /*
    1 <- 2 <-> 3
    |^   ^     ^
    v \  |     |
    4   \5     6 <->
     */
    initEdgeSize = graph.edgeSize;
    expect(initEdgeSize).toBe(0);
    graph.addEdge("1", "4", 9);
    graph.addEdge("2", "1", 9);
    graph.addEdge("2", "3", 9);
    graph.addEdge("3", "2", 9);
    graph.addEdge("5", "1", 9);
    graph.addEdge("5", "2", 9);
    graph.addEdge("6", "3", 9);
    graph.addEdge("6", "6", 9);
    return expect(graph.edgeSize).toBe(initEdgeSize + 8);
  }
};

describe("Add node", function() {
  var graph;
  graph = new Graph();
  it("should have 0 edge and 0 node initially", function() {
    expect(graph.nodeSize).toBe(0);
    return expect(graph.edgeSize).toBe(0);
  });
  it("should return the node object added, or undefined if the id exists", function() {
    expect((graph.addNode("item")) instanceof Object).toBeTruthy();
    expect((graph.addNode("1")) instanceof Object).toBeTruthy();
    return expect((graph.addNode(null)) instanceof Object).toBeTruthy();
  });
  it("should return undefined if the node id already exists", function() {
    expect(graph.addNode("item")).toBeUndefined();
    expect(graph.addNode("1")).toBeUndefined();
    return expect(graph.addNode(null)).toBeUndefined();
  });
  return it("should have kept the node size constant with non-insertions", function() {
    return expect(graph.nodeSize).toBe(3);
  });
});

describe("Get node", function() {
  var graph;
  graph = new Graph();
  it("should return undefined if the node's not found", function() {
    expect(graph.getNode(null)).toBeUndefined();
    expect(graph.getNode(void 0)).toBeUndefined();
    return expect(graph.getNode(2)).toBeUndefined();
  });
  it("should return the added node", function() {
    addNodesTo(graph);
    expect((graph.getNode("1")) instanceof Object).toBeTruthy();
    expect((graph.getNode("2")) instanceof Object).toBeTruthy();
    return expect((graph.getNode("6")) instanceof Object).toBeTruthy();
  });
  return it("should return a defined object if null and undefined are found", function() {
    graph.addNode(null);
    graph.addNode(void 0);
    expect((graph.getNode(null)) instanceof Object).toBeTruthy();
    return expect((graph.getNode(void 0)) instanceof Object).toBeTruthy();
  });
});

describe("Remove node", function() {
  var graph;
  graph = new Graph();
  it("should return undefined if the node doesn't exist in the first place", function() {
    expect(graph.removeNode(null)).toBeUndefined();
    return expect(graph.removeNode(2)).toBeUndefined();
  });
  it("should have kept the node size constant", function() {
    return expect(graph.nodeSize).toBe(0);
  });
  it("should return the value of node removed", function() {
    addNodesTo(graph);
    expect((graph.removeNode("1")) instanceof Object).toBeTruthy();
    expect((graph.removeNode("3")) instanceof Object).toBeTruthy();
    return expect((graph.removeNode("6")) instanceof Object).toBeTruthy();
  });
  it("should have updated the node size", function() {
    return expect(graph.nodeSize).toBe(3);
  });
  return it("should have removed the node", function() {
    expect(graph.getNode("1")).toBeUndefined();
    expect(graph.getNode("3")).toBeUndefined();
    return expect(graph.getNode("6")).toBeUndefined();
  });
});

describe("Add edge", function() {
  var graph;
  graph = new Graph();
  it("should return undefined if either/both nodes don't exist in the graph", function() {
    expect(graph.addEdge("7", "8")).toBeUndefined();
    expect(graph.addEdge("1", "8")).toBeUndefined();
    expect(graph.addEdge("99", "1")).toBeUndefined();
    addNodesTo(graph);
    expect(graph.addEdge("7", "8")).toBeUndefined();
    expect(graph.addEdge("1", "8")).toBeUndefined();
    return expect(graph.addEdge("99", "1")).toBeUndefined();
  });
  it("should add the edge and return the edge object", function() {
    expect((graph.addEdge("1", "2")) instanceof Object).toBeTruthy();
    expect((graph.addEdge("2", "1")) instanceof Object).toBeTruthy();
    return expect((graph.addEdge("3", "2")) instanceof Object).toBeTruthy();
  });
  it("should have updated the edge size", function() {
    return expect(graph.edgeSize).toBe(3);
  });
  it("should have initiated the edge weight to 1", function() {
    expect(graph.addEdge("5", "2").weight).toBe(1);
    expect(graph.addEdge("5", "6").weight).toBe(1);
    return expect(graph.addEdge("3", "6").weight).toBe(1);
  });
  it("should allow the node to add an edge to itself", function() {
    expect((graph.addEdge("2", "2")) instanceof Object).toBeTruthy();
    return expect((graph.addEdge("6", "6")) instanceof Object).toBeTruthy();
  });
  it("should count a self-directing edge as a single one", function() {
    return expect(graph.edgeSize).toBe(8);
  });
  return it("should return undefined if the edge already exists", function() {
    expect(graph.addEdge("1", "2")).toBeUndefined();
    expect(graph.addEdge("2", "2")).toBeUndefined();
    return expect(graph.addEdge("2", "1")).toBeUndefined();
  });
});

describe("Get edge", function() {
  var graph;
  graph = new Graph();
  it("should return undefined if the nodes aren't found", function() {
    return expect(graph.getEdge("1", "2")).toBeUndefined();
  });
  it("should return undefined if the edge isn't found", function() {
    addNodesTo(graph, true);
    expect(graph.getEdge("3", "5")).toBeUndefined();
    return expect(graph.getEdge("1", "2")).toBeUndefined();
  });
  return it("should return the edge found", function() {
    expect((graph.getEdge("1", "4")) instanceof Object).toBeTruthy();
    expect((graph.getEdge("2", "1")) instanceof Object).toBeTruthy();
    expect((graph.getEdge("2", "3")) instanceof Object).toBeTruthy();
    expect((graph.getEdge("3", "2")) instanceof Object).toBeTruthy();
    expect((graph.getEdge("5", "1")) instanceof Object).toBeTruthy();
    expect((graph.getEdge("5", "2")) instanceof Object).toBeTruthy();
    expect((graph.getEdge("6", "3")) instanceof Object).toBeTruthy();
    return expect((graph.getEdge("6", "6")) instanceof Object).toBeTruthy();
  });
});

describe("Remove edge", function() {
  var graph;
  graph = new Graph();
  it("should return undefined if either node's not found", function() {
    expect(graph.removeEdge(1, 2)).toBeUndefined();
    return expect(graph.removeEdge(void 0, void 0)).toBeUndefined();
  });
  it("should have kept the edge count at 0", function() {
    return expect(graph.edgeSize).toBe(0);
  });
  it("should return undefined if the edge doesn't exist", function() {
    addNodesTo(graph, true);

    /*
    1 <- 2 <-> 3
    |^   ^     ^
    v \  |     |
    4   \5     6 <->
     */
    expect(graph.removeEdge("1", "4").weight).toBe(9);
    expect(graph.removeEdge("2", "1").weight).toBe(9);
    expect(graph.removeEdge("2", "3").weight).toBe(9);
    expect(graph.removeEdge("3", "2").weight).toBe(9);
    expect(graph.removeEdge("5", "1").weight).toBe(9);
    expect(graph.removeEdge("5", "2").weight).toBe(9);
    return expect(graph.removeEdge("6", "3").weight).toBe(9);
  });
  it("should have kept track of the edge count", function() {
    return expect(graph.edgeSize).toBe(1);
  });
  it("should remove a self-directing correctly", function() {
    expect(graph.removeEdge("6", "6").weight).toBe(9);
    return expect(graph.edgeSize).toBe(0);
  });
  return it("should leave an empty graph after removing all the edges", function() {
    expect(graph.removeEdge("1", "4")).toBeUndefined();
    expect(graph.removeEdge("2", "1")).toBeUndefined();
    expect(graph.removeEdge("2", "3")).toBeUndefined();
    expect(graph.removeEdge("3", "2")).toBeUndefined();
    expect(graph.removeEdge("5", "1")).toBeUndefined();
    expect(graph.removeEdge("5", "2")).toBeUndefined();
    expect(graph.removeEdge("6", "3")).toBeUndefined();
    return expect(graph.removeEdge("6", "6")).toBeUndefined();
  });
});

describe("Get all in edges", function() {
  var graph, graph2;
  graph = new Graph();
  it("should return empty array for a non-existant node", function() {
    expect(graph.getOutEdgesOf("6")).toEqual([]);
    return expect(graph.getOutEdgesOf(void 0)).toEqual([]);
  });
  it("should return empty array for no edges", function() {
    addNodesTo(graph);
    expect(graph.getInEdgesOf("1")).toEqual([]);
    expect(graph.getInEdgesOf("2")).toEqual([]);
    return expect(graph.getInEdgesOf("6")).toEqual([]);
  });
  graph2 = new Graph();
  return it("should return the in edges", function() {
    addNodesTo(graph2, true);

    /*
    1 <- 2 <-> 3
    |^   ^     ^
    v \  |     |
    4   \5     6 <->
     */
    expect(graph2.getInEdgesOf("1").length).toBe(2);
    expect(graph2.getInEdgesOf("1")).toContain(graph2.getEdge("2", "1"));
    expect(graph2.getInEdgesOf("1")).toContain(graph2.getEdge("5", "1"));
    expect(graph2.getInEdgesOf("2").length).toBe(2);
    expect(graph2.getInEdgesOf("2")).toContain(graph2.getEdge("3", "2"));
    expect(graph2.getInEdgesOf("2")).toContain(graph2.getEdge("5", "2"));
    expect(graph2.getInEdgesOf("3").length).toBe(2);
    expect(graph2.getInEdgesOf("3")).toContain(graph2.getEdge("2", "3"));
    expect(graph2.getInEdgesOf("3")).toContain(graph2.getEdge("6", "3"));
    expect(graph2.getInEdgesOf("4").length).toBe(1);
    expect(graph2.getInEdgesOf("4")).toContain(graph2.getEdge("1", "4"));
    expect(graph2.getInEdgesOf("5")).toEqual([]);
    expect(graph2.getInEdgesOf("6").length).toBe(1);
    return expect(graph2.getInEdgesOf("6")).toContain(graph2.getEdge("6", "6"));
  });
});

describe("Get all out edges", function() {
  var graph, graph2;
  graph = new Graph();
  it("should return empty array for a non-existant node", function() {
    expect(graph.getOutEdgesOf("6")).toEqual([]);
    return expect(graph.getOutEdgesOf(void 0)).toEqual([]);
  });
  it("should return empty array for no edges", function() {
    addNodesTo(graph);
    expect(graph.getOutEdgesOf("1")).toEqual([]);
    return expect(graph.getOutEdgesOf("2")).toEqual([]);
  });
  graph2 = new Graph();
  return it("should return the in edges", function() {
    addNodesTo(graph2, true);

    /*
    1 <- 2 <-> 3
    |^   ^     ^
    v \  |     |
    4   \5     6 <->
     */
    expect(graph2.getOutEdgesOf("1").length).toBe(1);
    expect(graph2.getOutEdgesOf("1")).toContain(graph2.getEdge("1", "4"));
    expect(graph2.getOutEdgesOf("2").length).toBe(2);
    expect(graph2.getOutEdgesOf("2")).toContain(graph2.getEdge("2", "1"));
    expect(graph2.getOutEdgesOf("2")).toContain(graph2.getEdge("2", "3"));
    expect(graph2.getOutEdgesOf("3").length).toBe(1);
    expect(graph2.getOutEdgesOf("3")).toContain(graph2.getEdge("3", "2"));
    expect(graph2.getOutEdgesOf("4")).toEqual([]);
    expect(graph2.getOutEdgesOf("5").length).toBe(2);
    expect(graph2.getOutEdgesOf("5")).toContain(graph2.getEdge("5", "1"));
    expect(graph2.getOutEdgesOf("5")).toContain(graph2.getEdge("5", "2"));
    expect(graph2.getOutEdgesOf("6").length).toBe(2);
    expect(graph2.getOutEdgesOf("6")).toContain(graph2.getEdge("6", "3"));
    return expect(graph2.getOutEdgesOf("6")).toContain(graph2.getEdge("6", "6"));
  });
});

describe("Get all edges", function() {
  var graph, graph2;
  graph = new Graph();
  it("should return an empty array if node doesn't exist", function() {
    expect(graph.getAllEdgesOf(1)).toEqual([]);
    return expect(graph.getAllEdgesOf(void 0)).toEqual([]);
  });
  it("should return an empty array if the node doesn't have edges", function() {
    addNodesTo(graph);
    expect(graph.getAllEdgesOf("1")).toEqual([]);
    expect(graph.getAllEdgesOf("2")).toEqual([]);
    return expect(graph.getAllEdgesOf("6")).toEqual([]);
  });
  graph2 = new Graph();
  it("should return an array of edges", function() {
    addNodesTo(graph2, true);

    /*
    1 <- 2 <-> 3
    |^   ^     ^
    v \  |     |
    4   \5     6 <->
     */
    expect(graph2.getAllEdgesOf("1").length).toBe(3);
    expect(graph2.getAllEdgesOf("1")).toContain(graph2.getEdge("1", "4"));
    expect(graph2.getAllEdgesOf("1")).toContain(graph2.getEdge("2", "1"));
    expect(graph2.getAllEdgesOf("1")).toContain(graph2.getEdge("5", "1"));
    expect(graph2.getAllEdgesOf("2").length).toBe(4);
    expect(graph2.getAllEdgesOf("2")).toContain(graph2.getEdge("2", "1"));
    expect(graph2.getAllEdgesOf("2")).toContain(graph2.getEdge("2", "3"));
    expect(graph2.getAllEdgesOf("2")).toContain(graph2.getEdge("3", "2"));
    expect(graph2.getAllEdgesOf("2")).toContain(graph2.getEdge("5", "2"));
    expect(graph2.getAllEdgesOf("3").length).toBe(3);
    expect(graph2.getAllEdgesOf("3")).toContain(graph2.getEdge("3", "2"));
    expect(graph2.getAllEdgesOf("3")).toContain(graph2.getEdge("2", "3"));
    expect(graph2.getAllEdgesOf("3")).toContain(graph2.getEdge("6", "3"));
    expect(graph2.getAllEdgesOf("4").length).toBe(1);
    expect(graph2.getAllEdgesOf("4")).toContain(graph2.getEdge("1", "4"));
    expect(graph2.getAllEdgesOf("5").length).toBe(2);
    expect(graph2.getAllEdgesOf("5")).toContain(graph2.getEdge("5", "1"));
    return expect(graph2.getAllEdgesOf("5")).toContain(graph2.getEdge("5", "2"));
  });
  return it("should not duplicate a self-pointing edge", function() {
      expect(graph2.getAllEdgesOf("6").length).toBe(2);
      expect(graph2.getAllEdgesOf("6")).toContain(graph2.getEdge("6", "3"));
      return expect(graph2.getAllEdgesOf("6")).toContain(graph2.getEdge("6", "6"));
  });
});

describe("Traverse through each node", function() {
    var graph;
    graph = new Graph();
    it("shouldn't call the callback for an empty graph", function() {
        var callback;
        callback = jasmine.createSpy();
        graph.forEachNode(callback);
        return expect(callback).not.toHaveBeenCalled();
    });
    it("should reach each node once", function() {
        var callback;
        addNodesTo(graph);
        callback = jasmine.createSpy();
        graph.forEachNode(callback);
        return expect(callback.callCount).toBe(6);
    });
    return it("should pass nodeObject and nodeId to the callback", function() {
        var callback;
        callback = jasmine.createSpy();
        graph.forEachNode(callback);
        expect(callback.mostRecentCall.args.length).toBe(2);
        expect(callback.mostRecentCall.args[0] instanceof Object).toBeTruthy;
        return expect(callback.mostRecentCall.args[1]).toBe("6");
    });
});

describe("Traverse through each edge", function() {
    var graph;
    graph = new Graph();
    it("shouldn't call the callback for an empty graph", function() {
        var callback;
        callback = jasmine.createSpy();
        graph.forEachEdge(callback);
        return expect(callback).not.toHaveBeenCalled();
    });
    it("should reach each edge once", function() {
        var callback;
        addNodesTo(graph, true);
        callback = jasmine.createSpy();
        graph.forEachEdge(callback);
        return expect(callback.callCount).toBe(8);
    });
    return it("should reach the isolated node with an edge toward itself", function() {
        var callback;
        graph.addNode("99");
        graph.addEdge("99", "99", 999);
        callback = jasmine.createSpy();
        graph.forEachEdge(callback);
        return expect(callback.callCount).toBe(9);
    });
});
