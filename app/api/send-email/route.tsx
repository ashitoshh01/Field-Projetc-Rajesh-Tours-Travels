import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// Your verified email address for Resend testing mode
const VERIFIED_EMAIL = "ashitoshlavhate2@gmail.com"

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, subject } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    // The email contains all user information so you can reply to them
    const businessEmailResult = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: VERIFIED_EMAIL,
      subject: `New Contact Form Submission: ${subject || "General Inquiry"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; color: #555;">${message}</p>
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">
            To reply to this inquiry, send an email to: <strong>${email}</strong>
          </p>
        </div>
      `,
    })

    if (businessEmailResult.error) {
      console.log("[v0] Business email error:", businessEmailResult.error)
      return Response.json({ error: "Failed to send email" }, { status: 500 })
    }

    const userEmailResult = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "We received your message - Rajesh Tours & Travels",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Contacting Us!</h2>
          <p>Hi ${name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Message Summary:</strong></p>
            <p><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
            <p style="white-space: pre-wrap; color: #555;">${message}</p>
          </div>
          <p>If you have any urgent matters, please feel free to call us directly.</p>
          <p>Best regards,<br><strong>Rajesh Tours & Travels Team</strong></p>
        </div>
      `,
    })

    if (userEmailResult.error) {
      console.log("[v0] User confirmation email error:", userEmailResult.error)
      // Don't fail the request if confirmation email fails
      // The important email (to business) was already sent
    }

    return Response.json(
      {
        success: true,
        message: "Email sent successfully",
        emailId: businessEmailResult.data?.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.log("[v0] Email API error:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
