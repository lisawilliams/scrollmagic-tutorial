$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// pin the intro

	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: "#intro",
		triggerHook: 0,
		duration: "30%"
	})
	.setPin("#intro", {pushFollowers: false})
	.addTo(controller);

	// pin again

	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: "#project01",
		triggerHook: "40%"
	})
	.setPin("#intro", {pushFollowers: false})
	.addTo(controller);

	// loop through each project element
	$('.project').each(function(){

		//build a scene
	 var ourScene = new ScrollMagic.Scene({
		 triggerElement: this.children[0],
		 triggerHook: 0.9
	 })
	 .setClassToggle(this, 'fade-in')
	 .addIndicators({
		 name: 'fade scene',
		 colorTrigger: 'black',
		 indent: 50,
		 colorStart: 'green',
		 colorEnd: 'red'
	 }) // this requires the plugin made available in index.html
	 // addIndicators allows us to see indicators as we scroll for debugging purposes
	 .addTo(controller);
});

});
