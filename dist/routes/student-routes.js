"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.json({ message: 'Method Get' });
});
router.get('/:id', (req, res) => {
    res.json({ message: `Method Get ID: ${req.params.id}` });
});
router.post('/', (req, res) => {
    res.json({ message: 'Method Post' });
});
router.put('/', (req, res) => {
    res.json({ message: 'Method Put' });
});
router.delete('/:id', (req, res) => {
    res.json({ message: `Method Delete ID: ${req.params.id}` });
});
exports.default = router;
