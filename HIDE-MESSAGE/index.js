container.onclick = function (event) {
    if (event.target.className != "remove-button") return;

    let pane = event.target(".pane");
    pane.remove();
  };

  