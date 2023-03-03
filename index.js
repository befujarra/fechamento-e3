document.getElementById("meuBotao").addEventListener("click", function () {
  const maquina = prompt("Para qual maquina esta produzindo?");

  let totalTb = parseFloat(prompt("Insira a quantidade total de batidas"));

  let descarte = parseFloat(prompt("Insira o peso total dos descartes"));

  if (maquina === "m1") {
    totalTb = (totalTb * 3) / 2;
    descarte = Math.round(descarte / 17.143);

    alert(
      "Quantidade total de strips: " +
        totalTb +
        "\n\n" +
        "Total de perdas: " +
        descarte +
        "\n\n" +
        "Produção total de strips (strips - descarte) : " +
        Math.round(totalTb - descarte) +
        " strips" +
        "\n\nTotal de perdas em cartuchos (strips ruins/13):   " +
        Math.round(descarte / 13) +
        " cartuchos" +
        "\n\nTotal strips bons em cartuchos: (total de strips-descarte/13)= " +
        Math.round((totalTb - descarte) / 13) +
        " cartuchos"
    );
  } else if (maquina === "b5") {
    totalTb = (totalTb * 3) / 2;
    descarte = Math.round(descarte / 17.143);

    alert(
      "Quantidade total de strips: " +
        totalTb +
        "\n\n" +
        "Total de perdas: " +
        descarte +
        "\n\n" +
        "Produção total de strips (strips - descarte ):  " +
        Math.round(totalTb - descarte) +
        " strips" +
        "\n\nTotal de perdas em cartuchos (strips ruins/3):   " +
        Math.round(descarte / 3) +
        " Cartuchos" +
        "\n\nTotal strips bons em cartuchos: (total de strips-descarte/3)= " +
        Math.round((totalTb - descarte) / 3) +
        " cartuchos"
    );
  }
});
