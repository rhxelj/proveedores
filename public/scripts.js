// Sidenav
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems,{
    edge:'right',draggable:true
  });
});


// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, {fullWitdh:true});
// });

// Image enlarge efect

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
  });

// Slider

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems,{
      height:600,
      // interval: 90,
      duration: 2000
    });
  });

 


// Action Button

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems,{direction:'top',hoverEnabled: false} );
  });

  //ToolTip
  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.tooltipped');
  //   var instances = M.Tooltip.init(elems);
  // });

  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.parallax');
  //   var instances = M.Parallax.init(elems);
  // });

  // Collapsible

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });

// modal
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

//  Carrousel
  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.carousel');
  //   var instances = M.Carousel.init(elems);
  // });



  