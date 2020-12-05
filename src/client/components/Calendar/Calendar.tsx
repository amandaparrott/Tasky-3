import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class App extends Component {
    state = {
        events: [
            {
                start: moment().toDate(),
                end: moment().add(1, "days").toDate(),
                title: ""
            },
        ],
    };

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