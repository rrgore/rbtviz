import * as joint from 'jointjs';

export const getPaper = (el, width=1500, height=700, model) => {
    return new joint.dia.Paper({
        el,
        width,
        height,
        model
    });    
}