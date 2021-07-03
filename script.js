//Begin with stop watch class component and some UI elements

class StopWatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timePassedInMilliSeconds: 0
        }
        this.timer = null; //sets up the component state this.timer

        // need to bind to this object to use this in the callback function
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
    }

    //Start method for stopwatch
    start() {
        if (!this.timer) { //make sure timer does not start every time user hits button
            let startTime = Date.now();
            this.timer = setInterval(() => { //stored in this.timer to use it in stop method
                const stopTime = Date.now();
                //equation that calculates the time elapsed
                //timeelapsed = (stoptime - start time) + prev time elapsed
                const timePassedInMilliSeconds = stopTime - startTime + this.state.timePassedInMilliSeconds;
                //changes the state of time elapsed to log it
                this.setState({
                    timePassedInMilliSeconds,
                });
                
                //clears start time to the new current time
                startTime = stopTime;
            }, 250);
        };
    }

    //V simple - using this.timer from start method to clear
    stop () {
        window.clearInterval(this.timer);
        this.timer = null;
    }

    //Reset method - calls stop() method nad resets this.state.timePassedInMilliSeconds
    reset() {
        this.stop();
        this.setState({
            timePassedInMilliSeconds: 0
        })
    }

    render() {
        return (
            <div>
                <h2 className="border px-3 py-4 rounded my-3 mx-auto text-center" style={{maxWidth: "300px"}}>
                    {Math.floor(this.state.timePassedInMilliSeconds / 1000)} s
                </h2>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-primary mr-2" onClick={this.start}>
                        Start
                    </button>
                    <button className="btn btn-outline-danger mr-2" onClick={this.stop}>
                        Stop
                    </button>
                    <button className="btn btn-outline-warning" onClick={this.reset}>
                        Reset
                    </button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <StopWatch />,
    document.getElementById('root')
);