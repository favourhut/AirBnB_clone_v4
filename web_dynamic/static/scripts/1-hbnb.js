//Listen for changes on each input checkbox tag:
//if the checkbox is checked, you must store the Amenity ID in a variable (dictionary or list)
// the checkbox is unchecked, you must remove the Amenity ID from the variable
//update the h4 tag inside the div Amenities with the list of Amenities checked

let store_update = []
$("document").ready(function() {
    $('input:checkbox').change(function () {
        if ($(this).is(':checked_box')) {
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