(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,n,t){e.exports=t(30)},29:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var i=t(0),a=t.n(i),r=t(13),s=t.n(r),o=t(1),l=t(3),u=t(4),c=t(5),d=t(7),h=t(6),m=t(2),p=t(8);function g(){var e=Object(o.a)(["\n  background: ",";\n  list-style: none;\n  border-bottom: 1px solid #d8d8d8;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);\n  margin: 0;\n  padding: 5px 20px;\n  transition: background 0.4s;\n  > p {\n    margin: 10px 0;\n  }\n\n  > span {\n    font-size: 12px;\n    color: #d62074;\n  }\n\n  hr {\n    margin: 5px 0;\n    border: 0.5px solid #1e1e1f17;\n  }\n"]);return g=function(){return e},e}function f(){var e=Object(o.a)(["\n  margin: 0;\n  padding: 0;\n  position: relative;\n  height: 520px;\n  overflow: scroll;\n  width: 120%;\n  display: flex;\n  flex-direction: column;\n  left: -10%;\n"]);return f=function(){return e},e}function v(){var e=Object(o.a)(["\n  margin: 0;\n  text-align: left;\n  outline: 0;\n  border: 10px solid #f7f7f7;\n  width: 120%;\n  left: -10%;\n  position: relative;\n  z-index: 2;\n  font-size: 20px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);\n  padding: 20px;\n"]);return v=function(){return e},e}function b(){var e=Object(o.a)(["\n  max-width: 400px;\n  margin: 50px auto;\n"]);return b=function(){return e},e}var x=l.b.form(b()),S=l.b.input(v()),w=l.b.ul(f()),C=l.b.li(g(),function(e){return e.isActive?"#a8a6ce":"white"}),O=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(d.a)(this,Object(h.a)(n).call(this,e))).itemRef=a.a.createRef(),t}return Object(p.a)(n,e),Object(c.a)(n,[{key:"componentDidUpdate",value:function(){this.props.isActive&&this.itemRef.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}},{key:"render",value:function(){var e=this.props,n=e.datum,t=e.isActive,r=e.handleItemClick,s=e.handleMouseOver,o=e.index,l=e.userInput;return a.a.createElement(C,{isActive:t,onClick:function(e){return r(e)},onMouseEnter:function(e){return s(e,o)},ref:this.itemRef},a.a.createElement("p",null,n.id),a.a.createElement("i",null,n.name),n.items.toString().includes(l.toLowerCase())?a.a.createElement(i.Fragment,null,a.a.createElement("hr",null),a.a.createElement("span",null,'"',l,'" Found in items'),a.a.createElement("hr",null)):null,a.a.createElement("p",null,n.address,", ",n.pincode))}}]),n}(i.Component),k=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(d.a)(this,Object(h.a)(n).call(this,e))).state={showSuggestions:!1,activeSuggestion:null,userInput:"",filteredSuggestion:[]},t.handleSearch=t.handleSearch.bind(Object(m.a)(t)),t.handleKey=t.handleKey.bind(Object(m.a)(t)),t.handleItemClick=t.handleItemClick.bind(Object(m.a)(t)),t.handleMouseOver=t.handleMouseOver.bind(Object(m.a)(t)),t}return Object(p.a)(n,e),Object(c.a)(n,[{key:"handleSearch",value:function(e){var n=this.props.data,t=e.target.value,i=n.filter(function(e){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1||e.id.indexOf(t.toLowerCase())>-1||e.items.toString().includes(t.toLowerCase())||e.address.toLowerCase().indexOf(t.toLowerCase())>-1||e.pincode.toLowerCase().indexOf(t.toLowerCase())>-1});this.setState({activeSuggestion:null,filteredSuggestion:i,showSuggestions:0!==t.length,userInput:e.currentTarget.value})}},{key:"handleKey",value:function(e){var n=this.state,t=n.activeSuggestion,i=n.filteredSuggestion;if(13===e.keyCode)i[t]&&this.setState({activeSuggestion:0,showSuggestions:!1,userInput:i[t].name});else if(38===e.keyCode){if(null===t)return;if(0===t)return void this.setState({activeSuggestion:null});this.setState({activeSuggestion:t-1})}else if(40===e.keyCode){if(t===i.length-1)return;if(null===t)return void this.setState({activeSuggestion:0});this.setState({activeSuggestion:t+1})}}},{key:"handleItemClick",value:function(e){var n=this.state,t=n.activeSuggestion,i=n.filteredSuggestion;this.setState({activeSuggestion:0,showSuggestions:!1,userInput:i[t].name})}},{key:"handleMouseOver",value:function(e,n){this.setState({activeSuggestion:n})}},{key:"render",value:function(){var e=this,n=this.state,t=n.showSuggestions,r=n.activeSuggestion,s=n.filteredSuggestion,o=n.userInput;return a.a.createElement("div",null,a.a.createElement(x,{onSubmit:function(e){return e.preventDefault()}},a.a.createElement(S,{type:"text",placeholder:"Search Users",onChange:this.handleSearch,onKeyDown:this.handleKey,value:o}),t?a.a.createElement(w,null,0===s.length?a.a.createElement(C,{key:"no-data"},a.a.createElement("p",null,"No User Found")):a.a.createElement(i.Fragment,null,s.map(function(n,t){return a.a.createElement(O,{datum:n,key:n.id,isActive:r===t,userInput:o,index:t,handleItemClick:e.handleItemClick,handleMouseOver:e.handleMouseOver})}))):null))}}]),n}(i.Component),y=[{id:"123-s2-546",name:"John Jacobs",items:["bucket","bottle"],address:"1st Cross, 9th Main, abc Apartment",pincode:"5xx012"},{id:"123-s3-146",name:"David Mire",items:["Bedroom Set"],address:"2nd Cross, BTI Apartment",pincode:"4xx012"},{id:"223-a1-234",name:"Soloman Marshall",items:["bottle"],address:"Riverbed Apartment",pincode:"4xx032"},{id:"121-s2-111",name:"Ricky Beno",items:["Mobile Set"],address:"Sunshine City",pincode:"5xx072"},{id:"123-p2-246",name:"Sikander Singh",items:["Air Conditioner"],address:"Riverbed Apartment",pincode:"4xx032"},{id:"b23-s2-321",name:"Ross Wheeler",items:["Mobile"],address:"1st Cross, 9th Main, abc Apartement",pincode:"5xx012"},{id:"113-n2-563",name:"Ben Bish",items:["Kitchen Set","Chair"],address:"Sunshine City",pincode:"5xx072"},{id:"323-s2-112",name:"John Michael",items:["Refrigerator"],address:"1st Cross, 9th Main, abc Apartement",pincode:"5xx012"},{id:"abc-34-122",name:"Jason Jordan",items:["Mobile"],address:"Riverbed Apartment",pincode:"4xx032"}];function E(){var e=Object(o.a)(["\n  body {\n    background: #e4ccc5;\n    font-size: 20px;\n    font-weight: 200;\n  }\n"]);return E=function(){return e},e}var j=Object(l.a)(E());var I=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(j,null),a.a.createElement(k,{data:y}))};t(29);s.a.render(a.a.createElement(I,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.0537db4a.chunk.js.map