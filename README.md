# multilevel-dropdown
CSS3 and jQuery Multilevel Dropdowns that Convert into Off Canvas Menu on Mobile devices. 

## Live Demo 
[browse the live demo](https://codehimblog.github.io/multilevel-dropdown/)

## Main Features
 * Fully reponsive, highly customizable and configurable.
 * Convert into off canvas menu on mobile devices.
 * Any animation can be used for list items (from animate.css) when dropdown items revealed.
 * +20 built in color schemes for menu. 
 * Dim overly effect wen menu drawer open (on small screen). 
 * CSS3 animations and attractive design. 
 * Easy to use & implement, User and SEO friendly.  
 
 ## How to Use
 Include all the necessary files into your project and call jQuery Codehim Dropdown plugin in DOM ready function. An example below:
 <pre>   $(".codehim-dropdown").CodehimDropdown(); //with all default settings
 </pre>
 ## Plugin Options and Definitions
 <pre>
skin: "red", //skin color for menubar and drawer
slideUpOther: true, //close other opened dropdowns if user trigger new one 
sticky: true, //fixed menubar on top, false to static
	/* Some settings for mobile devices (small screen) when horizontal menubar converted into offcanvas menu */
listAnimation: "fadeInUp", //Animate list items when revealed 
subListAnimation: "fadeInUp", //Animate sub items when revealed 
	//@info: any animation can be used, put the name of animation class name from animate.css in the above options
dimOverlay: true, //possible options true or false 
offCanvasSpeed: "default", //possible options are default, fast, faster, slow and slower
offCanvasDirection: "left", //possible options are left and right 
offCanvasWidth: 290, //the width of drawer on mobile devices in pixels
onOffCanvasOpen: function () {}, //your custom function to execute when menu open on mobile devices
onOffCanvasClose: function () {}, //your custom function to execute when menu closed
</pre>
