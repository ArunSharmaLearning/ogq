"use client";
import Announcement from "@/components/announcement";
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

export default function Home() {
  const theme = useTheme();
  const isMobile = useResponsive("down", "md");

  const { data: carouselData, isLoading: carouselLoading } =
    useAPI("home_carousel");
  const { data: sportEvent, isLoading: sportEventLoading } =
    useAPI("countdown");
  const { data: athleteStats, isLoading: athleteStatsLoading } =
    useAPI("athlete_stats");
  const { data: medalStats, isLoading: medalStatsLoading } =
    useAPI("medal_stats");
  const { data: announcements, isLoading: announcementsLoading } =
    useAPI("announcement");

  const maxAthleteStatLength = athleteStats?.total_athletes?.length || 2;
  const maxMedalStatLength = Math.max(
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

  const isEventGoingOn = () => {
    const today = new Date();
    const eventStartDate = new Date(sportEvent?.start_date);

    if (today < eventStartDate) return false; // Event will start after sometime
    return true; // Event going on
  };

  return (
    <>
      <Carousel data={carouselData} />
      <Container>
        {!sportEventLoading && (
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
                    {sportEvent.extra_info}
                  </Typography>
                </Box>
              </Stack>
            </Stack>

            <Box>
              <Typography sx={{ textAlign: "center", marginY: 4 }} variant="h3">
                {!isEventGoingOn() ? <>COUNTDOWN TO</> : <>CLOSING CEREMONY</>}
                {isMobile && <br />}
                <strong className="highlight">
                  {sportEvent?.text.toUpperCase()}
                </strong>
              </Typography>
              <CountDown
                isEventGoingOn={isEventGoingOn()}
                eventDateTime={
                  new Date(
                    isEventGoingOn()
                      ? sportEvent?.end_date
                      : sportEvent?.start_date
                  )
                }
                sx={{
                  flexDirection: "row",
                  maxWidth: isMobile ? "90%" : "100%",
                  gap: isMobile ? theme.spacing(5) : theme.spacing(2),
                  flexWrap: isMobile ? "wrap" : "no-wrap",
                }}
              />
            </Box>
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
            <Typography variant="h4">
              <CountUp
                style={{
                  color: theme.palette.primary.main,
                  width: theme.spacing(maxMedalStatLength + 4),
                  display: "inline-block",
                }}
                enableScrollSpy
                scrollSpyOnce
                end={medalStats?.olympics}
                duration={2}
                formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
              />
              Olympics
            </Typography>
            <Typography variant="h4">
              <CountUp
                style={{
                  color: theme.palette.primary.main,
                  width: theme.spacing(maxMedalStatLength + 4),
                  display: "inline-block",
                }}
                enableScrollSpy
                scrollSpyOnce
                end={medalStats?.world_championships}
                duration={2}
                formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
              />
              World Championships
            </Typography>

            <Typography variant="h4">
              <CountUp
                style={{
                  color: theme.palette.primary.main,
                  width: theme.spacing(maxMedalStatLength + 4),
                  display: "inline-block",
                }}
                enableScrollSpy
                scrollSpyOnce
                end={medalStats?.asian_games}
                duration={2}
                formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
              />
              Asian Games
            </Typography>
            <Typography variant="h4">
              <CountUp
                style={{
                  color: theme.palette.primary.main,
                  width: theme.spacing(maxMedalStatLength + 4),
                  display: "inline-block",
                }}
                enableScrollSpy
                scrollSpyOnce
                end={medalStats?.commonwealth_games}
                duration={2}
                formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
              />
              Commonwealth Games
            </Typography>

            <Typography variant="h4">
              <CountUp
                style={{
                  color: theme.palette.primary.main,
                  width: theme.spacing(maxMedalStatLength + 4),
                  display: "inline-block",
                }}
                enableScrollSpy
                scrollSpyOnce
                end={medalStats?.youth_olympics}
                duration={2}
                formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
              />
              Youth Olympics
            </Typography>
            <Typography variant="h4">
              <CountUp
                style={{
                  color: theme.palette.primary.main,
                  width: theme.spacing(maxMedalStatLength + 4),
                  display: "inline-block",
                }}
                enableScrollSpy
                scrollSpyOnce
                end={medalStats?.junior_world_championships}
                duration={2}
                formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
              />
              Junior World C&apos;ships
            </Typography>

            <Typography variant="h4">
              <CountUp
                style={{
                  color: theme.palette.primary.main,
                  width: theme.spacing(maxMedalStatLength + 4),
                  display: "inline-block",
                }}
                enableScrollSpy
                scrollSpyOnce
                end={medalStats?.paralympics}
                duration={2}
                formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
              />
              Paralympics
            </Typography>
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
            <Typography variant="h4">
              <CountUp
                style={{
                  color: theme.palette.primary.main,
                  width: theme.spacing(maxAthleteStatLength + 4),
                  display: "inline-block",
                }}
                enableScrollSpy
                scrollSpyOnce
                end={athleteStats?.total_athletes}
                duration={2}
                formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
              />
              Total Athletes
            </Typography>
            <Typography variant="h4">
              <CountUp
                style={{
                  color: theme.palette.primary.main,
                  width: theme.spacing(maxAthleteStatLength + 4),
                  display: "inline-block",
                }}
                enableScrollSpy
                scrollSpyOnce
                end={athleteStats?.senior_athletes}
                duration={2}
                formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
              />
              Senior Athletes
            </Typography>
            <Typography variant="h4">
              <CountUp
                style={{
                  color: theme.palette.primary.main,
                  width: theme.spacing(maxAthleteStatLength + 4),
                  display: "inline-block",
                }}
                enableScrollSpy
                scrollSpyOnce
                end={athleteStats?.junior_athletes}
                duration={2}
                formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
              />
              Junior Athletes
            </Typography>
            <Typography variant="h4">
              <CountUp
                style={{
                  color: theme.palette.primary.main,
                  width: theme.spacing(maxAthleteStatLength + 4),
                  display: "inline-block",
                }}
                enableScrollSpy
                scrollSpyOnce
                end={athleteStats?.para_athletes}
                duration={2}
                formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
              />
              Para Athletes
            </Typography>
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
      <Container>
        {!announcementsLoading && (
          <Box sx={{ padding: theme.spacing(6, 0, 12) }}>
            <Typography variant="h6">
              Stay Updated with the Latest Udates
            </Typography>
            <Typography variant="h3" mb={3} className="underlineAfter">
              Announcements
            </Typography>
            <Announcement announcements={announcements} />
          </Box>
        )}
      </Container>

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
            sx={{ mb: 1 }}
            className="underlineAfter"
            color={theme.palette.common.white}
          >
            Join Our Cause
          </Typography>
          <Typography
            variant="h5"
            color={theme.palette.common.white}
            sx={{ textAlign: "center" }}
          >
            In the last two Olympic Games, 5 out of 8 medal winners were
            supported by OGQ.
          </Typography>
          <Typography variant="h3" color={theme.palette.common.white} mt={1}>
            Your Support will help us
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
              title="OGQ IMPACT"
              text="Learn how we power more talents to their road to success"
            />
            <GeneralCard
              title="HISTORY"
              text="OGQ has supported the training of more than 300 athletes since its inception"
            />
            <GeneralCard
              title="TEAM OGQ"
              text="Meet our group of hard-working & humble problem solvers"
            />
          </Stack>
        </Box>
      </Container>
    </>
  );
}
