import React from "react";
import ReactDOM from "react-dom/client";
console.log(React)
// const reactdivElement = React.createElement(
//     "div",
//     { id: "bg-container" },
//     React.createElement("div", { id: "inner-container" }, [
//         React.createElement("h1", { id: "heading1" }, "This is h1 heading"),
//         React.createElement("h2", { id: "heading2" }, "This is h2 heading"),
//     ])
// );
//above lines of code is using core react to create a element but it is very difficult for progrommers.so fcaebook developers introduced JSX.

//React Element
const jsxheading=<h2 className="heading1">This is heading using JSX from container functional component (use {}to get javascript expression in jSX)</h2>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);


//React Functional Components
// const Heading=()=><h1 className="heading1">This is heading using JSX from functional component</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Heading/>);


const Container=()=>(
<div id="container">
<h1 className="heading1">
    this is heading from container functional component...
</h1>
<h3>{jsxheading}</h3>
{jsxheading}
</div>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container/>);



// Bundler concept
// npm==>npm init
// while enter the command npm init and terminal will ask some basic details and enter the details, then you will get a package.json file in your project.
// next type the npm install -D parcel,to get the parcel  package into our project beacuse with parcel we can do a lot of things.....now we got node modules,package-lock.json file in our project.
//next type npx parcel index.html ..here parcel is basically cretaes a server and now our app is hosted on local host:1234. 
// and also now we got dist and parcel-cache in our project
//features of parcel
//while pushing to git,create gitignore folder and add these dist,parcel-cache and node modules.dont push regenerate files to github repository
//for production build,type npx parcel build index.html
   
//remove the  cdn links and install react and react dom from npm 
//npm install react and npm install react dom 


//episode-3
//part-01 & part-02
//adding to these commands in package.json  file in scripts tag.
// "start":"parcel index.html",---->npm run start or npm start
// "build":"parcel build index.html" ---->npm run build
//part-03:-
//reactdivElement.createElement() is not a good way for developers becuase it is very clumsy
//so facebook developers introduced  something known as JSX.
//JSX:-
//JSX is a HTML like syntax but not writing html inside javscript.
//To create a react element,use the JSX syntax.
//JSX===>(behind the scenes JSX is transpiled to)React.createElemnt()===>react element-JS Object==>HTML elemnt(render)
//Use camelCase for wiriting attributes inside JSX.

//part-04:
//React functional compoments are basically a normal javascript program which returns a some piece of JSX code or which returns React element