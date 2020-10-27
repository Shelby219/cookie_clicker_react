import React from "react"

const AutoIncrementNumber = () =>{
    const [counter, setCounter] = React.useState(60);

        // Third Attempts
    React.useEffect(() => {
        const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <div>
          <div>Countdown: {counter}</div>
        </div>
      );
}



export default AutoIncrementNumber