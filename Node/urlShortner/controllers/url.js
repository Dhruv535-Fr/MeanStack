const { nanoid } = require("nanoid");
const urlModel = require("../models/url");

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;

  if (!body.url) {
    return res.render('home', { error: "URL is required" });
  }

  const shortId = nanoid(8);

  await urlModel.create({
    shortUrl: shortId,
    redirectUrl: body.url,
    visitHistory: [],
    createdBy : req.user._id,
  });

  return res.render('home',{
    id : shortId
  }); 
}

async function handleRedirect(req, res) {
  const shortId = req.params.shortId;

  const entry = await urlModel.findOneAndUpdate(
    { shortUrl: shortId },
    {
      $push: {
        visitHistory: { timestamp: Date.now() }
      }
    }
  );

  if (!entry) return res.status(404).send("Not found");

  res.redirect(entry.redirectUrl);
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;  // FIXED

  const result = await urlModel.findOne({
    shortUrl: shortId,
  });

  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}


module.exports = { 
  handleGenerateNewShortUrl,
  handleRedirect,
  handleGetAnalytics,
};
