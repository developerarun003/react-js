import BasicRouting from "./components/reactRouterV6/BasicRouting";


import myReactDOM from "react-dom/client";
import NestedRouting from "./components/reactRouterV6/NestedRouting";
const myHtmlContainerFromIndexdotHtml= document.getElementById("arun");
console.log(myHtmlContainerFromIndexdotHtml);
const myReactRoot = myReactDOM.createRoot(myHtmlContainerFromIndexdotHtml);
// myReactRoot.render(<BasicRouting></BasicRouting>)
myReactRoot.render(<NestedRouting/>)

