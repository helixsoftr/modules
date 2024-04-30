// ? Import injectCSS Module
import { injectCSS } from "./injectCSS.js"

// ? Create a new injection class

// * the parameters can be given :
// * required {name} [string] : name and id of the style element
// * required {code} [string] : native css code
// * optional {duration} [integer] : ms later style node gonna remove itself from <head> if no param givin style node not gonna remove itself

let style = new injectCSS({
    name: 'test',
    code: `
        #test{
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            background-color: red;
        }
    `,
    duration: 3000
})