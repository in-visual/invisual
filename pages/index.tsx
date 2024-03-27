import * as React from "react";
import * as Router from "next/router";
import type { NextPage } from "next";
import styled from "styled-components";
import Layout from "../components/layouts/Layout";
import { Hidden, Visible } from "react-grid-system";
import { Device } from "../constants/breakpoints";
import { Button, Form, Input, Select, message } from "antd";
import axios from "axios";

const Title = styled.div`
  font-size: 33px;
  font-family: "Poppins", Sans-serif;
  color: #01a7a7;
  text-align: center;
  font-weight: 600;
  padding-top: 50px;
`;

const Description = styled.div`
  font-size: 25px;
  font-family: "Poppins", Sans-serif;
  color: #54595f;
  text-align: center;
  font-weight: 400;
  padding-top: 10px;
`;

const FirstWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  padding: 50px 50px 50px 50px;
  gap: 60px;
  @media screen and ${Device.mobileL} {
    flex-flow: column;
  }
  @media screen and ${Device.mobileM} {
    flex-flow: column;
  }
`;
const FirstDescription = styled.div`
  font-size: 18px;
  font-weight: 450;
  font-family: "Poppins", Sans-serif;
  color: #54595f;
  width: 40%;
  @media screen and ${Device.mobileL} {
    width: 100%;
  }
  @media screen and ${Device.mobileM} {
    width: 100%;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  gap: 50px;
  padding-top: 40px;
  @media screen and ${Device.mobileL} {
    flex-flow: column;
    align-items: center;
  }
  @media screen and ${Device.mobileM} {
    flex-flow: column;
    align-items: center;
  }
`;

const CardTitle = styled.div`
  font-size: 24px;
  transition: opacity 0.3s ease;
  @media screen and ${Device.mobileL} {
    font-size: 20px;
  }
  @media screen and ${Device.mobileM} {
    font-size: 20px;
  }
`;

const CardDescription = styled.div`
  transition: opacity 0.3s ease;
  font-size: 16px;
  padding: 0px 25px 20px 25px;
  @media screen and ${Device.mobileL} {
    font-size: 14px;
  }
  @media screen and ${Device.mobileM} {
    font-size: 14px;
  }
`;
const Card = styled.div`
  padding-top: 20px;
  display: flex;
  font-family: "Poppins", Sans-serif;
  flex-flow: column;
  gap: 10px;
  height: 500px;
  width: 500px;
  color: white;
  background-color: black;
  text-align: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #01a7a7;
  }

  &:hover img,
  &:hover ${CardTitle}, &:hover ${CardDescription} {
    opacity: 0;
  }
  @media screen and ${Device.mobileL} {
    width: 350px;
    height: 400px;
  }
  @media screen and ${Device.mobileM} {
    width: 350px;
    height: 400px;
  }
`;

const CardWithoutHover = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 10px;
  font-family: "Poppins", Sans-serif;
  flex-flow: column;
  height: 500px;
  width: 500px;
  color: white;
  background-color: black;
  text-align: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;

  @media screen and ${Device.mobileL} {
    width: 350px;
    height: 400px;
  }
  @media screen and ${Device.mobileM} {
    width: 350px;
    height: 400px;
  }
`;

const AdditionalTitle = styled.div`
  position: absolute;
  top: 37%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  font-size: 22px;
  font-weight: 700;
  width: 100%;

  ${Card}:hover & {
    opacity: 1;
  }
  @media screen and ${Device.mobileL} {
    font-size: 20px;
  }
  @media screen and ${Device.mobileM} {
    font-size: 20px;
  }
`;

const AdditionalTitleTure = styled.div`
  position: absolute;
  top: 34%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  font-size: 22px;
  font-weight: 700;
  width: 100%;

  ${Card}:hover & {
    opacity: 1;
  }
  @media screen and ${Device.mobileL} {
    font-size: 20px;
  }
  @media screen and ${Device.mobileM} {
    font-size: 20px;
  }
`;

