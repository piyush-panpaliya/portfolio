export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.headers.secret !== process.env.SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }
  const slug = req.body.slug.current
  if (!slug) {
    return res.status(400).json({ message: 'Invalid slug' })
  }
  try {
    await res.unstable_revalidate(`/${slug}`)
    console.log(`revalidated ${slug}`)
    return res.status(200).json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    console.log(err)
    return res.status(500).send('Error revalidating')
  }
}