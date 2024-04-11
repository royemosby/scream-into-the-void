import { useEffect, useRef, useState } from 'react';
//import {animated} from '@react-spring/web';

export function Void(){
  const messages = [
  "Hi, this is the void",
  "You're next",
];
  const renderRef = useRef(false);
  const intervalRef = useRef(0);
  const responses = [
      "Out of all the screams into the void today, yours is the most piteous.",
      "The void has heard your pitiful scream. It is laughing really hard.",
      "Congratulations! Your shout into the void has been rated a 10 out of 10 for maximum earnestness.",
      "Deep within the endless void, your shout ignites a spark of amusement for its denizens.",
      "The void has received your pitiable cry. You will get a response when you next transition between wakefulness and sleep.",
      "Your message reflects the same timeless wisdom of Wheel of Fortune contestants screaming letter guesses.",
      "The void just couldn't help but grumble back in agreement with your sorrowful cry.",
      "Whispers of your scream have reached slumbering beings of the night sky. They are unmoved.",
      "Just when the void thought it had reached peak voidness, your inexplicable yell injected it with a fractal of puzzlement.",
      "The void tried its best to catch your heartfelt screams but got distracted by a butterfly. Sorry.",
      "SCRP VIDCASDET! It seems you forgot to take safety precautions before hitting submit. You are right to now be worried.",
      "You have been assigned to morn an unloved stranger's death. Feelings of melancholy are normal.",
      "BINGO! The sincerity alarm went off!",
      "No.",
      "PSA: Beware of employees from the tax office who compete against you during play auditions."
    ];

  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("")
  const [voidLine, setVoidLine] = useState(messages[0]);
  const [labelIsShown, setLabelIsShown] = useState(false);

  function sendMessage(e){
    e.preventDefault();
    setResponse(responses[Math.floor(Math.random()*responses.length)]);
    setTimeout(()=> {
      setMessage("")
      setResponse("")
      intervalRef.current = 0;
      updateVoidLine();
    }, 6000)
  }

  function updateVoidLine() {
    if(intervalRef.current < messages.length){
      setTimeout(()=> {
        setVoidLine(messages[intervalRef.current])
        intervalRef.current++;
        updateVoidLine();
      }, 3000);
    } if (intervalRef.current === messages.length){
      setTimeout(()=> {
        setLabelIsShown(true);
      },3000);
    }
  }

  useEffect(
    () =>  {
      if(renderRef){
        updateVoidLine();
      }
        renderRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
  )

  return (
    <div className="void-interaction">
      { response ? <p className='void-response'>{response}</p> :
        <>
        {!labelIsShown ? <p className='void-text'>{voidLine}</p>
        :
        <form onSubmit={sendMessage}>
            <label htmlFor="scream" className="void-text">Enter text to be heard by the void</label>
            <input type="text" className='scream' name="scream" value={message} onChange={(e)=> setMessage(e.target.value)}/>
            <input type="submit" className='submit' value="Submit to the void" />
          </form>
      }
      </>
    }
      </div>
  )
}
