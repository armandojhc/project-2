
let progress = 1;
let side = 0;
let buttoLock = 0;

const words = [
	[ "Go", "Skiing" ],
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

	function moveCard(domOne, domTwo, hiddenClass = "hidden") {
		if (hiddenClass === "hidden-right") {
			const cloned = $(domOne).clone();
			$(domOne).remove();
			$(".card-container").prepend(cloned);
		}
		$(domOne).removeClass('flipped');
		$(domTwo).removeClass('flipped');
		$(`${domOne} .front`).html(words[progress-1][0]);
		$(`${domOne} .back`).html(words[progress-1][1]);
		$(domTwo).addClass(hiddenClass);
		$(domOne).removeClass("d-none");
		setTimeout(() => {
			$(domOne).removeClass("vd-none");
		}, 20);
		buttoLock = 1;
		setTimeout(() => {
			$(domTwo).removeClass(hiddenClass);
			$(domTwo).addClass("d-none");
			$(domTwo).addClass("vd-none");

			if (hiddenClass === "hidden") {
				const cloned = $(domOne).clone();
				$(domOne).remove();
				$(".card-container").prepend(cloned);
			}
			buttoLock = 0;
		}, 760);
	}
	
	$("#prev").click(function() {
		if (progress === 1 || buttoLock === 1) {
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
			moveCard("#back-card", "#flip-card", "hidden-right");
		} else {
			moveCard("#flip-card", "#back-card", "hidden-right");
		}
		$("#progress").html(progress);
	});

	$("#next").click(function() {
		if (progress === 10 || buttoLock === 1) {
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
			moveCard("#back-card", "#flip-card");
		} else {
			moveCard("#flip-card", "#back-card");
		}
		$("#progress").html(progress);
	});
});

function flipCard(dom) {
	side = 1 - side;
	$(`${dom} .back`).html(words[progress-1][side]);
	$(`${dom} .front`).html(words[progress-1][side]);
	$(`${dom}`).toggleClass("flipped");
}

$(document).on("click", "#flip-card", function() {
	flipCard("#flip-card");
});

$(document).on("click", "#back-card", function() {
	flipCard("#back-card");
});