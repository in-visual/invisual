/* eslint-disable @next/next/no-img-element */
import "/node_modules/flag-icons/css/flag-icons.min.css";
import * as React from "react";
import * as Router from "next/router";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { CONTAINER_MAX_WIDTH, Device } from "../../constants/breakpoints";
import { Hidden, Visible } from "react-grid-system";
import ScrollProgressBar from "../animations/ScrollProgressBar";
import { Dropdown, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

const Self = styled.header`
  position: sticky;
  top: 0;
  padding: 15px;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  flex-flow: column;
  z-index: 100;
  // border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(40, 30, 48, 0.15);
  @media screen and ${Device.mobileL} {
    background: black;
  }
  @media screen and ${Device.mobileM} {
    background: black;
  }
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: ${CONTAINER_MAX_WIDTH}px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`;
const LogoContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  @media screen and ${Device.mobileL} {
    flex-flow: row;
  }
  &: hover {
    cursor: pointer;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

const Nav = styled.nav`
  color: ${(p) => p.theme.colors.light};
  font-weight: bold;
  display: flex;
  flex-flow: row;
  align-items: center;
`;
const NavItems = styled.ul`
  padding: 0;
  margin-right: "0px";
  margin-left: 30px;
  list-style: none;
  margin-bottom: 0px;
  display: flex;
  flex-flow: row;
  align-items: center;
`;
const NavItem = styled.li<{ path: string }>`
  color: white;
  font-family: "Inter-Regular";
  font-weight: 400; // do not remove
  font-size: 15px;
  vertical-align: middle;
  display: inline-block;
  position: relative;
  margin-right: 30px;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: #01a7a7;
    &::before {
      // Using ::before to position the cone above the item
      content: "";
      display: block;
      position: absolute;
      width: 0;
      height: 0;
      border-left: 7px solid transparent; // Side borders to create the cone sides
      border-right: 7px solid transparent; // Side borders to create the cone sides
      border-top: 10px solid #01a7a7; // This creates the cone top pointing downwards
      bottom: 110%; // Position it at the bottom of the parent element, which effectively puts it above the text
      left: 50%;
      transform: translateX(-50%) translateY(-5px); // Center the cone and move it 5px above the text
    }
  }
`;

const MobileNav = styled.div`
  position: fixed;
  display: flex;
  flex-flow: column;
  z-index: 101;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: #2acdea;
`;
const MobileNavBar = styled.div`
  display: flex;
  flex-flow: column;
  position: absolute;
  top: 130px;
  left: 20px;
  gap: 10px;
  width: 100%;
`;
const MobileNavLink = styled(Link)``;
const MobileNavText = styled.div`
  color: #281e30;
  font-family: "PPTelegraf-Regular";
  font-weight: 400;
  font-size: 40px;
  line-height: 42px;
`;
const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
`;

const MobileSocials = styled.div`
  display: flex;
  // flex-direction: row;
  position: fixed;
  bottom: 10px;
  padding-left: 20px;
  // gap: 10px;
`;

const TriangleHover = styled.img`
  display: none;
  position: absolute;
  top: -16.5px;
  left: 45%;
  // transform: translateX(-50%);
  ${NavItem}:hover & {
    display: block;
  }
`;

export default function Header({
  handleLanguageChange,
  currentLanguage,
  language,
}) {
  const router = Router.useRouter();
  const path = Router.useRouter().pathname;
  const [isLinesContainerOpen, setIsLinesContainerOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState<number>(0);
  const [isOpenPopup, setIsOpenPopup] = React.useState<boolean>(false);
  const [activeSection, setActiveSection] = React.useState("");

  const handleLinesContainerToggle = () => {
    setIsLinesContainerOpen(!isLinesContainerOpen);
  };
  const toggleOpen = () => {
    setIsOpen((prevIsOpen: number) => (prevIsOpen === 0 ? 1 : 0));
  };
  const togglePopup = () => {
    setIsOpenPopup(!isOpenPopup);
  };
  const handleOpenTab = (url: string) => {
    window.open(url, "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };
  const items = [
    {
      key: "1",
      label: (
        <div
          style={{ display: "flex", gap: 5 }}
          onClick={() => handleLanguageChange("EN")}
        >
          <span className="fi fi-gb"></span>
          {currentLanguage.english}
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          style={{ display: "flex", gap: 5 }}
          onClick={() => handleLanguageChange("CRO")}
        >
          <span className="fi fi-hr"></span>
          {currentLanguage.croatian}
        </div>
      ),
    },
  ];

  return (
    <Self>
      {isOpen === 1 && <Backdrop onClick={toggleOpen} />}
      <Container>
        <ScrollProgressBar />
        <LogoContainer
          onClick={(e) => {
            e.preventDefault();
            router.push("/");
          }}
        >
          <Hidden xs sm>
            <Image
              width={219}
              height={51}
              src="./images/invisual/InVisual-white.svg"
              alt="In Visual Logo"
            />
          </Hidden>
          <Visible xs sm>
            <Image
              width={100}
              height={51}
              src="./images/invisual/InVisual-white.svg"
              alt="In Visual Logo"
            />
          </Visible>
        </LogoContainer>
        <RightSide>
          <Hidden xs sm>
            <Nav>
              <NavItems>
                <NavItem
                  path={path}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("section1");
                  }}
                >
                  {currentLanguage.services}
                </NavItem>
                <NavItem
                  path={path}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("section2");
                  }}
                >
                  {currentLanguage.projects}
                </NavItem>
                <NavItem
                  path={path}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("section3");
                  }}
                >
                  {currentLanguage.aboutUs}
                </NavItem>
                <NavItem
                  path={path}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("section4");
                  }}
                >
                  {currentLanguage.contact}
                </NavItem>
              </NavItems>
            </Nav>
            <Dropdown
              menu={{
                items,
              }}
            >
              <a
                style={{ fontFamily: "Inter-Regular", fontSize: 15 }}
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  {language === "CRO" ? (
                    <span className="fi fi-hr"></span>
                  ) : (
                    <span className="fi fi-gb"></span>
                  )}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Hidden>
          <Visible xs sm>
            <Dropdown
              menu={{
                items,
              }}
            >
              <a
                style={{ fontFamily: "Inter-Regular", fontSize: 15 }}
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  {language === "CRO" ? (
                    <span className="fi fi-hr"></span>
                  ) : (
                    <span className="fi fi-gb"></span>
                  )}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Visible>
          {/* <Visible xs sm>
            {isLinesContainerOpen && (
              <MobileNav>
                <MobileNavBar>
                  <MobileNavLink
                    target="_blank"
                  >
                    <LinkWrapper>
                      <MobileNavText>Marketplace</MobileNavText>
                    </LinkWrapper>
                  </MobileNavLink>
                  <MobileNavLink
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("joinus");
                    }}
                    href={"/"}
                  >
                    <LinkWrapper>
                      <MobileNavText>Join us</MobileNavText>
                    </LinkWrapper>
                  </MobileNavLink>
                  <MobileNavLink
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("incubation");
                    }}
                    href={"/"}
                  >
                    <LinkWrapper>
                      <MobileNavText>Incubation</MobileNavText>
                    </LinkWrapper>
                  </MobileNavLink>
                  <MobileNavLink
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("contactus");
                    }}
                    href={"/"}
                  >
                    <LinkWrapper>
                      <MobileNavText>Contact</MobileNavText>
                    </LinkWrapper>
                  </MobileNavLink>
                </MobileNavBar>
                <MobileSocials>
                  <IconsContainer isMobile={true} backgroundIsDark={false} />
                </MobileSocials>
              </MobileNav>
            )}
            <>
              <LinesContainer
                isOpen={isLinesContainerOpen}
                onClick={handleLinesContainerToggle}
              >
                <Image
                  width={48}
                  height={48}
                  src={
                    isLinesContainerOpen
                      ? "/images/closeMenu.svg"
                      : "/images/mobileMenu.svg"
                  }
                  alt=""
                />
              </LinesContainer>
            </>
          </Visible> */}
        </RightSide>
      </Container>
    </Self>
  );
}
