$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    const tarefa = $("#tarefa__lista").val();

    if (tarefa.trim() === "") {
      alert("Escreva algo!");
      return;
    }

    const novoItem = $("<li></li>").text(tarefa);

    novoItem.appendTo("ul");
    $("#tarefa__lista").val("");
  });
});

$("ul").on("click", "li", function () {
  $(this).css("text-decoration", "line-through");
});
