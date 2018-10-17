const allMouseoverfront = $('.mouseover-front');


allMouseoverfront.on('mouseover', function(e) {
	const currentButton = $(e.target);

	if (currentButton.is('.manhattan')) {
		$('.frontpage').css({
			'background-image': 'url(assets/manhattan.jpg)',
			'background-size': '110% 110%',
		})
	}

	if (currentButton.is('.brooklyn')) {
		$('.frontpage').css({
			'background-image': 'url(assets/brooklyn.jpg)',
			'background-size': '110% 110%',
		})
	}

	if (currentButton.is('.queens')) {
		$('.frontpage').css({
			'background-image': 'url(assets/queens.jpg)',
			'background-size': '110% 110%',
		})
	}

	if (currentButton.is('.bronx')) {
		$('.frontpage').css({
			'background-image': 'url(assets/bronx.jpg)',
			'background-size': '110% 110%',
		})
	}

	if (currentButton.is('.statenisland')) {
		$('.frontpage').css({
			'background-image': 'url(assets/statenisland.jpg)',
			'background-size': '110% 110%',
		})
	}

});


allMouseoverfront.on('mouseout', function(e) {
	$('.frontpage').css({
		'background-image': 'url(http://pixel.nymag.com/imgs/daily/intelligencer/2015/12/04/birds/04-new-years-party2.w1200.h630.jpg)',
		'background-size': '100% 100%'
	})
});

function getGoogleURL(addressObj) {
	const {
		address,
		city,
		state,
		zip,
	} = addressObj;

	const url = `https://www.google.com/maps/place/${address.split(' ').join('+')},+${city.split(' ').join('+')},+${state}+${zip}`

	return url;
}
// grab the input field
const input = $('input');
const dataWrapper = $(".data")
input.on('keydown', function(e) {
    // if a is pressed
    if (e.which === 13) {
    	const zip = $(e.target).val();
    	const centers = data[zip]; // gibesn you an array of senior center objects
    	console.log(centers)
    	dataWrapper.empty();
    	for (let i = 0; i < centers.length; i++) {
    		const url = getGoogleURL(centers[i]);
    		dataWrapper.append(`<div class="data-item">
    			<a target="_blank" href="${url}">${centers[i].title}</a>
    			<span class="address">
    				${centers[i].address}
    			</span>
    		</div>`);
    	}

        // data[]
    }
});

const lookup = $('.lookup')

lookup.on('click', function() {
	const zip = input.val();
	const centers = data[zip]; // gibesn you an array of senior center objects
    	console.log(centers)
    	dataWrapper.empty();
    	for (let i = 0; i < centers.length; i++) {
    		const url = getGoogleURL(centers[i]);
    		dataWrapper.append(`<div class="data-item">
    			<a target="_blank" href="${url}">${centers[i].title}</a>
    			<span class="address">
    				${centers[i].address}
    			</span>
    		</div>`);
    	}
})
