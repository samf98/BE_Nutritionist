/**
 * EntriesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let _ = require('lodash');

let entriesModel = sails.models.entries;

let _delete = async function (parameters) {
    let where = {};

    if (_.has(parameters, 'id')) {
        where.id = parameters.id;
    }
    let entries = await entriesModel.destroy({
        where: where
    });
    return entries;
};

let _update = async function (parameters) {
    let where = {};
    if (_.has(parameters, 'id')) {
        where.id = parameters.id;
        delete parameters.id;
    }

    let entries = await entriesModel.update({
        ...parameters
    }, {
            where: where
        });
    return entries;
};


let _list = async function (parameters) {
    let where = {};
    if (_.has(parameters, 'id')) {
        where.id = parameters.id;
    }

    if (_.has(parameters, 'userId')) {
        where.userId = parameters.userId;
    }

    if (_.has(parameters, 'date')) {
        where.date = parameters.date;
    }

    if (_.has(parameters, 'water')) {
        where.water = parameters.water;
    }

    if (_.has(parameters, 'steps')) {
        where.steps = parameters.username;
    }

    if (_.has(parameters, 'weight')) {
        where.weight = parameters.weight;
    }

    if (_.has(parameters, 'hours_of_sleep')) {
        where.hours_of_sleep = parameters.hours_of_sleep;
    }

    let entries = await entriesModel.findAll({
        where: where
    });
    return entries;
};


let _create = async function (parameters) {
    let userId = parameters.userId;
    let date = parameters.date;
    let water = parameters.water;
    let steps = parameters.steps;
    let weight = parameters.weight;
    let hours_of_sleep = parameters.hours_of_sleep;
    let entries = await entriesModel.create({
        userId,
        date,
        water,
        steps,
        weight,
        hours_of_sleep,
    });
    return entries;
};

module.exports = {
    list: async function (request, response) {
        let entries = await _list(request.query);
        response.json(entries);
    },
    create: function (request, response) {
        let entry = _create(request.body);
        response.json({
            created: true
        });
    },
    delete: async function (request, response) {
        let entries = await _delete(request.body);
        response.json(entries);
    },
    update: async function (request, response) {
        let entry = _update(request.body);
        response.json({
            updated: true
        });
    },
    _create: _create,
    _list: _list,
    _delete: _delete,
    _update: _update
};