(function(){
  var mode=new URLSearchParams(location.search).get('counter');
  if(!['off','on','status'].includes(mode)) return;
  if(mode==='off') localStorage.setItem('skipgc','t');
  if(mode==='on') localStorage.removeItem('skipgc');
  var disabled=localStorage.getItem('skipgc')==='t';
  function show(){
    if(!document.body) return setTimeout(show,50);
    var old=document.getElementById('goatcounter-state'); if(old) old.remove();
    var n=document.createElement('div'); n.id='goatcounter-state';
    n.style.cssText='position:fixed;left:18px;right:18px;bottom:84px;z-index:9999;max-width:430px;margin:auto;padding:16px 18px;border:2px solid #173d32;background:#fffaf1;box-shadow:6px 6px 0 #dff27a;font:14px Arial,sans-serif;line-height:1.45;color:#173d32';
    n.innerHTML='<b style="display:block;font-size:17px;margin-bottom:5px">Your visits are '+(disabled?'NOT being counted':'being counted')+'</b>'+(disabled?'This browser is excluded. Reopening the disable link keeps it excluded.':'This browser is included in the visitor total.')+'<div style="margin-top:10px"><a href="?counter='+(disabled?'on':'off')+'" style="color:#ef6e50;font-weight:700">'+(disabled?'TURN COUNTING BACK ON':'EXCLUDE THIS BROWSER')+'</a> · <button type="button" style="border:0;background:transparent;text-decoration:underline;cursor:pointer">CLOSE</button></div>';
    n.querySelector('button').onclick=function(){n.remove()}; document.body.appendChild(n);
  }
  show();
})();
