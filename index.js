const shapeNames = [
    'circle',
    'ellipse',
    'triangle',
    'pentagon',
    'hexagon',
    'star',
    'parallelogram',
    'rhombus',
    'trapezoid',
    'octagon',
    'heart',
    'parallelogram-alt',
    'diamond',
    'right-triangle',
    'moon',
    'cross',
    'arrow-up',
    'arrow-down',
    'arrow-left',
    'arrow-right',
    'shield'
];

const colorNames = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink',
    'brown',
    'gray',
    'black',
    'white',
    'cyan',
    'magenta',
    'lime',
    'indigo',
    'violet',
    'gold',
    'silver',
    'beige',
    'maroon'
];



const color_button=document.getElementById('change-color');
const shape_button=document.getElementById('change-shape');
const shape_con=document.getElementsByClassName('shape')[0];
const color_con=document.getElementById('color');
console.log(color_con)
shape_button.addEventListener('click',function(){
    let x=Math.floor(Math.random()*shapeNames.length);
    let shape = shapeNames[x];
  shape_con.id=shape;
})
color_button.addEventListener('click',function(){
    let y=Math.floor(Math.random()*colorNames.length);
    let color=colorNames[y];
    color_con.style.backgroundColor=color;
})