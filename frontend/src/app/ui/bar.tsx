// import * as d3 from 'd3-scale';

// type BarProps = {
//     data: number[],
//     dimension: {
//         [key: string]: number;
//     }
// }

// const Bars = (props: BarProps) => {
//     const { data, dimension } = props;
//     const xScale = d3.scaleBand()
//         .domain(data.map((d, dNdx) => dNdx))
//         .range([0, dimension.width])
//     const yScale = d3.scaleLinear()
//         .domain([0, 1])
//         .range([0, dimension.height])

//     return (
//         <g>
//             {data.map((d, i) => (
//                 <rect
//                     key={i}
//                     x={x(d)}
//                     y={y(0)}
//                     width={x.bandwidth()}
//                     height={y(1)}
//                     fill="steelblue"
//                 />
//             ))}
//         </g>
//     );
// };