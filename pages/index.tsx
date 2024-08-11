import * as React from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import Layout from "../components/layouts/Layout";
import { Hidden, Visible } from "react-grid-system";
import { Device } from "../constants/breakpoints";
import { English, Croatian } from "../constants/languange"; // Adjust the path as necessary
import Faq from "react-faq-component";

const Title = styled.div`
  font-size: 33px;
  font-family: "Roboto";
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

const Card = styled.div`
  perspective: 1000px;
  width: 500px;
  height: 500px;
  margin: 20px;
  @media screen and ${Device.mobileL} {
    width: 350px;
    height: 400px;
  }
  @media screen and ${Device.mobileM} {
    width: 350px;
    height: 400px;
  }
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  ${Card}:hover & {
    transform: rotateY(180deg);
  }
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: black;
  color: black;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 20px;
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #01a7a7;
  color: white;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transform: rotateY(180deg);
  border-radius: 20px;
`;

const CardTitle = styled.div`
  font-size: 24px;
  color: white;
  padding-top: 10px;
  @media screen and ${Device.mobileL} {
    font-size: 20px;
  }
  @media screen and ${Device.mobileM} {
    font-size: 20px;
  }
`;

const CardDescription = styled.div`
  font-size: 16px;
  color: white;
  padding: 0px 25px 20px 25px;
  @media screen and ${Device.mobileL} {
    font-size: 14px;
  }
  @media screen and ${Device.mobileM} {
    font-size: 14px;
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

const FooterSocial = styled.p`
  cursor: pointer;
  color: black;
  &:hover {
    color: #01a7a7;
  }
`;

const ProjectWrapper = styled.div`
  margin-top: 100px;
  background-color: #f0f2f2;
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

const CalendlyWrapper = styled.div`
  display: flex;
  flex-flow: row;
  background-color: #f0f2f2;
  padding-top: 30px;
  padding-bottom: 20px;
  justify-content: center;
  gap: 90px;
  @media screen and ${Device.mobileL} {
    flex-flow: column;
    gap: 20px;
    padding-bottom: 50px;
  }

  @media screen and ${Device.mobileM} {
    flex-flow: column;
    gap: 20px;
    padding-bottom: 50px;
  }
`;

const CalendlyTitle = styled.div`
  font-size: 50px;
  font-weight: 500;
  line-height: 64px;
  color: black;
  width: 80%;
  @media screen and ${Device.mobileL} {
    font-size: 30px;
    line-height: 45px;
  }

  @media screen and ${Device.mobileM} {
    font-size: 30px;
    line-height: 45px;
  }
`;

const CalendlyTitleSub = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 64px;
  color: #01a7a7;
`;

const CalendlyDescription = styled.div`
  font-size: 20px;
  font-weight: 500;
  display: flex;
  flex-flow: column;
  gap: 15px;
  color: black;
`;

const EmailLink = styled.a`
  color: black;
  &:hover {
    color: #01a7a7;
  }
  @media screen and ${Device.mobileL} {
  }

  @media screen and ${Device.mobileM} {
  }
`;

const MissionDiv = styled.div`
  background-color: white;
  width: 100%;
  padding: 20px 60px 80px 60px;
  @media screen and ${Device.mobileL} {
    padding: 60px 10px 60px 10px;
  }
  @media screen and ${Device.mobileM} {
    padding: 60px 10px 60px 10px;
  }
`;

const MissionWrapper = styled.div`
  padding: 60px 100px 60px 100px;
  background-color: #e8e8e8;
  border-radius: 40px;
  display: flex;
  flex-flow: row;
  gap: 150px;
  @media screen and ${Device.mobileL} {
    flex-flow: column;
    gap: 30px;
    padding: 50px 30px 50px 30px;
  }
  @media screen and ${Device.mobileM} {
    flex-flow: column;
    gap: 30px;
    padding: 50px 30px 50px 30px;
  }
`;

const MissionWrapperSecond = styled.div`
  display: flex;
  flex-flow: row;
  @media screen and ${Device.mobileL} {
    flex-flow: column;
  }
  @media screen and ${Device.mobileM} {
    flex-flow: column;
  }
`;

const FirstMission = styled.div`
  display: flex;
  flex-flow: column;
  gap: 15px;
  width: 50%;
  @media screen and ${Device.mobileL} {
    width: 100%;
  }
  @media screen and ${Device.mobileM} {
    width: 100%;
  }
`;
const FirstMissionTest = styled.div`
  display: flex;
  flex-flow: row;
  width: 50%;
  justify-content: center;
  gap: 60px;
  @media screen and ${Device.mobileL} {
    width: 100%;
    gap: 10px;
  }
  @media screen and ${Device.mobileM} {
    width: 100%;
    gap: 10px;
  }
`;

const FirstMissionTitle = styled.div`
  color: #01a7a7;
  font-size: 25px;
  @media screen and ${Device.mobileL} {
    font-size: 14px;
  }
  @media screen and ${Device.mobileM} {
    font-size: 14px;
  }
`;

const FirstMissionSubtitle = styled.div`
  color: black;
  font-size: 40px;
  @media screen and ${Device.mobileL} {
    font-size: 30px;
  }
  @media screen and ${Device.mobileM} {
    font-size: 30px;
  }
`;

const FirstMissionSubtitleTest = styled.div`
  color: #01a7a7;
  font-size: 68px;
  font-weight: 500;
  @media screen and ${Device.mobileL} {
    font-size: 30px;
  }
  @media screen and ${Device.mobileM} {
    font-size: 30px;
  }
`;

const FirstMissionSubtitleWhite = styled.div`
  color: black;
  font-size: 68px;
  font-weight: 500;
  @media screen and ${Device.mobileL} {
    font-size: 30px;
  }
  @media screen and ${Device.mobileM} {
    font-size: 30px;
  }
`;

const FirstMissionDescription = styled.div`
  color: black;
  font-size: 18px;
  width: 90%;
  text-align: justify;
  @media screen and ${Device.mobileL} {
    width: 100%;
  }
  @media screen and ${Device.mobileM} {
    width: 100%;
  }
`;

const FirstMissionDescriptionTest = styled.div`
  color: black;
  font-size: 22px;
  font-weight: 500;
`;

const HeaderDescription = styled.div`
  font-size: 33px;
  font-family: "Poppins", Sans-serif;
  color: #01a7a7;
  text-align: center;
  font-weight: 600;
  padding-top: 50px;
  @media screen and ${Device.mobileL} {
    font-size: 16px;
  }

  @media screen and ${Device.mobileM} {
    font-size: 16px;
  }
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

const data = {
  title: "FAQ",
  rows: [
    {
      title: "WHY 3D VIRTUAL TOURS ARE NECESSARY?",
      content: `A 3D virtual walk is necessary because it provides users with a deeper and more interactive experience than static images or textual descriptions can provide. It allows users to explore the space in real time, get a better feel for its dimensions, layout, and aesthetics.`,
    },
    {
      title: "WHO NEEDS 3D VIRTUAL TOURS?",
      content:
        "Virtual 3D walks can be useful to different groups of people and industries: real estate agents, travel agencies, interior designers, architects, museums and cultural institutions, educational institutions, it is used to display cafes, restaurants, discotheques and fairs. Our 3D virtual tour can be used by anyone who wants to show their property in a virtual way.",
    },
    {
      title: "WHAT ARE THE BENEFITS OF USING 3D VIRTUAL?",
      content: `Just some of the important ones:

      1.  Better understanding of the space: Users can get a clearer view of the space, its size, layout and functionality through an interactive experience.
      
      2. Time saving: Users can explore the space virtually, without the need to be physically present, which can save time, especially in cases where distances are long or when multiple locations need to be explored.
      
      3. Marketing advantage: For real estate agents, travel agencies and other industries, 3D virtual tours can be a powerful marketing tool to attract potential customers or visitors.
      
      4. Realistic experience: Virtual walks can provide realistic visual information about the space, including colors, textures and light, which helps users create a vivid image.
      
      5. Global accessibility: Because virtual walks are available via the Internet, they provide global access to a space or location regardless of physical distance. Users will always be able to access the virtual walk 24/7`,
    },
    {
      title:
        "HOW LONG DOES IT TAKE TO GET A RECORDING OF THE 3D VIRTUAL TOUR OF MY RESIDENCE",
      content:
        "The way we do our work is that we need to come to the property and take photos of your property. A time-consuming photography job can take between 45 minutes and 3 hours depending on the size and layout of your property. After taking photos, it is necessary to arrange the photos in the softer. You can expect your 3D virtual tour the very next day, but if the job is a little bigger and more complex, then you may have to give us an extra day so that your 3D virtual tour can be delivered to you at the highest level!",
    },
  ],
};

const styles = {
  bgColor: "#f0f2f2",
  titleTextColor: "#01a7a7",
  rowTitleColor: "#01a7a7",
  // rowContentColor: 'grey',
  // arrowColor: "red",
  rowContentPaddingTop: "10px",
  rowContentPaddingBottom: "20px",
  rowContentPaddingLeft: "20px",
  rowContentPaddingRight: "20px",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const Test: NextPage = () => {
  const [language, setLanguage] = React.useState<string>("CRO");

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  const currentLanguage = language === "EN" ? English : Croatian;

  return (
    <Layout
      title={"In Visual"}
      handleLanguageChange={handleLanguageChange}
      currentLanguage={currentLanguage}
      language={language}
    >
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
              height={250}
              width={250}
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
          </Visible>
        </div>
        <MissionDiv id="section1">
          <MissionWrapper>
            <MissionWrapperSecond>
              <FirstMission>
                <FirstMissionTitle>O nama</FirstMissionTitle>
                <FirstMissionSubtitle>InVisual</FirstMissionSubtitle>
                <FirstMissionDescription>
                  gdje pružamo vrhunske usluge 3D virtualne šetnje za nekretnine
                  u Hrvatskoj i Bosni i Hercegovini. Naš tim koristi najnoviju
                  opremu kako bi vaša nekretnina bila dostupna za virtualne
                  posjete 24/7, ističući se na konkurentnom tržištu. Sa strašću
                  za preciznošću i oštrim okom za detalje, pretvaramo vaš
                  prostor u vizualno remek-djelo.
                </FirstMissionDescription>
                <div style={{ display: "flex", flexFlow: "row", gap: 50 }}>
                  <div
                    style={{
                      display: "flex",
                      flexFlow: "column",
                      alignSelf: "center",
                    }}
                  >
                    <div style={{ display: "flex", flexFlow: "row" }}>
                      <FirstMissionSubtitleTest>+</FirstMissionSubtitleTest>
                      <FirstMissionSubtitleWhite>25</FirstMissionSubtitleWhite>
                    </div>
                    <FirstMissionDescriptionTest>
                      Apartments
                    </FirstMissionDescriptionTest>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexFlow: "column",
                      alignSelf: "center",
                    }}
                  >
                    <div style={{ display: "flex", flexFlow: "row" }}>
                      <FirstMissionSubtitleTest>+</FirstMissionSubtitleTest>
                      <FirstMissionSubtitleWhite>40</FirstMissionSubtitleWhite>
                    </div>
                    <FirstMissionDescriptionTest>
                      Houses
                    </FirstMissionDescriptionTest>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexFlow: "column",
                      alignSelf: "center",
                    }}
                  >
                    <div style={{ display: "flex", flexFlow: "row" }}>
                      <FirstMissionSubtitleTest>+</FirstMissionSubtitleTest>
                      <FirstMissionSubtitleWhite>40</FirstMissionSubtitleWhite>
                    </div>
                    <FirstMissionDescriptionTest>
                      Clients
                    </FirstMissionDescriptionTest>
                  </div>
                </div>
              </FirstMission>
              <FirstMissionTest>
                <Visible xs sm>
                  <img
                    src="./images/invisual/newHeader.svg"
                    alt="test"
                    height={250}
                    width={300}
                    style={{ justifyContent: "center" }}
                  />
                </Visible>

                <Hidden xs sm>
                  <img
                    src="./images/invisual/newHeader.svg"
                    alt="test"
                    height={400}
                    width={450}
                    style={{ justifyContent: "center" }}
                  />
                </Hidden>
              </FirstMissionTest>
            </MissionWrapperSecond>
          </MissionWrapper>
        </MissionDiv>
        <div>
          <SectionOne>
            <Title id="section3">{currentLanguage.services}</Title>
            <Description>{currentLanguage.servicesTitle}</Description>
            <Cards>
              <Card>
                <CardInner>
                  <CardFront>
                    <CardImage
                      src="./images/invisual/question.jpg"
                      alt="test"
                    />
                    <CardTitle>{currentLanguage.firstCardTitle}</CardTitle>
                  </CardFront>
                  <CardBack>
                    <AdditionalTitle>
                      {currentLanguage.firstCardHover}
                    </AdditionalTitle>
                    <AdditionalText>
                      {currentLanguage.firstCardHoverDescription}
                    </AdditionalText>
                  </CardBack>
                </CardInner>
              </Card>
              <Card>
                <CardInner>
                  <CardFront>
                    <CardImage src="./images/invisual/x3.png" alt="test" />
                    <CardTitle>{currentLanguage.secondCardTitle}</CardTitle>
                  </CardFront>
                  <CardBack>
                    <AdditionalTitle>
                      {currentLanguage.secondCardHover}
                    </AdditionalTitle>
                    <AdditionalText>
                      {currentLanguage.secondCardHoverDescription}
                    </AdditionalText>
                  </CardBack>
                </CardInner>
              </Card>
            </Cards>
            <Cards>
              <Card>
                <CardFront>
                  <CardImage
                    src="./images/invisual/dron-main-engl.png"
                    alt="test"
                  />
                  <CardTitle>{currentLanguage.thirdCardTitle}</CardTitle>
                  <CardDescription
                    style={{ padding: "0px 25px 0px 25px" }}
                  ></CardDescription>
                </CardFront>
              </Card>
              <Card>
                <CardFront>
                  <CardImage
                    src="./images/invisual/camera-main-engl.png"
                    alt="test"
                  />
                  <CardTitle>{currentLanguage.fourthCardTitle}</CardTitle>
                  <CardDescription></CardDescription>
                </CardFront>
              </Card>
            </Cards>
          </SectionOne>
          <ProjectWrapper id="section2">
            <ProjectTitle>{currentLanguage.projects}</ProjectTitle>
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
                  src="https://my.matterport.com/show/?m=6LJjJbmosbg"
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
        </div>
        <ProjectWrapper style={{ marginTop: 0, alignItems: "center" }}>
          <Hidden xs sm>
            <div style={{ width: "1000px" }}>
              <Faq data={data} styles={styles} config={config} />
            </div>
          </Hidden>
          <Visible xs sm>
            <div style={{ width: "350px" }}>
              <Faq data={data} styles={styles} config={config} />
            </div>
          </Visible>
        </ProjectWrapper>
        <Hidden xs sm>
          <CalendlyWrapper id="section4">
            <div
              style={{
                display: "flex",
                flexFlow: "column",
                alignSelf: "start",
                background: "#f0f2f2",
                padding: "0px 60px 60px 60px",
                borderRadius: 40,
                gap: 20,
                width: 650,
              }}
            >
              <CalendlyTitleSub>CAPTURE YOUR SPACE</CalendlyTitleSub>
              <CalendlyTitle>Ready to Record Your Apartment?</CalendlyTitle>
              <CalendlyDescription>
                Schedule your 3D scanning session today!
              </CalendlyDescription>
              <CalendlyDescription>
                Or contact us on:
                <EmailLink href="mailto:invisual.zg@gmail.com">
                  invisual.zg@gmail.com
                </EmailLink>
                <EmailLink href="tel:+385976483828">
                  HR: +385 97 648 3828
                </EmailLink>
                <EmailLink href="tel:+38763757084">
                  BIH: +387 63 757 084
                </EmailLink>
              </CalendlyDescription>
              <FooterTextWrapper
                onClick={() =>
                  window.open("https://www.instagram.com/invisual_design/")
                }
              >
                <img
                  src="./images/invisual/instagram.png"
                  alt="test"
                  height={30}
                  width={30}
                />
                <FooterSocial>Instagram</FooterSocial>
              </FooterTextWrapper>
            </div>
            <iframe
              style={{ borderRadius: 20 }}
              width="500"
              height="500"
              src="https://calendly.com/julianazoth/discovery?hide_event_type_details=1&hide_gdpr_banner=1&month=2024-05"
              frameBorder="0"
              allowFullScreen
              allow="xr-spatial-tracking"
            ></iframe>
          </CalendlyWrapper>
        </Hidden>
        <Visible xs sm>
          <CalendlyWrapper id="section4">
            <div
              style={{
                display: "flex",
                flexFlow: "column",
                alignSelf: "start",
                background: "#f0f2f2",
                padding: "0px 20px 60px 30px",
                borderRadius: 40,
                gap: 20,
                width: 350,
              }}
            >
              <CalendlyTitleSub>CAPTURE YOUR SPACE</CalendlyTitleSub>
              <CalendlyTitle>Ready to Record Your Apartment?</CalendlyTitle>
              <CalendlyDescription>
                Schedule your 3D scanning session today!
              </CalendlyDescription>
              <CalendlyDescription>
                Or contact us on:
                <EmailLink href="mailto:invisual.zg@gmail.com">
                  invisual.zg@gmail.com
                </EmailLink>
                <EmailLink href="tel:+385976483828">
                  HR: +385 97 648 3828
                </EmailLink>
                <EmailLink href="tel:+38763757084">
                  BIH: +387 63 757 084
                </EmailLink>
              </CalendlyDescription>
              <FooterTextWrapper
                onClick={() =>
                  window.open("https://www.instagram.com/invisual_design/")
                }
              >
                <img
                  src="./images/invisual/instagram.png"
                  alt="test"
                  height={30}
                  width={30}
                />
                <FooterSocial>Instagram</FooterSocial>
              </FooterTextWrapper>
            </div>
            <iframe
              style={{ borderRadius: 20, alignSelf: "center" }}
              width="350"
              height="500"
              src="https://calendly.com/julianazoth/discovery?hide_event_type_details=1&hide_gdpr_banner=1&month=2024-05"
              frameBorder="0"
              allowFullScreen
              allow="xr-spatial-tracking"
            ></iframe>
          </CalendlyWrapper>
        </Visible>
      </div>
    </Layout>
  );
};

export default Test;
