(function (){
	var formOpen = document.getElementById('div-form');
	var formClose = document.getElementById('div-form');
	
	console.log("oioioio")

	document.getElementById('btnForm').addEventListener("click", openForm);
	document.getElementById('close-form').addEventListener("click", closeForm);


	function openForm() {
		formOpen.classList.toggle('--isOpen');
		console.log('oioi')
	}
	function closeForm() {
		formClose.classList.remove('--isOpen');
	}

})();