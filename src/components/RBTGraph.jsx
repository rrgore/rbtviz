import React from "react";
import ReactDOM from 'react-dom';
import * as joint from 'jointjs';

export default class RBTGraph extends React.Component {
    constructor(props) {
        super(props);
        this.graph = new joint.dia.Graph();
        this.myRef = React.createRef();
        this.state = {
            cellIds: []
        }
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

    componentDidUpdate(prevProps) {
        if (this.props.insertVal !== prevProps.insertVal || this.props.deleteVal !== prevProps.deleteVal || this.props.findVal !== prevProps.findVal) {
            if (this.props.insertVal !== '') {
                this.addCell(this.props.insertVal);
            }

            // console.log(`delete=${this.props.deleteVal}; update=${this.props.findVal}`);
            if (this.props.deleteVal !== '') {
                this.deleteCell(this.props.deleteVal);
            }

            if (this.props.findVal !== '') {
                this.findCell(this.props.findVal);
            }
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
        this.setState((state) => ({
            cellIds: [...state.cellIds, circle1.id]
        }));
    }

    deleteCell(label='') {
        // TODO: Use label for find the appropriate cell
        var cell = this.graph.getCell(this.state.cellIds[0]);
        this.graph.removeCells([cell]);
        this.setState({
            cellIds: []
        });
    }

    findCell(label='') {
        // TODO: Use label for find the appropriate cell
        var cell = this.graph.getCell(this.state.cellIds[0]);
        // var findCircle = new joint.shapes.standard.Circle({
        //     position: {x: 650, y: 10},
        //     size: {width: 70, height: 70},
        //     attrs: {
        //         'body': {
        //             stroke: 'red'
        //         }
        //     }
        // });
        // findCircle.addTo(this.graph);

        var cellView = this.paper.findViewByModel(cell);
        joint.highlighters.mask.add(cellView, 'body', 'highlighter01', {
            padding: 5,
            attrs: {
                'stroke-width': 2,
                'stroke': 'red',
                'stroke-linejoin': 'round',
                'stroke-linecap': 'round'
            }
        });

        setTimeout(() => {
            joint.highlighters.mask.remove(cellView, 'highlighter01');
        }, 1000);
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