const AdditionalText = styled.div`
  position: absolute;
  font-size: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  width: 400px;

  ${Card}:hover & {
    opacity: 1;
  }
  @media screen and ${Device.mobileL} {
    padding: 0px 40px 0px 40px;
    font-size: 14px;
  }
  @media screen and ${Device.mobileM} {
    padding: 0px 40px 0px 40px;
    font-size: 14px;
  }
`;

const Footer = styled.div`
  background-color: black;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  flex-flow: row;
  gap: 200px;
  padding-top: 0px;
  padding-bottom: 0px;
  @media screen and ${Device.mobileL} {
    padding: 30px 50px 40px 50px;
    flex-flow: column;
    gap: 20px;
    height: 100%;
    align-items: baseline;
  }
  @media screen and ${Device.mobileM} {
    padding: 30px 50px 40px 50px;
    flex-flow: column;
    gap: 20px;
    height: 100%;
    align-items: baseline;
  }
`;

const FirstFooter = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
  color: white;
`;

const FooterText = styled.p``;

const FooterSocial = styled.p`
  cursor: pointer;
  &:hover {
    color: #01a7a7;
  }
`;

const ProjectWrapper = styled.div`
  margin-top: 100px;
  background-color: black;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-flow: column;
  gap: 70px;
  padding-top: 50px;
  padding-bottom: 30px;
`;

const Project = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columns with equal width */
  grid-gap: 10px;
  gap: 40px;
  margin: auto;
  padding-bottom: 25px;
  @media screen and ${Device.mobileL} {
    grid-template-columns: repeat(1, 1fr); /* 2 columns with equal width */
  }
  @media screen and ${Device.mobileM} {
    grid-template-columns: repeat(1, 1fr); /* 2 columns with equal width */
  }
`;

const ProjectTitle = styled.div`
  font-size: 33px;
  font-family: sans-serif;
  color: #01a7a7;
  text-align: center;
  font-weight: 600;
  padding-top: 0px;
`;

const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-left: 118px;
  z-index: 1;
  @media screen and ${Device.mobileL} {
    padding: 20px 20px 0px 20px;
  }
  @media screen and ${Device.mobileM} {
    padding: 20px 20px 0px 20px;
  }
`;

const ContactTitle = styled.div`
  font-size: 30px;
  color: black;
  padding-left: 118px;
  @media screen and ${Device.mobileL} {
    padding: 20px 20px 0px 20px;
  }
  @media screen and ${Device.mobileM} {
    padding: 20px 20px 0px 20px;
  }
`;

const VideoImage = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  @media screen and ${Device.mobileL} {
  }

  @media screen and ${Device.mobileM} {
  }
`;

const CardImage = styled.img`
  width: 350px;
  height: 350px;

  @media screen and ${Device.mobileL} {
    width: 240px;
    height: 240px;
  }

  @media screen and ${Device.mobileM} {
    width: 240px;
    height: 240px;
  }
`;

const FooterTextWrapper = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const SectionOne = styled.div`
  @media screen and ${Device.mobileL} {
    padding: 0px 30px;
  }
  @media screen and ${Device.mobileM} {
  }
`;

export const handleOpenTab = (url: string) => {
  window.open(url, "_blank");
};

