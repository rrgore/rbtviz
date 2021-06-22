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

        // var link = new joint.shapes.standard.Link({
        //     source: {
        //       id: circle1.id
        //     },
        //     target: {
        //       id: circle2.id
        //     }
        // });
        // this.graph.addCells([circle1, circle2, link]);

        // console.log("RBTGraph insertVal: "+this.props.insertVal);
    }

    componentDidUpdate() {
        if (this.props.insertVal !== '') {
            this.addCell(this.props.insertVal);
        }
    }

    addCell(label) {
        var circle1 = new joint.shapes.standard.Circle({
            position: {x: 650, y: 10},
            size: {width: 50, height: 50},
            attrs: {
                'body': {
                    fill: 'lightblue'
                },
                'label': {
                    text: label
                }
            }
        });
        circle1.addTo(this.graph);
    }

    render() {
        return (
            <>
                <h1>Graph</h1>
                <div id="playground" ref={this.myRef}>                    
                </div>
            </>
        );
    }
}