//Listen for changes on each input checkbox tag:
//if the checkbox is checked, you must store the Amenity ID in a variable (dictionary or list)
// the checkbox is unchecked, you must remove the Amenity ID from the variable
//update the h4 tag inside the div Amenities with the list of Amenities checked

let store_update = []
$("document").ready(function() {
    $('input:checkbox').change(function () {
        if ($(this).is(':store_update')) {
            store_update[$(this).data('id')] = $(this).data('name');
        }
        else {
            delete store_update[$(this).data('id')];
        }
        $('div.amenities h4').html(function () {
            let amenities = [];
            Object.keys(store_update).forEach(function (key) {
            amenities.push(store_update[key]);
            });
            
            if (amenities.length === 0) {
            return ('&nbsp');
            }
            return (amenities.join(', '));
        });
    });
})

const api_status = $('DIV#api_status');
$.ajax("http://0.0.0.0:5001/api/v1/status/").done(function (data){
    if (data.status == "OK") {
        api_statu.addClass("available");
    } else {
        api_status.removeClass("available");
    }
});