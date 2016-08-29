var observer = new MutationObserver(function(mutations){
  mutations.forEach(function(mutation) {
    var d=document.documentElement;
    var overlay = d.querySelector(".fancybox-overlay");
    if (overlay){
      overlay.remove();
      d.className="";
      observer.disconnect();
    }
  })
});

observer.observe(document.body, {
    childList: true
  , subtree: true
  , attributes: false
  , characterData: false
});
