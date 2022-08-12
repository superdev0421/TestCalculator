"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const calcMain = (req, res) => {
    const { total, next, operation } = req.query;
    // console.log('total', total);
    // console.log('next', next);
    // console.log('operation', operation);
    let totalNum = isNaN(total) ? null : Number(total);
    let nextNum = isNaN(next) ? null : Number(next);
    if (nextNum == null) {
        res.send(totalNum ? totalNum.toString() : "0");
        return;
    }
    switch (operation) {
        case "plus":
            res.send((totalNum + nextNum).toString());
            break;
        case "minus":
            res.send((totalNum - nextNum).toString());
            break;
        case "times":
            res.send((totalNum * nextNum).toString());
            break;
        case "divide":
            res.send((totalNum / nextNum).toString());
            break;
        default: {
            res.send(nextNum.toString());
        }
    }
};
router.get('/', calcMain);
exports.default = router;
