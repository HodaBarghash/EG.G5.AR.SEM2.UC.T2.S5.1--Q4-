function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6amLu90Yk4T":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbx8ivTUObKt9oR0p61yliOLvxpoaVbI6pI1fvth2Pb7iLQmB23ZJY87JMRP9ml6MUNzxQ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

