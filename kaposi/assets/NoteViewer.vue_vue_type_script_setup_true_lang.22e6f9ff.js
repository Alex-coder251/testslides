import{d as c,i as r,a as m,o as l,e as s,v as i,t as u}from"./index.2f3c3044.js";const k=["innerHTML"],v=["textContent"],C=c({__name:"NoteViewer",props:{class:null,noteHtml:null,note:null},emits:["click"],setup(e){const t=e;return r(m),(o,n)=>e.noteHtml?(l(),s("div",{key:0,class:i(["prose overflow-auto outline-none",t.class]),onClick:n[0]||(n[0]=a=>o.$emit("click")),innerHTML:e.noteHtml},null,10,k)):(l(),s("div",{key:1,class:i(["prose overflow-auto outline-none",t.class]),onClick:n[1]||(n[1]=a=>o.$emit("click")),textContent:u(e.note)},null,10,v))}});export{C as _};
