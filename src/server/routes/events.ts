// @ts-nocheck
import * as express from "express";
import { OkPacket } from "mysql";
import db from "../db";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await db.Events.retrieveallEvents()
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get("/:reqeventid", async (req, res) => {
    try {
        const eventid = req.params.reqeventid;
        const data = await db.Events.retrievespecEvent(eventid);
        res.send(data[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post("/", async (req, res) => {
    try {       
        res.json(await db.Events.createEvent(req.body.title, req.body.location, req.body.time, req.body.duedate, req.body.mandatorytask, req.body.completedtask, req.body.relationid, req.body.childnum));
        res.status(200).send(`
        ${req.body.title} Event has been created
        `);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.put("/:reqeventid", async (req, res) => {
    try {
        const eventid = req.params.reqeventid;
        await db.Events.updateEvent(req.body.title, req.body.location, req.body.time, req.body.duedate, req.body.mandatorytask, req.body.completedtask, req.body.relationid, req.body.childnum, eventid);
        res.status(200).send(`Updated event ${eventid}`)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete("/:reqeventid", async (req, res) => {
    try {
        const eventid = req.params.reqeventid;
        await db.Events.removeEvent(eventid);
        res.send(`event ${eventid} was deleted`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router