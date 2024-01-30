const heading = React.createElement('h1', {id:'heading'}, 'This is React heading');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

// Nested HTML
// <div id="parent">
//     <div id="child">
//         <h1>This is h1</h1>
//     </div>
// </div>
// React.createElement('div',{id:'parent'}, React.createElement('div', {id:'child'}, React.createElement('h1', {}, 'Tjhis is h1 tag')))

// Complex Nested sibling HTML
// <div id="parent">
//     <div id="child">
//         <h1>This is h1</h1>
//         <h2>This is h2</h2>
//     </div>
// </div>
// React.createElement('div',{id:'parent'}, React.createElement('div', {id:'child'}, [React.createElement('h1', {}, 'This is h1 tag'),
// React.createElement('h2', {}, 'Tjhis is h2 tag')]))