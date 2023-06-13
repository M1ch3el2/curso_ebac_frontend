$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const newTask = $('#lista-tarefa').val();
        const newItem = $('<li style = "display: block"></li>');
        $('#elemento').hide();
        $(`<li><a href="#">${newTask}</a></li>`).appendTo(newItem);
        $(newItem).appendTo('ul');

        $(newItem).click(function () {
            $(newItem).toggleClass('texto-riscado')
        })
    })
})