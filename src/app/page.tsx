'use client'
import { Carousel } from '@/components/carousel'
import { Box, Button, Container, Stack, Typography, alpha, duration, useTheme } from "@mui/material";
import CountDown from '@/components/count-down'
import GeneralCard from '@/components/cards/general/general-card';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import CommonButton from '@/components/button/common/common-button';


export default function Home() {

  const theme = useTheme()

  useEffect(() => {
    AOS.init({ once: true, duration: 700 })
  }, [])


  return (
    <>
      <Carousel data={null} />
      <Container>

        <Box sx={{ paddingY: 10 }} data-aos="fade-up" data-aos-delay={200}>
          <Stack direction='row' spacing={2} alignItems={'center'}>
            <Box sx={{
              flex: '0 0 50%',
              maxWidth: '50%'
            }}>
              <Typography variant="h6">
                OLYMPIC GOLD QUEST (OGQ)
              </Typography>
              <Typography variant="h4" className='underlineAfter'>
                IT Takes Just 6 gram of Gold To Lift The <br />Worth of a Nation
              </Typography>
            </Box>

            <Stack direction={'column'} sx={{
              flex: '0 0 50%',
              maxWidth: '50%'
            }}>


              <Box sx={{ flex: 1 }}>
                <Typography variant='body1'>
                  Olympic Gold Quest (OGQ) is a program of the Foundation for Promotion of Sports and Games, a
                  Not for Profit (Section 8) Company founded by sporting legends Geet Sethi and Prakash Padukone.
                  The mission of OGQ is to support Indian athletes in winning Olympic Gold medals.
                  In the last three Olympic Games, 9 out of the 14 individual-sport medal winners for India
                  were supported by OGQ
                </Typography>

              </Box>
            </Stack>
          </Stack>

          <Box>
            <Typography sx={{ textAlign: 'center', marginY: 4 }} variant="h3">COUNTDOWN TO <strong className='highlight'>
              PARIS 2024 OLYMPIC GAMES
            </strong>
            </Typography>
            <CountDown eventDateTime={new Date('2025-05-31T23:59:59')} />
          </Box>

        </Box>
      </Container >
      <Stack direction={'row'}>
        <Box sx={{ position: 'relative', flex: '0 0 50%', maxWidth: '50%', backgroundImage: 'url(test.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '50% 50%' }}>
          <Box sx={{ backgroundColor: alpha(theme.palette.primary.main, 0.8), height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, backgroundPosition: 'center center', backgroundRepeat: 'repeat' }}>
            <Box sx={{ p: 6, border: `2px solid ${theme.palette.common.white}`, position: 'absolute', backgroundPosition: 'center center', backgroundRepeat: 'repeat', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <Typography variant="h3" sx={{ color: theme.palette.common.white }}> Tell Us we us what can we do for your life</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ flex: '0 0 50%', background: theme.palette.common.white, maxWidth: '50%', p: '10rem 4rem' }}>
          <Typography variant="h6">
            Supported by OGQ
          </Typography>
          <Typography variant="h4" className='underlineAfter'>Medals won by Athletes</Typography>
          <Box data-aos="fade-up">


            <Typography variant="h4" >
              Olympics

              <CountUp style={{ color: theme.palette.primary.main }} enableScrollSpy scrollSpyOnce end={9} duration={1} formattingFn={(num) => num < 10 ? ` 0${num} ` : ` ${num}`} /></Typography>
            <Typography variant="h4" >
              World Championships
              <CountUp style={{ color: theme.palette.primary.main }} enableScrollSpy scrollSpyOnce end={15} duration={2} formattingFn={(num) => num < 10 ? ` 0${num} ` : ` ${num}`} />
            </Typography>


            <Typography variant="h4" >
              Asian Games
              <CountUp style={{ color: theme.palette.primary.main }} enableScrollSpy scrollSpyOnce end={312} duration={2} formattingFn={(num) => num < 10 ? ` 0${num} ` : ` ${num}`} />
            </Typography>
            <Typography variant="h4" >
              Commonwealth Games
              <CountUp style={{ color: theme.palette.primary.main }} enableScrollSpy scrollSpyOnce end={55} duration={2} formattingFn={(num) => num < 10 ? ` 0${num} ` : ` ${num}`} />
            </Typography>


            <Typography variant="h4" >
              Youth Olympics
              <CountUp style={{ color: theme.palette.primary.main }} enableScrollSpy scrollSpyOnce end={6} duration={2} formattingFn={(num) => num < 10 ? ` 0${num} ` : ` ${num}`} />
            </Typography>
            <Typography variant="h4" >
              Junior World C&apos;ships
              <CountUp style={{ color: theme.palette.primary.main }} enableScrollSpy scrollSpyOnce end={17} duration={2} formattingFn={(num) => num < 10 ? ` 0${num} ` : ` ${num}`} />
            </Typography>



            <Typography variant="h4" >
              Paralympics
              <CountUp style={{ color: theme.palette.primary.main }} enableScrollSpy scrollSpyOnce end={10} duration={2} formattingFn={(num) => num < 10 ? ` 0${num} ` : ` ${num}`} />
            </Typography>

          </Box>
        </Box>
      </Stack >
      <Stack direction={'row'}>

        <Box sx={{ flex: '0 0 50%', background: theme.palette.common.white, maxWidth: '50%', p: '10rem 4rem' }}>
          <Typography variant="h6">
            Supported by OGQ
          </Typography>
          <Typography variant="h3" className='underlineAfter'>Athletes So Far </Typography>
          <Box data-aos="fade-up">
            <Typography variant="h4" >
              Total Athletes
              <CountUp style={{ color: theme.palette.primary.main }} enableScrollSpy scrollSpyOnce end={351} duration={1} formattingFn={(num) => num < 10 ? ` 0${num} ` : ` ${num}`} />
            </Typography>
            <Typography variant="h4" >
              Senior Athletes
              <CountUp style={{ color: theme.palette.primary.main }} enableScrollSpy scrollSpyOnce end={142} duration={2} formattingFn={(num) => num < 10 ? ` 0${num} ` : ` ${num}`} />
            </Typography>
            <Typography variant="h4" >
              Junior Athletes
              <CountUp style={{ color: theme.palette.primary.main }} enableScrollSpy scrollSpyOnce end={136} duration={2} formattingFn={(num) => num < 10 ? ` 0${num} ` : ` ${num}`} />
            </Typography>
            <Typography variant="h4" >
              Para Athletes
              <CountUp style={{ color: theme.palette.primary.main }} enableScrollSpy scrollSpyOnce end={72} duration={2} formattingFn={(num) => num < 10 ? ` 0${num} ` : ` ${num}`} />
            </Typography>
          </Box>
        </Box>

        <Box sx={{ position: 'relative', flex: '0 0 50%', maxWidth: '50%', backgroundImage: 'url(test.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '50% 50%' }}>
          <Box sx={{ backgroundColor: alpha(theme.palette.secondary.main, 0.8), height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, backgroundPosition: 'center center', backgroundRepeat: 'repeat' }}>
            <Box sx={{ p: 6, border: `2px solid ${theme.palette.primary.main}`, position: 'absolute', backgroundPosition: 'center center', backgroundRepeat: 'repeat', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <Typography variant="h3" sx={{ color: theme.palette.primary.main }}> Tell Us we us what can we do for your life</Typography>
            </Box>
          </Box>
        </Box>


      </Stack>

      <Box sx={{ position: 'relative', backgroundImage: 'url(test.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundAttachment: 'fixed' }}>
        <Box sx={{ backgroundColor: alpha(theme.palette.secondary.main, 0.7), height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, backgroundPosition: 'center center', backgroundRepeat: 'repeat' }}></Box>
        <Stack position={'relative'} direction={'column'} justifyContent={'center'} alignItems={'center'} py={12}>
          <Typography variant="h5" sx={{ mb: 1 }} className='underlineAfter' color={theme.palette.common.white}>Vote for us</Typography>
          <Typography variant="h5" color={theme.palette.common.white}>In the last two Olympic Games,
            5 out of 8 medal winners were supported by OGQ.
          </Typography>
          <Typography variant="h3" color={theme.palette.common.white}>Your Support will help us</Typography>
          <Stack direction={'row'} spacing={1} flexWrap={'nowrap'} py={2}>
            <CommonButton>Know More</CommonButton>
            <CommonButton>Donate Now</CommonButton>
          </Stack>
        </Stack>
      </Box >
      <Container>
        <Stack direction={'row'} py={6} justifyContent={'space-between'}>
          <GeneralCard title="OGQ IMPACT" text='Learn how we power more talents to their road to success' />
          <GeneralCard title="HISTORY" text='OGQ has supported the training of more than 300 athletes since its inception' />
          <GeneralCard title="TEAM OGQ" text='Meet our group of hard-working & humble problem solvers' />
        </Stack>
      </Container>


    </>
  );
}
