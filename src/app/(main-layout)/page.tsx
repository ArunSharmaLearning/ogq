"use client";
import CommonButton from "@/components/button/common/common-button";
import GeneralCard from "@/components/cards/general/general-card";
import { Carousel } from "@/components/carousel";
import CountDown from "@/components/count-down";
import { useResponsive } from "@/hooks/use-responsive";
import { useAPI } from "@/hooks/use-swr";
import {
  Box,
  Container,
  Stack,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import AOS from "aos";
import { useEffect } from "react";
import CountUp from "react-countup";

import "aos/dist/aos.css";
import CountDownSlider from "@/components/count-down/count-down-slider";

export default function Home() {
  const theme = useTheme();
  const isMobile = useResponsive("down", "md");

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
      medalStats?.junior_world_championships
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
            sx={{ paddingY: isMobile ? 5 : 10 }}
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
                <Typography variant="h6">Elevate National Pride</Typography>
                <Typography variant="h4" className="underlineAfter">
                  It Takes Just 6 gram of Gold To Lift <br />
                  The Worth of a Nation
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
                    sporting legends Geet Sethi and Prakash Padukone. The
                    mission of OGQ is to support Indian athletes in winning
                    Olympic Gold medals. In the last three Olympic Games, 9 out
                    of the 14 individual-sport medal winners for India were
                    supported by OGQ.
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
            height: isMobile ? "90vh" : "auto",
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
                p: isMobile ? "14vw 10vw" : theme.spacing(8, 4),
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
                Our champions have made their mark, earning medals in elite
                competitions worldwide
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
              <Typography variant="h4">
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxMedalStatLength + 4),
                    display: "inline-block",
                  }}
                  enableScrollSpy
                  scrollSpyOnce
                  end={medalStats.olympics}
                  duration={2}
                  formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
                />
                Olympics
              </Typography>
            )}
            {medalStats?.world_championships > 0 && (
              <Typography variant="h4">
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxMedalStatLength + 4),
                    display: "inline-block",
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
              <Typography variant="h4">
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxMedalStatLength + 4),
                    display: "inline-block",
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
            {medalStats?.commonwealth_games > 0 && (
              <Typography variant="h4">
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxMedalStatLength + 4),
                    display: "inline-block",
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
              <Typography variant="h4">
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxMedalStatLength + 4),
                    display: "inline-block",
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
              <Typography variant="h4">
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxMedalStatLength + 4),
                    display: "inline-block",
                  }}
                  enableScrollSpy
                  scrollSpyOnce
                  end={medalStats.junior_world_championships}
                  duration={2}
                  formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
                />
                Junior World C&apos;ships
              </Typography>
            )}

            {medalStats?.paralympics > 0 && (
              <Typography variant="h4">
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxMedalStatLength + 4),
                    display: "inline-block",
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
              <Typography variant="h4">
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxAthleteStatLength + 4),
                    display: "inline-block",
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
              <Typography variant="h4">
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxAthleteStatLength + 4),
                    display: "inline-block",
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
              <Typography variant="h4">
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxAthleteStatLength + 4),
                    display: "inline-block",
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
              <Typography variant="h4">
                <CountUp
                  style={{
                    color: theme.palette.primary.main,
                    width: theme.spacing(maxAthleteStatLength + 4),
                    display: "inline-block",
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
            height: isMobile ? "90vh" : "auto",
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
                p: isMobile ? "20vw 12vw" : theme.spacing(3, 6),
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
                OGQ supports a diverse group of senior, junior, and para
                athletes
              </Typography>
            </Box>
          </Box>
        </Box>
      </Stack>

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
          <Typography variant="h3" color={theme.palette.common.white} mt={1} textAlign={'center'}>
            Join us in our journey with your support
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
              image="track.jpg"
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
