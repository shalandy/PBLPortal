(function ($) {

	// ~~~~~~~~~~~~~~~~~~~~~~~~ Assign Slots ~~~~~~~~~~~~~~~~~~~~~~~~~//

	var slots = [
					["mon10", "mon11", "mon12", "mon1"],
					["tue10", "tue11", "tue12", "tue1"],
					["wed10", "wed11", "wed12", "wed1"],
					["thu10", "thu11", "thu12", "thu1"],
					["fri10", "fri11", "fri12", "fri1"]];

	// list of days, then time slots per day, then people per time slot
	var json = [
					[
						["Yusuf Yamani", "Eliot Hsu"], 
						["Donna Ye", "David Pailet", "Zachary Osterland", "Sabrina Ni", "Random Person"],
						["Ozair Khan", "Tonya Nguyen", "Rena Song", "Meejin Choi"], 
						["Jessica Tzeng", "Leona Chen", "Tae Kim"]],
					[
						["Austin Kim", "Justin Kim", "Caroline Chen"], 
						["Linda Li", "Cynthia Luan", "Sean Park"],
						["Hermes Ip", "Sarah Shin", "Paras Dave", "Annie Ouyang"], 
						["Vanessa Lin", "Wenbo Guo", "Arash Nassirinia"]],
					[
						["Taylor Wang", "Bob Feng", "Corey Gibbel", "Hyeonjo Jeong"], 
						["Emily Zhu", "Jack Jones", "Linda Zheng"],
						["Nicholas Paul", "Samantha Fang", "Younghoon Oh"], 
						["Emeri Zhang", "Tia Marie Vo"]],
					[
						["Lindsay Yang", "Stephanie Chen", "Emily Jin", "Eric Sung"], 
						["Coco Jiang", "Sonia Park"],
						["Shalandy Zhang", "Megan Wang", "Yichu Chen"], 
						["Alex Park", "Anjanaa Senthil Kumar", "Alice Cho"]],
					[
						["Copter Ruangrojanin", "Cyssi Ngo", "Kristy Kao", "Carrington Park"], 
						["Sunbin Kim", "Nancy Chen", "Chloe Lin", "Howard Yin"],
						["Arnold Chan", "Mikuto Murayama", "Roy Kamineni", "Josia Yuan"], 
						["Brian Zeng", "Amy Lu", "Nathan Orwig"]]];


	$.each(json, function(i) { // loops through each day
		$.each(this, function(j) { // loops through each time slot in each day
			var slot = slots[i][j];
			var slotclass = "ul" + slot;
			var slotobject = $("td." + slot);
			var temp = $("<ul/>").addClass(slotclass).appendTo(slotobject);
			var ul = $("ul." + slotclass);
			$.each(this, function() { // loops through each person in each time slot
				var li = $("<li/>").appendTo(ul);
	    		var a = $("<a/>").text(this).appendTo(li);
			});
		});
	});

	var hrefs = [$('.js-button').attr('href'), 'https://goo.gl/forms/elEmOKavGFXGk2QF3'];
	$(window).on('resize', function() {
		$('.js-button').attr('href', function() {
			return hrefs[$(window).width() > 737 ? 0 : 1];
		});
	}).trigger('resize');


	// ~~~~~~~~~~~~~~~~~~~~~~~~~ Hover Animation ~~~~~~~~~~~~~~~~~~~~~~~~//
	"use strict";
	$('.column100').on('mouseover',function(){
		// this grabs the table to find the appropriate style to use
		var width = $(window).width();
		if (width > 760) {
			var table1 = $(this).parent().parent().parent();
			var table2 = $(this).parent().parent();
			var verTable = $(table1).data('vertable')+"";
			var column = $(this).data('column') + ""; 

			$(table2).find("."+column).addClass('hov-column-'+ verTable);
			$(table1).find(".row100.head ."+column).addClass('hov-column-head-'+ verTable);
		}
	});

	$('.column100').on('mouseout',function(){
		var width = $(window).width();
		if (width > 760) {
			var table1 = $(this).parent().parent().parent();
			var table2 = $(this).parent().parent();
			var verTable = $(table1).data('vertable')+"";
			var column = $(this).data('column') + ""; 

			$(table2).find("."+column).removeClass('hov-column-'+ verTable);
			$(table1).find(".row100.head ."+column).removeClass('hov-column-head-'+ verTable);
		}
	});
    

})(jQuery);