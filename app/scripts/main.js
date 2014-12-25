$.getScript('bower_components/FlipClock/compiled/flipclock.js', function(){
  
   var clock;
   $(document).ready(function() {
       $('.stop').hide();

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
           $('.start').hide();
           $('.stop').show();
       });

        $('.stop').click(function(e) {
           clock.stop();
           $('.stop').hide();
           $('.start').show();
       });

   });
});
