import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

moment.locale("en-GB");


const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class App extends Component {
    constructor(props) {
        super(props);
    this.state = {
        events: [
            {
                title: "",
                date: "",
                location: "",
                starttime: moment().toDate(),
                endtime: moment().add(1, "days").toDate(),
                duedate: ""
            },
        ],
    };
}

componentDidMount() {
    fetch('/events' + this.props.match.params.id)
    .then(res => res.json())
    .then(events => {this.setState({ events: events })})
    .then(events => console.log(events));
}
    onEventResize = (data) => {
        const { start, end } = data;

        this.setState((state) => {
            state.events[0].start = start;
            state.events[0].end = end;
            return { events: [...state.events]};
        });
    };

    onEventDrop = (data) => {
        console.log(data);
    };

    render() {
        return (
            <div className="CalendarContainer my-2 mx-2 py-2 px-2">
                <DnDCalendar
                defaultDate={moment().toDate()}
                defaultView="month"
                events={this.state.events}
                localizer={localizer}
                onEventDrop={this.onEventDrop}
                onEventResize={this.onEventResize}
                resizable
                style={{ height: "100vh" }}
              />
            </div>
        );
    }
}

export default App;