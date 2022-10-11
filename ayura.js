$(document).ready(function(){
    $(".utama").click(function(){
        let id = $(this).prop('id');
        let split = id.split('_');
        let id_utama = split[1];

        $(".utama").removeClass('aktif');
        $("#geser_1").slideUp();
        $("#geser_2").slideUp();
        $("#geser_3").slideUp();
        $("#geser_"+id_utama).slideToggle("medium");
        $("#utama_"+id_utama).addClass('aktif');


    });
});