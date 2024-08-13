
export async function POST(req) {
  const time = +req.query?.t || 2500;

  // promisify setTimeout
  await new Promise((resolve) => setTimeout(resolve, time));

  return Response.json({
    message:
      'I am a bot! Posting a long message to test the word-by-word streaming. The time is now ' +
      new Date().toLocaleTimeString(),
    tables: [],
    charts: [],
  })
}
