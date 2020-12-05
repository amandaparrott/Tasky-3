import React from 'react'
import { RouteComponentProps } from "react-router-dom"
import { IEvents } from '../../../Utils/types'
import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom"
export default class newEvent extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppState) {
        super(props)
        this.state = {
            title: "",
            location: "",
            time: "",
            duedate: "",
            mandatorytask: "",
            completedtask: "",
            relationid: "",
            childnum: ""
        }
    }
    submitEvent = (title: string, location: string, time: string, duedate: string, mandatorytask: string, completedtask: string, relationid: string, childnum: string) => {
        fetch("/api/events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: title, location: location, time: time, duedate: duedate, mandatorytask:mandatorytask, completedtask:completedtask, relationid:relationid, childnum:childnum})
        })
            .then(res => this.props.history.push("/"))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="box shadow">
                <h1>Create New Event</h1>
                <input id="username-input" placeholder="Event Title"className="form-control mx-2 my-2 px-2 py-2 col-8" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ title: e.target.value }) }} value={this.state.title} />
                
                <input id="username-input" placeholder="Location"className="form-control mx-2 my-2 px-2 py-2 col-8" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ location: e.target.value }) }} value={this.state.location} />
                <input id="username-input" placeholder="Time"className="form-control mx-2 my-2 px-2 py-2 col-8" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ time: e.target.value }) }} value={this.state.time} />
                <input id="username-input" placeholder="Due Date"className="form-control mx-2 my-2 px-2 py-2 col-8" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ duedate: e.target.value }) }} value={this.state.duedate} />
                <input id="username-input" placeholder="Mandatory?"className="form-control mx-2 my-2 px-2 py-2 col-8" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ mandatorytask: e.target.value }) }} value={this.state.mandatorytask} />
                {/* <input id="username-input" className="form-control mx-2 my-2 px-2 py-2 col-8" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ completedtask: e.target.value }) }} value={this.state.completedtask}></input>
                <input id="username-input" className="form-control mx-2 my-2 px-2 py-2 col-8" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ relationid: e.target.value }) }} value={this.state.relationid}></input>
                <input id="username-input" className="form-control mx-2 my-2 px-2 py-2 col-8" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ childnum: e.target.value }) }} value={this.state.childnum}></input> */}
                <button className="btn btn-info" type="submit" onClick={() => this.submitEvent(this.state.title, this.state.location, this.state.time, this.state.duedate, this.state.mandatorytask, this.state.completedtask, this.state.relationid, this.state.childnum)}>
                    Submit Event!
                        </button>
            </div>
        )
    }
}
interface IAppProps extends RouteComponentProps<{ title: string }> {
}
interface IAppState {
    title: string,
    location: string,
    time: string,
    duedate: string,
    mandatorytask: string,
    completedtask: string,
    relationid: string,
    childnum: string
}