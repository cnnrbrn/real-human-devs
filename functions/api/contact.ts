// POST /api/contact — the homepage contact form. Sends the enquiry to the
// studio inbox through Zoho's SMTP server, as hello@ itself, so it passes the
// domain's SPF/DKIM. Needs the `nodejs_compat` compatibility flag (set in the
// Pages project's Runtime settings) for worker-mailer's sockets.
import { WorkerMailer } from 'worker-mailer'

interface Env {
  /** Zoho app-specific password for hello@ — a Pages secret, never in git. */
  ZOHO_SMTP_PASSWORD: string
}

const MAILBOX = 'hello@realhumandevs.com'
const PROJECT_TYPES = ['Web app', 'Mobile app', 'WordPress', 'Not sure yet']
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const json = (status: number, body: Record<string, unknown>) =>
  Response.json(body, { status })

export async function onRequestPost({
  request,
  env,
}: {
  request: Request
  env: Env
}) {
  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return json(400, { error: 'Invalid form data' })
  }

  // Trimmed, length-capped, and single-line for anything that ends up in a
  // header (subject, Reply-To), so a value can't smuggle in extra headers.
  const field = (key: string, max: number, singleLine = true) => {
    const value = String(form.get(key) ?? '').trim().slice(0, max)
    return singleLine ? value.replace(/[\r\n]+/g, ' ') : value
  }

  // Honeypot: people never see this field, bots fill it in. Pretend it
  // worked so they don't retry.
  if (field('website', 200)) return json(200, { ok: true })

  const name = field('name', 200)
  const email = field('email', 320)
  const message = field('message', 5000, false)
  const projectType = PROJECT_TYPES.includes(field('projectType', 50))
    ? field('projectType', 50)
    : 'Not given'

  if (!name || !message || !EMAIL_PATTERN.test(email)) {
    return json(400, { error: 'Name, a valid email and a message are needed' })
  }

  try {
    await WorkerMailer.send(
      {
        host: 'smtppro.zoho.com',
        port: 465,
        secure: true,
        credentials: { username: MAILBOX, password: env.ZOHO_SMTP_PASSWORD },
        authType: 'plain',
      },
      {
        from: { name: 'Real Human Devs website', email: MAILBOX },
        to: MAILBOX,
        reply: { name, email },
        subject: `New enquiry from ${name} (${projectType})`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Project type: ${projectType}`,
          '',
          message,
        ].join('\n'),
      },
    )
  } catch (error) {
    console.error('Contact form: SMTP send failed', error)
    return json(502, { error: 'Could not send' })
  }

  return json(200, { ok: true })
}