const Test: NextPage = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const router = Router.useRouter();

  const { TextArea } = Input;
  const [loading, setLoading] = React.useState<boolean>(false);
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/send-email",
        values
      );

      if (response.data.success) {
        message.success("Email sent successfully!");
      } else {
        message.error("Failed to send email. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      message.error("Something went wrong. Please try again later.");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const introDivRef = React.useRef<HTMLDivElement>(null);

  return (
    <Layout title={"In Visual"}>
      <div style={{ width: "100%" }}>
        <div style={{ position: "relative" }}>
          <Hidden xs sm>
            <VideoImage
              src="./images/invisual/InVisual-white.svg"
              alt="logo"
              height={350}
              width={350}
            />
            <video
              style={{
                width: "100%",
                height: "700px",
                objectFit: "cover",
              }}
              loop
              autoPlay
              muted
            >
              <source src="./images/invisual/0215(2).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Hidden>
          <Visible xs sm>
            <VideoImage
              src="./images/invisual/InVisual-white.svg"
              alt="logo"
              height={150}
              width={150}
            />
            <video
              style={{
                height: "600px",
                width: "100%",
                objectFit: "cover",
              }}
              loop
              autoPlay
              muted
              playsInline
            >
              <source src="./images/invisual/0215(2).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Visible>
        </div>
        <div>
          <SectionOne>
            <Title id="section1">Usluge</Title>
            <Description>
              Unaprijedite svoje poslovanje pomoću naših usluga
            </Description>
            <Cards>
              <Card>
                <CardImage src="./images/invisual/question.jpg" alt="test" />
                <CardTitle>Besplatna procjena nekretnine</CardTitle>
                <CardDescription>
                  Otvoreni smo za sva potencijalna pitanja.
                </CardDescription>
                <AdditionalTitle>Besplatna procjena nekretnine</AdditionalTitle>
                <AdditionalText>
                  Nudimo besplatnu procjenu vaše nekretnine putem interneta kako
                  bi olakšali proces saznanja oboma važnih informacija.
                </AdditionalText>
              </Card>
              <Card>
                <CardImage src="./images/invisual/x3.png" alt="test" />
                <CardTitle>Virtualne ture</CardTitle>
                <CardDescription>
                  Naše usluge oživljavaju vašu imovinu pomoću imerzivnih 3D tura
                  snimljenih sa najmodernijim Insta X3 360 kamerama.
                </CardDescription>
                <AdditionalTitleTure>Virtualne Ture</AdditionalTitleTure>
                <AdditionalText>
                  Koristeći cutting-edge tehnologiju s Matterport.com, pružamo
                  besprijekornu online platformu, osiguravajući potencijalnim
                  kupcima 24/7 pristup vaše imovine, ističući vaše oglase na
                  konkurentnom tržištu nekretnina.
                </AdditionalText>
              </Card>
            </Cards>
            <Cards>
              <CardWithoutHover>
                <CardImage
                  src="./images/invisual/drone1-removebckg.png"
                  alt="test"
                  style={{ filter: "blur(5px)" }}
                />
                <CardTitle>Dron</CardTitle>
                <CardDescription
                  style={{ padding: "0px 25px 0px 25px" }}
                ></CardDescription>
              </CardWithoutHover>
              <CardWithoutHover>
                <CardImage
                  src="./images/invisual/camera-main.png"
                  alt="test"
                  style={{ filter: "blur(5px)" }}
                />
                <CardTitle>Fotografije</CardTitle>
                <CardDescription> </CardDescription>
              </CardWithoutHover>
            </Cards>
          </SectionOne>
          <ProjectWrapper id="section2">
            <ProjectTitle>Projekti</ProjectTitle>
            <Hidden xs sm>
              <Project>
                <iframe
                  style={{ borderRadius: 20 }}
                  width="650"
                  height="480"
                  src="https://my.matterport.com/show/?m=EZiXye1gokp"
                  frameBorder="0"
                  allowFullScreen
                  allow="xr-spatial-tracking"
                ></iframe>
                <iframe
                  style={{ borderRadius: 20 }}
                  width="650"
                  height="480"
                  src="https://my.matterport.com/show/?m=GUR73APWQQQ"
                  frameBorder="0"
                  allowFullScreen
                  allow="xr-spatial-tracking"
                ></iframe>
                <iframe
                  style={{ borderRadius: 20 }}
                  width="650"
                  height="480"
                  src="https://my.matterport.com/show/?m=Wdhb6dBtBYZ"
                  frameBorder="0"
                  allowFullScreen
                  allow="xr-spatial-tracking"
                ></iframe>
                <iframe
                  style={{ borderRadius: 20 }}
                  width="650"
                  height="480"
                  src="https://my.matterport.com/show/?m=YigZeQhystW"
                  frameBorder="0"
                  allowFullScreen
                  allow="xr-spatial-tracking"
                ></iframe>
              </Project>
            </Hidden>
            <Visible xs sm>
              <Project>
                <iframe
                  style={{ borderRadius: 20 }}
                  width="350"
                  height="350"
                  src="https://my.matterport.com/show/?m=EZiXye1gokp"
                  frameBorder="0"
                  allowFullScreen
                  allow="xr-spatial-tracking"
                ></iframe>
                <iframe
                  style={{ borderRadius: 20 }}
                  width="350"
                  height="350"
                  src="https://my.matterport.com/show/?m=GUR73APWQQQ"
                  frameBorder="0"
                  allowFullScreen
                  allow="xr-spatial-tracking"
                ></iframe>
                <iframe
                  style={{ borderRadius: 20 }}
                  width="350"
                  height="350"
                  src="https://my.matterport.com/show/?m=Wdhb6dBtBYZ"
                  frameBorder="0"
                  allowFullScreen
                  allow="xr-spatial-tracking"
                ></iframe>
                <iframe
                  style={{ borderRadius: 20 }}
                  width="350"
                  height="350"
                  src="https://my.matterport.com/show/?m=YigZeQhystW"
                  frameBorder="0"
                  allowFullScreen
                  allow="xr-spatial-tracking"
                ></iframe>
              </Project>
            </Visible>
          </ProjectWrapper>
          <Title id="section3">O nama</Title>
        </div>
        <FirstWrapper>
          <FirstDescription>
            <span>
              Dobrodošli u InVisual, gdje se inovacija susreće s izvrsnošću u
              području slikanja nekretnina. Specijalizirani smo za pružanje
              vrhunskih usluga virtualne šetnje skrojenih za vaše objekte,
              osiguravajući da se vaša nekretnina ističe na današnjem
              konkurentnom tržištu.{" "}
            </span>
            <span>
              {" "}
              <br />U InVisual koristimo najnoviju opremu za snimanje
              zadivljujućih slika. Naša predanost izvrsnosti proteže se na naše
              detaljne usluge virtualne ture, povećavajući privlačnost vaših
              obilazaka nekretnine i omogućavajući posjetu vašeg objekta 24/7.
              Naš tim je pruža usluge u zemljama Hrvatske i Bosne i Hercegovine.
              Mogućnost dogovora u kratkom vremenskom roku za područje grada
              Zagreba i Mostara, za upite drugih gradova javiti se na
              invisual.zg@gmail.com i invisual.mo@gmail.com .
            </span>{" "}
            <span>
              <br /> Sa strašću za preciznošću i oštrim okom za detalje, naš tim
              je posvećen pretvaranju vaše nekretnine u vizualno remek-djelo.
              Bilo da ste stručnjak za nekretnine, vlasnik nekretnine ili
              posjetitelj vjerujte da će InVisual redefinirati kako se vaš
              prostor doživljava.
            </span>
            <br />
            Doživite budućnost slikanja nekretnina s InVisual timom, gdje svaki
            okvir priča priču, a svaki obilazak je impresivno putovanje u srce
            vašeg imanja.
          </FirstDescription>
          <Hidden xs sm>
            <img
              src="./images/invisual/test.png"
              alt="test"
              height={450}
              width={450}
            />
          </Hidden>
          <Visible xs sm>
            <img
              src="./images/invisual/test.png"
              alt="test"
              height={300}
              width={300}
              style={{ alignSelf: "center" }}
            />
          </Visible>
        </FirstWrapper>

        {/* <ContactForm> */}
        <Hidden xs sm>
          <ContactTitle>Kontaktirajte nas</ContactTitle>
          <ContactFormWrapper id="section3">
            <Form
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="VAŠE IME:"
                name="name"
                style={{ width: 500 }}
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input
                  placeholder="UNESITE IME"
                  style={{
                    borderRadius: 200,
                    border: "1px solid var(--neutral, #D8E8E7)",
                    fontSize: 12,
                  }}
                />
              </Form.Item>

              <Form.Item
                label="VAŠ EMAIL:"
                name="email"
                style={{ width: 500 }}
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input
                  placeholder="UNESITE EMAIL ADRESU"
                  style={{
                    borderRadius: 200,
                    border: "1px solid var(--neutral, #D8E8E7)",
                    fontSize: 12,
                  }}
                />
              </Form.Item>

              <Form.Item
                label="VAŠA PORUKA:"
                name="message"
                rules={[
                  { required: true, message: "Molimo upišite svoju poruku!" },
                ]}
              >
                <TextArea
                  style={{
                    height: 200,
                    borderRadius: 20,
                    padding: 14,
                    border: "1px solid var(--neutral, #D8E8E7)",
                    fontSize: 12,
                  }}
                  placeholder="Molimo upišite svoju poruku..."
                />
              </Form.Item>

              <Form.Item>
                <Button htmlType="submit">POŠALJI</Button>
              </Form.Item>
            </Form>
          </ContactFormWrapper>
        </Hidden>
        <Visible xs sm>
          <ContactTitle>Kontaktirajte nas</ContactTitle>
          <ContactFormWrapper id="section3">
            <Form
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="VAŠE IME:"
                name="name"
                style={{ width: 350 }}
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input
                  placeholder="UNESITE IME"
                  style={{
                    borderRadius: 200,
                    border: "1px solid var(--neutral, #D8E8E7)",
                    fontSize: 12,
                  }}
                />
              </Form.Item>

              <Form.Item
                label="VAŠ EMAIL:"
                name="email"
                style={{ width: 350 }}
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input
                  placeholder="UNESITE EMAIL ADRESU"
                  style={{
                    borderRadius: 200,
                    border: "1px solid var(--neutral, #D8E8E7)",
                    fontSize: 12,
                  }}
                />
              </Form.Item>

              <Form.Item
                label="VAŠA PORUKA:"
                name="message"
                rules={[
                  { required: true, message: "Molimo upišite svoju poruku!" },
                ]}
              >
                <TextArea
                  style={{
                    height: 200,
                    borderRadius: 20,
                    padding: 14,
                    border: "1px solid var(--neutral, #D8E8E7)",
                    fontSize: 12,
                  }}
                  placeholder="Molimo upišite svoju poruku ovde..."
                />
              </Form.Item>

              <Form.Item>
                <Button htmlType="submit">POŠALJI</Button>
              </Form.Item>
            </Form>
          </ContactFormWrapper>
        </Visible>
        <Hidden xs sm>
          <Footer id="section4">
            <div style={{ alignSelf: "center" }}>
              <img
                src="./images/invisual/InVisual-white.svg"
                alt="test"
                height={80}
                width={100}
              />
            </div>
            <FirstFooter>
              <FooterText>Kontakt</FooterText>
              <FooterText>+385 97 648 3828</FooterText>
              <FooterText>invisual.zg@gmail.com</FooterText>
            </FirstFooter>
            <FirstFooter>
              <FooterText>Drustvene mreze</FooterText>
              <FooterTextWrapper
                onClick={() =>
                  window.open("https://www.instagram.com/invisual_design/")
                }
              >
                <img
                  src="./images/invisual/instagram.png"
                  alt="test"
                  height={20}
                  width={20}
                />
                <FooterSocial>Instagram</FooterSocial>
              </FooterTextWrapper>
              <FooterTextWrapper
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=61556136487002"
                  )
                }
              >
                <img
                  src="./images/invisual/facebook.png"
                  alt="test"
                  height={20}
                  width={20}
                />
                <FooterSocial>Facebook</FooterSocial>
              </FooterTextWrapper>
            </FirstFooter>
          </Footer>
        </Hidden>
        <Visible xs sm>
          <Footer>
            <FirstFooter>
              <FooterText>Kontakt</FooterText>
              <FooterText>+385 97 648 3828</FooterText>
              <FooterText>invisual.zg@gmail.com</FooterText>
            </FirstFooter>
            <FirstFooter>
              <FooterText>Drustvene mreze</FooterText>
              <FooterTextWrapper
                onClick={() =>
                  window.open("https://www.instagram.com/invisual_design/")
                }
              >
                <img
                  src="./images/invisual/instagram.png"
                  alt="test"
                  height={20}
                  width={20}
                />
                <FooterSocial>Instagram</FooterSocial>
              </FooterTextWrapper>
              <FooterTextWrapper
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=61556136487002"
                  )
                }
              >
                <img
                  src="./images/invisual/facebook.png"
                  alt="test"
                  height={20}
                  width={20}
                />
                <FooterSocial>Facebook</FooterSocial>
              </FooterTextWrapper>
            </FirstFooter>
          </Footer>
        </Visible>
      </div>
    </Layout>
  );
};

export default Test;
