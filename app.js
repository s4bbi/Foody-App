// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "Hello World from React!"
// )

const parent = React.createElement(
    "div",
    {id:"parent"},
    
    [React.createElement("div", {id: "child"},

        [ React.createElement("h1", {}, "Hey! I'm an H1 Tag"),
            React.createElement("h2", {}, "Hey! I'm an H2 Tag"
        )]
    ),

    React.createElement("div", {id: "child2"},

        [ React.createElement("h1", {}, "Hey! I'm an H1 Tag"),
            React.createElement("h2", {}, "Hey! I'm an H2 Tag"
        )]
    )]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent)

root.render(parent);