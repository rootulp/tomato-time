$.getScript("bower_components/FlipClock/compiled/flipclock.js",function(){var a;$(document).ready(function(){$(".stop").hide(),a=$(".clock").FlipClock(1500,{clockFace:"MinuteCounter",countdown:!0,autoStart:!1,callbacks:{start:function(){$(".start").hide()}}}),$(".start").click(function(){a.start(),$(".start").hide(),$(".stop").show()}),$(".stop").click(function(){a.stop(),$(".stop").hide(),$(".start").show()})})});