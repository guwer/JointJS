
var graph = new joint.dia.Graph;
var paper = new joint.dia.Paper({
    el: document.getElementById('myholder'),
    model: graph,
    width: 1000,
    height: 300,
    gridSize: 5,
    drawGrid: true,
    background: {
        color: 'rgba(0, 255, 0, 0.3)'
    }
});

var rect = new joint.shapes.standard.Rectangle();
        rect.position(150, 30);
        rect.resize(100, 60);
        rect.attr({
            body: {
                fill: 'blue'
            },
            label: {
                text: 'Hello',
                fill: 'white'
            }
        });
        rect.addTo(graph);

        var rect2 = rect.clone();
        rect2.translate(300, 0);
        rect2.attr('label/text', 'World!');
        rect2.addTo(graph);

        var link = new joint.shapes.standard.Link();
        link.source(rect);
        link.target(rect2);
        link.addTo(graph);

paper.translate(10,0);