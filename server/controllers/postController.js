import express from 'express';
import Posts from '../models/posts';
var ObjectId = require('mongoose').Types.ObjectId;

export function index(req, res) {
    Posts.find((err, docs) => {
        if (!err)
            res.send(docs);
        else
            console.log('Error in Retrieving Posts...', JSON.stringify(err, undefined, 2));
    })
}

export function show(req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Record with Given id: ${req.params.id}`);

    Posts.findById(req.params.id, (err, doc) => {
        if (!err)
            res.send(doc);
        else
            console.log('Error in Retrieving Posts...', JSON.stringify(err, undefined, 2));
    });
}

export function store(req, res) {
    var pos = new Posts({
        title: req.body.title,
    });

    pos.save((err, doc) => {
        if (!err)
            res.send(doc);
        else
            console.log('Error in Posts Save', JSON.stringify(err, undefined, 2));
    });
}

export function update(req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Record with Given id: ${req.params.id}`);

    var pos = {
        title: req.body.title,
    };

    Posts.findByIdAndUpdate(req.params.id, {
        $set: pos
    }, {
        new: true
    }, (err, doc) => {
        if (!err)
            res.send(doc);
        else
            console.log('Error in Posts Update', JSON.stringify(err, undefined, 2));
    });
}

export function del(req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Record with Given id: ${req.params.id}`);

    Posts.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err)
            res.send(doc);
        else
            console.log('Error in Posts Delete', JSON.stringify(err, undefined, 2));
    });
}