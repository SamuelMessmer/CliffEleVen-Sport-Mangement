import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
  Heading,
} from "@react-email/components";
import * as React from "react";

export const Welcome = (firstname: string) => (
  <Html>
    <Head />
    <Preview>CliffEleVen-Sport</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section>
          <Row>
            <Heading
              style={{
                ...paragraph,
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft: "15px",
                marginTop: "20px",
                marginBottom: "-10px",
              }}
            >
              CliffEleVen - Sport Management
            </Heading>
          </Row>
        </Section>

        <Section style={paragraphContent}>
          <Hr style={hr} />
          <Text style={heading}>Vielen Dank für deine nachricht {firstname}!</Text>
          <Text style={paragraph}>
            Wir melden uns in Kürze bei dir, um alles wichtige zu besprechen 😊
          </Text>
          <Text style={paragraph}>
            Um optimal auf das Gespräch vorbereitet zu sein, empfehlen wir dir,
            vorab eine Liste deiner Leistungen zusammenzustellen. Konzentriere
            dich dabei auf Erfolge, die einen entscheidenden Einfluss auf die
            Auswahl der Vereine haben könnten.
          </Text>
          <Text style={paragraph}>
            Mach dir aber keine Sorgen, falls dir nicht so viel einfällt – dafür
            sind wir ja da! 😉
          </Text>
        </Section>

        <Section style={paragraphContent}>
          <Hr style={hr} />
          <Text style={paragraph}>Bis bald,</Text>
          <Text
            style={{
              ...paragraph,
              fontSize: "15px",
              fontWeight: "bold",
              marginBottom: "45px",
            }}
          >
            Dein Management Team
          </Text>
        </Section>

        <Section style={{ ...paragraphContent, paddingBottom: 30 }}>
          <Text
            style={{
              ...paragraph,
              fontSize: "12px",
              textAlign: "center",
              margin: 0,
            }}
          >
            © CliffEleVen - Sportmanagement Stuttgart WiesenStraße 132
          </Text>
          <Text
            style={{
              ...paragraph,
              fontSize: "12px",
              textAlign: "center",
              margin: 0,
            }}
          >
            Wir sichern dir zu, dass deinen Daten mit größter Sorgfalt behandelt
            werden und ausschließlich gemäß den geltenden Datenschutzrichtlinien
            verarbeitet sowie weder unberechtigt gespeichert noch weitergegeben
            werden.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default Welcome;

const main = {
  backgroundColor: "#dbddde",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const sectionLogo = {
  padding: "0 40px",
};

const headerBlue = {
  marginTop: "-1px",
};

const container = {
  margin: "30px auto",
  backgroundColor: "#fff",
  borderRadius: 5,
  overflow: "hidden",
};

const containerContact = {
  backgroundColor: "#f0fcff",
  width: "90%",
  borderRadius: "5px",
  overflow: "hidden",
  paddingLeft: "20px",
};

const heading = {
  fontSize: "14px",
  lineHeight: "26px",
  fontWeight: "700",
  color: "#004dcf",
};

const paragraphContent = {
  padding: "0 40px",
};

const paragraphList = {
  paddingLeft: 40,
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#3c4043",
};

const link = {
  ...paragraph,
  color: "#004dcf",
};

const hr = {
  borderColor: "#e8eaed",
  margin: "20px 0",
};

const footer = {
  maxWidth: "100%",
};
