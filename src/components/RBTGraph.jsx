import React from "react";
import ReactDOM from 'react-dom';
import * as joint from 'jointjs';

export default class RBTGraph extends React.Component {
    constructor(props) {
        super(props);
        this.graph = new joint.dia.Graph();
        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.paper = new joint.dia.Paper({
            el: ReactDOM.findDOMNode(this.myRef.current),
            width: 1500,
            height: 700,
            model: this.graph
        });

        var circle1 = new joint.shapes.standard.Circle({
            position: {x: 650, y: 50},
            size: {width: 50, height: 50},
            attrs: {
                'body': {
                    fill: 'lightblue'
                },
                'label': {
                    text: '0001'
                }
            }
        });
        // circle1.addTo(this.graph);

        var circle2 = new joint.shapes.standard.Circle({
            position: {x: 750, y: 150},
            size: {width: 50, height: 50},
            attrs: {
                'body': {
                    fill: 'lightblue'
                },
                'label': {
                    text: '0002'
                }
            }
        });
        // circle2.addTo(this.graph);

        var link = new joint.shapes.standard.Link({
            source: {
              id: circle1.id
            },
            target: {
              id: circle2.id
            }
        });
        this.graph.addCells([circle1, circle2, link]);
    }

    render() {
        return (
            <div id="playground" ref={this.myRef}>
            </div>);
    }
}