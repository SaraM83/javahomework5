$(document).ready(function() {
    $('.loc_button').on('click', () => {
        $('.loc-text').toggle();
    });
    $('.music_button').on('click', () => {
        $('.music-text').toggle();
    });
    $('.notes_button').on('click', () => {
        $('.notes-text').toggle();
    }); 
    $('.books_button').on('click', () => {
        $('.books-text').toggle();
    }); 
    $('.tend_button').on('click', () => {
        $('.tend-text').toggle();
    }); 
});
