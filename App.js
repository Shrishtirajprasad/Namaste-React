// const Heading =  React.createElement("h1",{id:"heading"},"Hello World From React!");
// //heading => is an obj

/*nested structure
    <div id="parent">
        <div id="child">
            <h1>Hi I am H1 Tag</h1>
            <h1>Hi I am H1 Tag</h1>
        </div>
    </div>

    <div id="parent2">
        <div id="child2">
            <h2>Hi I am H2 Tag</h2>
            <h2>Hi I am H2 Tag</h2>
        </div>
    </div>


* */

const parent = React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"Hi I am H1 Tag",),
    React.createElement("h2",{},"Hi I am H2 Tag"),
]),
React.createElement("div",{id:"child"},[
    React.createElement("h3",{},"Hi I am H1 Tag",),
    React.createElement("h4",{},"Hi I am H2 Tag"),
]),
]);




const root = ReactDOM.createRoot(document.getElementById("root"));


console.log(parent);
root.render(parent);