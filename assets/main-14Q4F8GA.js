import{g as p,s as m,u as y,p as S}from"./showToast-D93ANGHM.js";p();const q=(l,r,d)=>{let n=p();const a=document.querySelector(`#card${r}`);let t=a.querySelector(".productQuantity").innerText,o=a.querySelector(".productPrice").innerText;o=o.replace("₹","");let u=n.find(c=>c.id===r);if(console.log(u),u&&t>1){t=Number(u.quantity)+Number(t),o=Number(o*t);let c={id:r,quantity:t,price:o};c=n.map(i=>i.id===r?c:i),console.log(c),localStorage.setItem("cartProductLS",JSON.stringify(c)),m("add",r)}if(u)return!1;o=Number(o*t),t=Number(t),n.push({id:r,quantity:t,price:o}),localStorage.setItem("cartProductLS",JSON.stringify(n)),y(n),m("add",r)},g=(l,r,d)=>{const a=document.querySelector(`#card${r}`).querySelector(".productQuantity");let t=parseInt(a.getAttribute("data-quantity"))||1;return l.target.className==="cartIncrement"&&(t<d?t+=1:t===d&&(t=d)),l.target.className==="cartDecrement"&&t>1&&(t-=1),a.innerText=t,console.log(t),a.setAttribute("data-quantity",t.toString()),t},C=document.querySelector("#productContainer"),f=document.querySelector("#productTemplate"),N=l=>{if(!l)return!1;l.forEach(r=>{const{brand:d,category:n,description:a,id:t,image:o,name:u,price:c,stock:i}=r,e=document.importNode(f.content,!0);e.querySelector("#cardValue").setAttribute("id",`card${t}`),e.querySelector(".category").textContent=n,e.querySelector(".productName").textContent=u,e.querySelector(".productImage").src=o,e.querySelector(".productImage").alt=u,e.querySelector(".productStock").textContent=i,e.querySelector(".productDescription").textContent=a,e.querySelector(".productPrice").textContent=`₹${c}`,e.querySelector(".productActualPrice").textContent=`₹${c*4}`,e.querySelector(".stockElement").addEventListener("click",s=>{g(s,t,i)}),e.querySelector(".add-to-cart-button").addEventListener("click",s=>{q(s,t)}),C.append(e)})};N(S);
