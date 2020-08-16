$(document).ready(function () {
    console.log("ready!");

    $(document).on( "click" ,"a.delete", function() {
        $id = $(this).find('#custId').val();
        $.ajax({
            type: "DELETE",
            url: "http://localhost:3000/" + $id,
            success: function (response) {
                $("div#customers > table").html($(response).find("table").html());
                $("div#customers > div.clearfix").html($(response).find("div.clearfix").html());
                //alert(response);
            },
        });
    });
});