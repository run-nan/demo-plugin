const e=window.React,o=window.Antd.Button,c=window.Antd.App;function l(t){const{modal:n}=c.useApp();return e.createElement("div",null,e.createElement(o,{type:"primary",onClick:()=>{n.info({title:"Hello",content:t.text})}},t.text))}export{l as default};