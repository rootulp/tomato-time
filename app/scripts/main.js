$.getScript("bower_components/FlipClock/compiled/flipclock.js", function(){
  
   var clock;
   $(document).ready(function() {
       
       clock = $('.clock').FlipClock(1500, {
           clockFace: 'MinuteCounter',
           countdown: true,
           autoStart: false,
           callbacks: {
               start: function() {
                   $('.start').hide();
               }
           }
       });

       $('.start').click(function(e) {
           clock.start();
       });
   });
});
