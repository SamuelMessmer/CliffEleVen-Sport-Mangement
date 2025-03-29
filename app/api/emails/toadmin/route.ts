import Info from "@/emails/Info";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { error, data } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["samuel.messmer@web.de"],
    subject: "Neue Kunden Anfrage auf deiner Website!",
    react: Info(
      body.firstname,
      body.lastname,
      body.email,
      body.telephoneNumber,
      body.message
    ),
  });

  if (error)
    return NextResponse.json(
      { "Internal server error: ": error },
      { status: 500 }
    );

  return NextResponse.json({ "Success, data: ": data }, { status: 200 });
}
