$(function() {
	AOS.init();

	$('#fosterfoodsweb').click(function() {
		let imgs = ``;
		for (var i = 12; i >= 1; i--) {
			imgs += `
				<div class="carousel-item ${i == 1 ? 'active' : ''}">
					<a href="./imgs/fosterfoods${i}.png" target="_blank">
						<img src="./imgs/fosterfoods${i}.png" class="border border-dark pointer d-block w-100">
					</a>
				</div>
			`;
		}
		showGalleryModal('GALLERY', imgs, 500);
	});

	$('#fosterfoodsmobile').click(function() {
		let imgs = ``;
		for (var i = 13; i >= 1; i--) {
			imgs += `
				<div class="carousel-item ${i == 1 ? 'active' : ''}">
					<a href="./imgs/mobilefosterfoods${i}.jpg" target="_blank">
						<img src="./imgs/mobilefosterfoods${i}.jpg" class="border border-dark pointer d-block w-100">
					</a>
				</div>
			`;
		}
		showGalleryModal('GALLERY', imgs, 300);
	});

	$('#surelogweb').click(function() {
		let imgs = ``;
		for (var i = 10; i >= 1; i--) {
			imgs += `
				<div class="carousel-item ${i == 1 ? 'active' : ''}">
					<a href="./imgs/surelog${i}.png" target="_blank">
						<img src="./imgs/surelog${i}.png" class="border border-dark pointer d-block w-100">
					</a>
				</div>
			`;
		}
		showGalleryModal('GALLERY', imgs, 500);
	});

	$('#surelogmobile').click(function() {
		let imgs = ``;
		for (var i = 4; i >= 1; i--) {
			imgs += `
				<div class="carousel-item ${i == 1 ? 'active' : ''}">
					<a href="./imgs/mobilesurelog${i}.jpg" target="_blank">
						<img src="./imgs/mobilesurelog${i}.jpg" class="border border-dark pointer d-block w-100">
					</a>
				</div>
			`;
		}
		showGalleryModal('GALLERY', imgs, 300);
	});

	$('#geogreenweb').click(function() {
		let imgs = ``;
		for (var i = 9; i >= 1; i--) {
			imgs += `
				<div class="carousel-item ${i == 1 ? 'active' : ''}">
					<a href="./imgs/geogreen${i}.png" target="_blank">
						<img src="./imgs/geogreen${i}.png" class="border border-dark pointer d-block w-100">
					</a>
				</div>
			`;
		}
		showGalleryModal('GALLERY', imgs, 500);
	});

	$('#pgadcmweb').click(function() {
		let imgs = ``;
		for (var i = 8; i >= 1; i--) {
			imgs += `
				<div class="carousel-item ${i == 1 ? 'active' : ''}">
					<a href="./imgs/dcm${i}.png" target="_blank">
						<img src="./imgs/dcm${i}.png" class="border border-dark pointer d-block w-100">
					</a>
				</div>
			`;
		}
		showGalleryModal('GALLERY', imgs, 500);
	});

	$('#pgadcmmobile').click(function() {
		let imgs = ``;
		for (var i = 12; i >= 1; i--) {
			imgs += `
				<div class="carousel-item ${i == 1 ? 'active' : ''}">
					<a href="./imgs/pgadcm${i}.png" target="_blank">
						<img src="./imgs/pgadcm${i}.png" class="border border-dark pointer d-block w-100">
					</a>
				</div>
			`;
		}
		showGalleryModal('GALLERY', imgs, 300);
	});

	function showGalleryModal(title, imgs, size) {
		showModal(``,`
			<span class="float-right">
				<h4><i class="fa fa-times pointer" onclick="Swal.close()"></i></h4>
			</span>
			<br><br>
			<h4>${title}</h4>
			<br>
			<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner">
					${imgs}
				</div>
				<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
				<br>
			</div>
		`, size)
	}
});