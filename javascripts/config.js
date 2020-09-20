window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
  
};

window.onload = function() {
  Particles.init({
	selector: '.background',
	color: ['#f6ff75', '#404B69', '#DBEDF3'],
	connectParticles: true,
	sizeVariations: 4, 
    // options for breakpoints
	responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles: 50,
        color: ['#f6ff75', '#404B69', '#DBEDF3'], //#DA0463
        connectParticles: true
      }
    }, 
	{
      breakpoint: 425,
      options: {
        maxParticles: 25,
        connectParticles: true
      }
    }, 
	{
      breakpoint: 320,
      options: {
        maxParticles:0
		// disables particles.js
      }
    }
  ]
});
}
