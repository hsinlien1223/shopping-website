
						var jq = $;
													(		function(){
						window.inputNumber = function(el){
							var min=el.attr('min')|| false;
							var max=el.attr('max')|| false;
						
						var els={};
					els.dec=el.prev();
					els.inc=el.next();
						el.each(function(){init($(this));});
						function init(el){
							els.dec.on('click',decrement);
							els.inc.on('click',increment);
							function decrement(){
								var value = el[0].value;
							value--;
							if(!min|| value>= min){
								el[0].value=value;
							}
							}
							function increment(){
								var value=el[0].value;
								value++;
								if(!max||value<=max){
									el[0].value=value++;
								}
							}
							}
						}
					})
					();
					inputNumber($('.input-number'));
			
			function opentabs2(evt, Name) {
  var i, tabcontent2, tablinks;
  tabcontent2 = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent2.length; i++) {
    tabcontent2[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(Name).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

function opentabs(evt, Name) {
					var i, tabcontent, tablinks;
					tabcontent = document.getElementsByClassName("tabcontent");
					for (i = 0; i < tabcontent.length; i++) {
					tabcontent[i].style.display = "none";
					}
					tablinks = document.getElementsByClassName("tablinks");
					for (i = 0; i < tablinks.length; i++) {
					tablinks[i].className = tablinks[i].className.replace(" active", "");
					}
					document.getElementById(Name).style.display = "block";
					evt.currentTarget.className += " active";
					}
					document.getElementById("defaultOpen2").click();			