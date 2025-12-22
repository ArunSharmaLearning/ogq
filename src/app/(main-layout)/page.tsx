"use client";
import CommonButton from "@/components/button/common/common-button";
import GeneralCard from "@/components/cards/general/general-card";
import { Carousel } from "@/components/carousel";
import { useResponsive } from "@/hooks/use-responsive";
import { useAPI } from "@/hooks/use-swr";
import {
  Box,
  Collapse,
  Container,
  Dialog,
  DialogActions,
  IconButton,
  Stack,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import AOS from "aos";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

import CountDownSlider from "@/components/count-down/count-down-slider";
import "aos/dist/aos.css";
import Iconify from "@/components/iconify";

export default function Home() {
  const theme = useTheme();
  const isMobile = useResponsive("down", "md");
  const [open, setOpen] = useState(false);

  const { data: carouselData, isLoading: carouselLoading } =
    useAPI("home_carousel");
  const { data: sportEvents, isLoading: sportEventsLoading } =
    useAPI("countdown");
  const { data: athleteStats, isLoading: athleteStatsLoading } =
    useAPI("athlete_stats");
  const { data: medalStats, isLoading: medalStatsLoading } =
    useAPI("medal_stats");

  const maxAthleteStatLength = athleteStats?.total_athletes?.length || 2;
  const maxMedalStatLength =
    Math.max(
      medalStats?.olympics,
      medalStats?.world_championships,
      medalStats?.asian_games,
      medalStats?.commonwealth_games,
      medalStats?.paralympics,
      medalStats?.junior_world_championships,
      medalStats?.para_world_championships,
      medalStats?.asian_para_games,

    )?.toString()?.length || 3;

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <>
      <Carousel data={carouselData} />
      <Container>
        {!sportEventsLoading && (
          <Box
            sx={{ paddingY: isMobile ? 2 : 10 }}
            data-aos={!isMobile && "fade-up"}
            data-aos-delay={!isMobile && 200}
          >
            <Stack
              direction={isMobile ? "column" : "row"}
              spacing={2}
              alignItems={"center"}
            >
              <Box
                sx={{
                  flex: !isMobile ? "1 1 50%" : "1 1 100%",
                  maxWidth: !isMobile ? "50%" : "100%",
                  width: !isMobile ? "auto" : "100%",
                }}
              >
                {/* <Typography variant="h6" ml={{ lg: -2, xs: 0 }}>
                  <Iconify icon={"charm:quote"} width={14} ml={0} />
                </Typography> */}
                <Typography variant="h4" className="underlineAfter" mt={{ md: -1.1, xs: 0 }}>
                  It takes just 6 grams of Gold to lift <br />
                  the worth of a Nation
                </Typography>
              </Box>

              <Stack
                direction={"column"}
                sx={{
                  flex: !isMobile ? "0 0 50%" : 1,
                  maxWidth: !isMobile ? "50%" : "100%",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body1">
                    OGQ is a program of the Foundation for Promotion of Sports
                    and Games, a Not for Profit (Section 8) Company founded by
                    Indian sports legends Geet Sethi and Prakash Padukone. The
                    mission of OGQ is to support Indian athletes in winning
                    Olympic and Paralympic Gold medals. In the last four
                    Olympics, 13 out of the 21 medal winners for India were
                    supported by OGQ and 35 out of the 48 medals for India at
                    the Tokyo 2020 & Paris 2024 Paralympics were supported by
                    OGQ
                  </Typography>
                </Box>
              </Stack>
            </Stack>

            <CountDownSlider sportEvents={sportEvents} />
          </Box>
        )}
      </Container>

      <Stack direction={isMobile ? "column" : "row"}>
        <Box
          sx={{
            height: isMobile ? "80vh" : "auto",
            minHeight: '80vh',
            position: "relative",
            flex: !isMobile && "0 0 50%",
            maxWidth: !isMobile ? "50%" : "100%",
            backgroundImage: "url(athlete-2.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
          }}
        >
          <Box
            sx={{
              backgroundColor: alpha(theme.palette.primary.main, 0.5),
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              backgroundPosition: "center center",
              backgroundRepeat: "repeat",
            }}
          >
            <Box
              sx={{
                p: isMobile ? "40vw 10vw" : theme.spacing(13, 4),
                width: isMobile ? "85%" : "auto",
                border: `2px solid ${theme.palette.common.white}`,
                position: "absolute",
                backgroundPosition: "center center",
                backgroundRepeat: "repeat",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Typography
                variant="h2"
                sx={{ color: theme.palette.common.white }}
              >
                OGQ supported Athletes and Para Athletes Over The Years
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            flex: !isMobile && "0 0 50%",
            background: theme.palette.common.white,
            maxWidth: !isMobile ? "50%" : "100%",
            p: isMobile ? "5rem 2rem" : "10rem 4rem",
          }}
        >
          <Typography variant="h6">Supported by OGQ</Typography>
          <Typography variant="h3" className="underlineAfter">
            Medals won by Athletes
          </Typography>
          <Box data-aos="fade-up">
            {medalStats?.olympics > 0 && (
              <Typography variant="h4" display={'flex'} alignItems={'center'}>
                {medalStats.olympics &&
                  <CountUp
                    style={{
                      color: theme.palette.primary.main,
                      width: theme.spacing(maxMedalStatLength + 4),
                      display: "inline-block",
                      fontSize: isMobile && '1.45rem'
                    }}
                    enableScrollSpy
                    scrollSpyOnce
                    preserveValue
                    end={medalStats.olympics}
                    duration={2}
                    formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
                  />}
                Olympics
              </Typography>
            )}


            {medalStats?.paralympics > 0 && (
              <Typography variant="h4" display={'flex'} alignItems={'center'}>
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxMedalStatLength + 4),
                    display: "inline-block",
                    fontSize: isMobile && '1.45rem'
                  }}
                  enableScrollSpy
                  scrollSpyOnce
                  end={medalStats.paralympics}
                  duration={2}
                  formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
                />
                Paralympics
              </Typography>
            )}

            {medalStats?.para_world_championships > 0 && (
              <Typography variant="h4" display={'flex'} alignItems={'center'}>
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxMedalStatLength + 4),
                    display: "inline-block",
                    fontSize: isMobile && '1.45rem'
                  }}
                  enableScrollSpy
                  scrollSpyOnce
                  end={medalStats.para_world_championships}
                  duration={2}
                  formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
                />
                World Para Championships
              </Typography>
            )}

            {medalStats?.world_championships > 0 && (
              <Typography variant="h4" display={'flex'} alignItems={'center'}>
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxMedalStatLength + 4),
                    display: "inline-block",
                    fontSize: isMobile && '1.45rem'
                  }}
                  enableScrollSpy
                  scrollSpyOnce
                  end={medalStats.world_championships}
                  duration={2}
                  formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
                />
                World Championships
              </Typography>
            )}

            {medalStats?.asian_games > 0 && (
              <Typography variant="h4" display={'flex'} alignItems={'center'}>
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxMedalStatLength + 4),
                    display: "inline-block",
                    fontSize: isMobile && '1.45rem'
                  }}
                  enableScrollSpy
                  scrollSpyOnce
                  end={medalStats.asian_games}
                  duration={2}
                  formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
                />
                Asian Games
              </Typography>
            )}

            {medalStats?.asian_para_games > 0 && (
              <Typography variant="h4" display={'flex'} alignItems={'center'}>
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxMedalStatLength + 4),
                    display: "inline-block",
                    fontSize: isMobile && '1.45rem'
                  }}
                  enableScrollSpy
                  scrollSpyOnce
                  end={medalStats.asian_para_games}
                  duration={2}
                  formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
                />
                Asian Para Games
              </Typography>
            )}

            {medalStats?.commonwealth_games > 0 && (
              <Typography variant="h4" display={'flex'} alignItems={'center'}>
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxMedalStatLength + 4),
                    display: "inline-block",
                    fontSize: isMobile && '1.45rem'
                  }}
                  enableScrollSpy
                  scrollSpyOnce
                  end={medalStats.commonwealth_games}
                  duration={2}
                  formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
                />
                Commonwealth Games
              </Typography>
            )}

            {medalStats?.youth_olympics > 0 && (
              <Typography variant="h4" display={'flex'} alignItems={'center'}>
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxMedalStatLength + 4),
                    display: "inline-block",
                    fontSize: isMobile && '1.45rem'
                  }}
                  enableScrollSpy
                  scrollSpyOnce
                  end={medalStats.youth_olympics}
                  duration={2}
                  formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
                />
                Youth Olympics
              </Typography>
            )}
            {medalStats?.junior_world_championships > 0 && (
              <Typography variant="h4" display={'flex'} alignItems={'center'}>
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxMedalStatLength + 4),
                    display: "inline-block",
                    fontSize: isMobile && '1.45rem'
                  }}
                  enableScrollSpy
                  scrollSpyOnce
                  end={medalStats.junior_world_championships}
                  duration={2}
                  formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
                />
                Junior World Championships
              </Typography>
            )}

          </Box>
        </Box>
      </Stack>
      <Stack direction={isMobile ? "column" : "row"}>
        <Box
          order={isMobile && 1}
          sx={{
            background: theme.palette.common.white,
            flex: !isMobile && "0 0 50%",
            maxWidth: !isMobile ? "50%" : "100%",
            p: isMobile ? "5rem 2rem" : "10rem 4rem",
          }}
        >
          <Typography variant="h6">Supported by OGQ</Typography>
          <Typography variant="h3" className="underlineAfter">
            Athletes So Far
          </Typography>
          <Box data-aos="fade-up">
            {athleteStats?.total_athletes > 0 && (
              <Typography variant="h4" display={'flex'} alignItems={'center'}>
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxAthleteStatLength + 4),
                    display: "inline-block",
                    fontSize: isMobile && '1.45rem'
                  }}
                  enableScrollSpy
                  scrollSpyOnce
                  end={athleteStats.total_athletes}
                  duration={2}
                  formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
                />
                Total Athletes
              </Typography>
            )}

            {athleteStats?.senior_athletes > 0 && (
              <Typography variant="h4" display={'flex'} alignItems={'center'}>
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxAthleteStatLength + 4),
                    display: "inline-block",
                    fontSize: isMobile && '1.45rem'
                  }}
                  enableScrollSpy
                  scrollSpyOnce
                  end={athleteStats.senior_athletes}
                  duration={2}
                  formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
                />
                Senior Athletes
              </Typography>
            )}
            {athleteStats?.junior_athletes > 0 && (
              <Typography variant="h4" display={'flex'} alignItems={'center'}>
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxAthleteStatLength + 4),
                    display: "inline-block",
                    fontSize: isMobile && '1.45rem'
                  }}
                  enableScrollSpy
                  scrollSpyOnce
                  end={athleteStats.junior_athletes}
                  duration={2}
                  formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
                />
                Junior Athletes
              </Typography>
            )}
            {athleteStats?.para_athletes > 0 && (
              <Typography variant="h4" display={'flex'} alignItems={'center'}>
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxAthleteStatLength + 4),
                    display: "inline-block",
                    fontSize: isMobile && '1.45rem'
                  }}
                  enableScrollSpy
                  scrollSpyOnce
                  end={athleteStats.para_athletes}
                  duration={2}
                  formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
                />
                Para Athletes
              </Typography>
            )}
          </Box>
        </Box>

        <Box
          order={isMobile && 0}
          sx={{
            height: isMobile ? "80vh" : "100vh",
            minHeight: '80vh',
            position: "relative",
            flex: !isMobile && "0 0 50%",
            maxWidth: !isMobile ? "50%" : "100%",
            backgroundImage: "url(athlete-1.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
          }}
        >
          <Box
            sx={{
              backgroundColor: alpha(theme.palette.secondary.dark, 0.7),
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              backgroundPosition: "center center",
              backgroundRepeat: "repeat",
            }}
          >
            <Box
              sx={{
                p: isMobile ? "12vw 8vw" : theme.spacing(2, 3),
                width: isMobile ? "85%" : "auto",
                border: `2px solid ${theme.palette.primary.main}`,
                position: "absolute",
                backgroundPosition: "center center",
                backgroundRepeat: "repeat",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Typography
                variant="h2"
                sx={{ color: theme.palette.primary.main }}
              >
                OGQ supports athletes and para athletes across 10 Olympic Sports and 8 Paralympic Sports
              </Typography>
            </Box>
          </Box>
        </Box>

      </Stack>

      <Container>
        <Box sx={{ py: 7 }}>
          <Stack direction="column" mb={3}>
            <Typography className="underlineAfter" variant="h1" sx={{ mb: 2 }}>
              Leading Sports NGO in India Supporting Talent & Creating

            </Typography>
          </Stack>

          <Box>

            <Stack direction="column" flexWrap={"nowrap"}>
              <Typography variant="body1" >
                Sports in India is growing rapidly, and thousands of young athletes are looking for the right platform to showcase their potential.
                {"  "}
                This is why Sports NGO India initiatives have become essential for nurturing talent, building strong sports communities, and promoting Olympic-level preparation. {" "}
                If you are searching for the right place to contribute, the rise of NGO sports organizations in India offers powerful opportunities for long-term impact.
              </Typography>
              {!open && (
                <CommonButton sx={{ px: 6.2, py: 1.2, width: 'fit-content', mt: 2 }} type="submit" onClick={() => setOpen(!open)}>Read more</CommonButton>
              )}
            </Stack>
            <Collapse in={open} timeout="auto" unmountOnExit>

              <Typography><strong>Sports NGO India</strong> initiatives have become essential for nurturing talent, building strong sports communities, and promoting Olympic-level preparation.
                If you are searching for the right place to contribute, the rise of NGO sports organizations in India offers powerful opportunities for long-term impact.
                <br />
                <br />
                As one of the <strong>NGO sports organizations</strong> in India, our mission is to empower athletes by giving them access to training, nutrition, equipment, and world-class guidance.
                Many families struggle to support their children&apos;s sports dreams due to financial limitations.
                This is where sports donation in India plays a crucial role.
                <br />
                <br />
                Your support can directly help deserving talent participate in national and international events.
                Companies today are also increasingly aware of the importance of sports development under CSR.
                Through <strong>CSR Donations</strong> for Sports, organizations are contributing to athlete training, infrastructure development, and grassroots sports programs.
              </Typography>


              <Box
                sx={{
                  bgcolor: "#ffffffff",
                  borderRadius: "8px",
                  p: 3,
                  my: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#37322F",
                    mb: 2,
                  }}
                >
                  Our Impact Areas
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  {[
                    "Athlete Training Programs",
                    "Olympic-Level Preparation",
                    "Grassroots Development",
                    "Equipment & Nutrition",
                    "Infrastructure Support",
                  ].map((item) => (
                    <Box key={item} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          bgcolor: "#37322F",
                        }}
                      />
                      <Typography sx={{ fontSize: "0.8rem", color: "#605A57" }}>{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box sx={{ mt: 2 }}>
                <Box
                  sx={{
                    bgcolor: "#37322F",
                    borderRadius: "8px",
                    p: 3,
                    color: "white",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      mb: 1.5,
                    }}
                  >
                    Join the Movement
                  </Typography>
                  <Typography sx={{ fontSize: "0.8rem", lineHeight: 1.6, opacity: 0.95 }}>
                    Be part of India&apos;s journey towards sporting excellence through transparent and impactful
                    contributions.
                  </Typography>
                </Box>

                <Typography variant="body1" sx={{ mt: 3 }}>
                  These contributions not only uplift the community but also align perfectly with India&apos;s vision of becoming a global sports powerhouse.
                  If you are looking for trustworthy partners, several sports sponsorship companies in India collaborate with NGO&apos;s to support athletes at various levels.
                  We work closely with brands to create structured programs where every rupee donated brings measurable outcomes.
                  <br />
                  <br />
                  Whether you&apos;re an individual donor or a corporate brand, your involvement strengthens India&apos;s sports ecosystem.
                  For donors seeking credibility, <strong>choosing the best NGO</strong> for Indian sports is crucial. Transparency, athlete success stories, training quality, and fund utilization are the benchmarks of a reputable organization.
                  <br />
                  <br />
                  As an established NGO for Sports in India, we ensure that every contribution is channelled towards real athlete development.
                  Specialized programs are also designed for elite competitors, making us a preferred NGO for <strong>Olympic athletes</strong>.
                  These athletes require advanced training and financial support to compete on the world stage, and your donations help bridge this gap.
                  In a country full of talent, your participation in sports donation in India can change careers, shape futures, and empower champions.
                  Join hands with one of the leading NGO for Sports in India and be part of India&apos;s journey towards sporting excellence.
                </Typography>
              </Box>

              {open && (
                <CommonButton sx={{ px: 6.2, py: 1.2, mt: 2, width: 'fit-content' }} type="submit" onClick={() => setOpen(!open)}>Show Less</CommonButton>
              )}

            </Collapse>
          </Box>
        </Box>

      </Container >

      <Box
        sx={{
          position: "relative",
          backgroundImage: "url(india-flag.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          backgroundAttachment: "fixed",
        }}
      >
        <Box
          sx={{
            backgroundColor: alpha(theme.palette.secondary.dark, 0.5),
            backdropFilter: "blur(4px)",
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundPosition: "center center",
            backgroundRepeat: "repeat",
          }}
        ></Box>
        <Stack
          position={"relative"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          py={12}
        >
          <Typography
            variant="h5"
            sx={{ mb: 0 }}
            className="underlineAfter"
            color={theme.palette.common.white}
          >
            Join Our Cause
          </Typography>
          <Typography
            variant="h3"
            color={theme.palette.common.white}
            mt={1}
            textAlign={"center"}
          >
            Support and join the OGQ movement
          </Typography>
          <Stack direction={"row"} spacing={1} flexWrap={"nowrap"} py={2}>
            <CommonButton link="vision-and-mission">Know More</CommonButton>
            <CommonButton link="donate-now">Donate Now</CommonButton>
          </Stack>
        </Stack>
      </Box>
      <Container>
        <Box sx={{ paddingTop: 7 }}>
          <Typography variant="h3" className="underlineAfter" mb={3}>
            Discover Our Journey
          </Typography>
          <Stack
            data-aos="fade-up"
            data-aos-delay={200}
            direction={!isMobile ? "row" : "column"}
            gap={2}
            pb={2}
            justifyContent={"space-between"}
          >
            <GeneralCard
              title="HISTORY"
              text="OGQ has supported the training of more than 300 athletes since its inception"
              link="/history"
              image="editable/history.jpg"
            />
            <GeneralCard
              title="TEAM OGQ"
              text="Meet our group of hard-working & humble problem solvers"
              link="/team/india/board%20of%20directors"
              image="team.jpg"
            />
            <GeneralCard
              title="OGQ IMPACT"
              text="Learn how we power more talents to their road to success"
              link="ogq-impact"
              image="player.jpg"
            />
          </Stack>
        </Box>
      </Container>
    </>
  );
}
