import{_ as e,l as o,H as i,k as n,I as p}from"../app.B87WlWRx.js";import{p as g}from"./gitGraph-YCYPL57B.Cw23oRPE.js";import"./framework.VX8o9GSp.js";import"./theme.BJum-JA3.js";import"./baseUniq.L2e6f_wn.js";import"./basePickBy.DksrbNSn.js";import"./clone.BTR4xJQ8.js";var m={parse:e(async r=>{const a=await g("info",r);o.debug(a)},"parse")},v={version:p},d=e(()=>v.version,"getVersion"),c={getVersion:d},l=e((r,a,s)=>{o.debug(`rendering info diagram
`+r);const t=i(a);n(t,100,400,!0),t.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${s}`)},"draw"),f={draw:l},D={parser:m,db:c,renderer:f};export{D as diagram};