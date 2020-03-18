
let progress = 1;
let side = 0;

const words = [
	[ "Skiing", "Go" ],
	[ "Play", "Football" ],
	[ "Hero", "Selection" ],
	[ "Core", "Exception" ],
	[ "Card", "Flip" ],
	[ "Social", "Media" ],
	[ "Good", "Work" ],
	[ "Do", "Jokes" ],
	[ "Click", "Me" ],
	[ "The", "End"]
];

$(document).ready(function() {
	$("#prev").click(function() {
		if (progress === 1) {
			return;
		}

		if ($("#next").hasClass("disabled")) {
			$("#next").removeClass("disabled");
		}
		progress --;
		if (progress === 1 && !$(this).hasClass("disabled")) {
			$(this).addClass("disabled");
		}
		side = 0;
		if ($("#back-card").hasClass("d-none")) {
			moveCard("#back-card", "#flip-card", words[progress-1][0], "hidden-right");
		} else {
			moveCard("#flip-card", "#back-card", words[progress-1][0], "hidden-right");
		}
		$("#progress").html(progress);
	});

	function moveCard(domOne, domTwo, value, hiddenClass = "hidden") {
		if (hiddenClass === "hidden-right") {
			const cloned = $(domOne).clone();
			$(domOne).remove();
			$(".card-container").prepend(cloned);
		}
		$(domOne).html(value);
		$(domTwo).addClass(hiddenClass);
		$(domOne).removeClass("d-none");
		setTimeout(() => {
			$(domTwo).removeClass(hiddenClass);
			$(domTwo).addClass("d-none");

			if (hiddenClass === "hidden") {
				const cloned = $(domOne).clone();
				$(domOne).remove();
				$(".card-container").prepend(cloned);
			}
		}, 760);
	}

	$("#next").click(function() {
		if (progress === 10) {
			return;
		}

		if ($("#prev").hasClass("disabled")) {
			$("#prev").removeClass("disabled");
		}
		progress ++;
		if (progress === 10 && !$(this).hasClass("disabled")) {
			$(this).addClass("disabled");
		}
		side = 0;
		if ($("#back-card").hasClass("d-none")) {
			moveCard("#back-card", "#flip-card", words[progress-1][0]);
		} else {
			moveCard("#flip-card", "#back-card", words[progress-1][0]);
		}
		$("#progress").html(progress);
	});
});

$(document).on("click", "#flip-card", function() {
	side = 1 - side;
	$("#flip-card").html(words[progress-1][side]);
});

$(document).on("click", "#back-card", function() {
	side = 1 - side;
	$("#back-card").html(words[progress-1][side]);
});