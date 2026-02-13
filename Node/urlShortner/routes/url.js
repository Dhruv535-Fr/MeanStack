const express = require('express');
const router = express.Router();

const {
  handleGenerateNewShortUrl,
  handleRedirect,
  handleGetAnalytics
} = require('../controllers/url');

// create short url
router.post('/', handleGenerateNewShortUrl);

// redirect
router.get('/:shortId', handleRedirect);

// analytics
router.get('/analytics/:shortId', handleGetAnalytics);

module.exports = router;
