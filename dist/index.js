var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{A:()=>r,Z:()=>a});const r=(e,t)=>{try{return e in t?t[e]():t.default()}catch(r){throw new Error(n(r,e,t))}},n=(e,t,r)=>{return e instanceof TypeError?(null==t&&null==r?"BetterSwitch: No arguments have been passed":!(null!=(n=r)&&Object.is(n.constructor,Object))&&"BetterSwitch: The caseObject parameter is not an object literal")||(e=>"string"!=typeof e)(t)&&"BetterSwitch: The match parameter is not a string"||((e,t)=>e in t&&"function"!=typeof t[e])(t,r)&&`BetterSwitch: The '${t}' key in your caseObject parameter does not return a function`||((e,t)=>"default"in t&&"function"!=typeof t.default)(0,r)&&`BetterSwitch: The '${t}' key in your caseObject parameter does not exist, and the 'default' key does not return a function`||((e,t)=>!(e in t)&&!("default"in t))(t,r)&&`BetterSwitch: '${t}' is not a key in your caseObject parameter, and no 'default' key is provided`||`BetterSwitch: Unhandled error (${typeof e})`:`BetterSwitch: Unhandled error (${typeof e})`;var n},a=r;var o=t.A,c=t.Z;export{o as betterSwitch,c as default};
//# sourceMappingURL=index.js.map