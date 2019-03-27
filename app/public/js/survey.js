$(function() {
  
  const employeeAnalysis = function(answerArray) {
    $.ajax({
        url: "/api/employees",
        method: "GET"
    })
    .then(function(result) {
        let diffArray = [];
        for(let i = 0; i < result. length; i++) {
            let totalDiff = 0;
            for(let j = 0; j < result[i].scores.length; j++) {
                let quesDiff = Math.abs(answerArray[i] - result[i].scores[j]);
                totalDiff += quesDiff;
            }
            diffArray.push(totalDiff)
        }
        console.log(diffArray);
        let smallDiffIndex = diffArray.indexOf(Math.min(...diffArray));
        const finalMatch = result[smallDiffIndex];
        console.log(smallDiffIndex);
        $("#match-name").text(finalMatch.name);
        $("#match-img").attr(src, finalMatch.photo)
    })
  };
    const captureInput = function(e) {
    e.preventDefault();
    let answerArray = [
      $("#q1").val(),
      $("#q2").val(),
      $("#q3").val(),
      $("#q4").val(),
      $("#q5").val(),
      $("#q6").val(),
      $("#q7").val(),
      $("#q8").val(),
      $("#q9").val(),
      $("#q10").val()
    ];

    employeeAnalysis(answerArray);

    // modal works!
    $("#results-modal").modal({
      show: true
    });
  };

  $("#submit").on("click", captureInput);
});
