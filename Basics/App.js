// const head = React.createElement("h1", {id: "heading"} ,"This is heading");

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "Child" },
//     React.createElement("h1", {id: "headin"}, "this is heading")
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);


const parent = React.createElement("div", {id:"parent"}, [
        React.createElement("div", {id:"child1"}, [ React.createElement("h1", {id:"headin2"}, "Heading1" ), React.createElement("h2", {id:"headin"}, "heading2")] ),
        React.createElement("div", {id:"child2"}, [ React.createElement("h1", {id:"headin2"}, "Heading3"), React.createElement("h2", {id:"headin"}, "Heading4" )])
    ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);