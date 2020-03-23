
let progress = 1;
let side = 0;
let buttoLock = 0;

// const words = [
// 	[ "Go", "Skiing" ],
// 	[ "Play", "Football" ],
// 	[ "Hero", "Selection" ],
// 	[ "Core", "Exception" ],
// 	[ "Card", "Flip" ],
// 	[ "Social", "Media" ],
// 	[ "Good", "Work" ],
// 	[ "Do", "Jokes" ],
// 	[ "Click", "Me" ],
// 	[ "The", "End"]
// ];

let phrases = [];

$(document).ready(function () {

	function moveCard(domOne, domTwo, hiddenClass = "hidden") {
		if (hiddenClass === "hidden-right") {
			const cloned = $(domOne).clone();
			$(domOne).remove();
			$(".card-container").prepend(cloned);
		}
		$(domOne).removeClass('flipped');
		$(domTwo).removeClass('flipped');
		$(`${domOne} .front`).html(phrases[progress - 1].english);
		$(`${domOne} .back`).html(phrases[progress - 1].spanish);
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

	$("#prev").click(function () {
		if (progress === 1 || buttoLock === 1) {
			return;
		}

		if ($("#next").hasClass("disabled")) {
			$("#next").removeClass("disabled");
		}
		progress--;
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

	$("#next").click(function () {
		if (progress === 10 || buttoLock === 1) {
			return;
		}

		if ($("#prev").hasClass("disabled")) {
			$("#prev").removeClass("disabled");
		}
		progress++;
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

	// api call sets username top right
	$.get("/api/user_data").then(function (data) {
		$(".member-name").text(`Logged in as ${data.email}`);
	});

	//  front end api call to the travel category
	$.get("/api/phrases/socializing").then(function (data) {
		phrases = data;
		$(`${"#flip-card"} .front`).html(data[0].english);
		$(`${"#flip-card"} .back`).html(data[0].spanish);

	})
		.catch(err => console.log(err));
});

function flipCard(dom) {
	side = 1 - side;
	// Flipped the english first then the spanish
	$(`${dom} .back`).html(phrases[progress - 1].spanish);
	$(`${dom} .front`).html(phrases[progress - 1].english);
	$(`${dom}`).toggleClass("flipped");
}

$(document).on("click", "#flip-card", function () {
	flipCard("#flip-card");
});

$(document).on("click", "#back-card", function () {
	flipCard("#back-card");
});
