import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string; source?: string };
    const email = body.email?.trim().toLowerCase() || "";
    const source = body.source?.trim() || "site";

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;

    if (!formspreeEndpoint) {
      return NextResponse.json(
        { message: "Email signup is not connected yet. Add FORMSPREE_ENDPOINT to enable it." },
        { status: 503 }
      );
    }

    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0]?.trim() : null;

    const formspreeResponse = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        source,
        message: `Newsletter signup from ${source}`,
        _subject: `New email signup: ${source}`,
        submittedAt: new Date().toISOString(),
        userAgent: request.headers.get("user-agent"),
        ip,
      }),
      cache: "no-store",
    });

    if (!formspreeResponse.ok) {
      return NextResponse.json(
        { message: "Signup service is temporarily unavailable. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: "Thanks. You're on the list." });
  } catch {
    return NextResponse.json({ message: "Unable to process your signup right now." }, { status: 500 });
  }
}
