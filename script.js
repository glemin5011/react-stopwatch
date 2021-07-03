//Begin with stop watch class component and some UI elements

class StopWatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timePassedInMilliSeconds: 0
        }
    }

    render() {
        return (
            <div>
                <h2 className="border px-3 py-4 rounded my-3 mx-auto text-center" style={{maxWidth: "300px"}}>
                    {Math.floor(this.state.timePassedInMilliSeconds / 1000)} s
                </h2>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-primary mr-2">
                        Start
                    </button>
                    <button className="btn btn-outline-danger mr-2">
                        Stop
                    </button>
                    <button className="btn btn-outline-warning">
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