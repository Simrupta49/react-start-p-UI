// Simran Gupta

import React from 'react'
import { Box } from '@mui/material'
import { Container } from '@mui/system'
import MyCard from './mycard'
import Grid from '@mui/material/Grid'

const OurServices = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#f7fafd' }}>
      <Container sx={{ paddingTop: '50px', textAlign: 'center' }}>
        <h1 style={{color: "#0e314c"}}>Our Services</h1>
        <p style={{ margin: '0px 300px 0px 300px', color: "#6084a4",
    lineHeight: "1.8" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ marginTop: '30px' }}
        >
          <Grid item xs={12} sm={4} md={4}>
            <MyCard
              myicon={'settings'}
              head={'Incredible Infrastructure'}
              para={
                'Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.'
              }
              style={{
                color: '#44ce6f',
                backgroundColor: '#cdf1d8',
                '&:hover': { backgroundColor: '#44ce6f', color: 'white' },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <MyCard
              myicon={'mail'}
              head={'Email Notifications'}
              para={
                'Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.'
              }
              style={{
                color: '#44ce6f',
                backgroundColor: '#cdf1d8',
                '&:hover': { backgroundColor: '#44ce6f', color: 'white' },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <MyCard
              myicon={'bell'}
              head={'Best Analytics Audits'}
              para={
                'Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.'
              }
              style={{
                color: '#44ce6f',
                backgroundColor: '#cdf1d8',
                '&:hover': { backgroundColor: '#44ce6f', color: 'white' },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <MyCard
              myicon={'grid'}
              head={'Simple Dashboard'}
              para={
                'Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.'
              }
              style={{
                color: '#c67ae3',
                backgroundColor: '#edc3fc',
                '&:hover': { backgroundColor: '#c67ae3', color: 'white' },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <MyCard
              myicon={'info'}
              head={'Information Retrieval'}
              para={
                'Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.'
              }
              style={{
                color: '#c67ae3',
                backgroundColor: '#edc3fc',
                '&:hover': { backgroundColor: '#c67ae3', color: 'white' },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <MyCard
              myicon={'hard-drive'}
              head={'Deep Technical SEO'}
              para={
                'Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.'
              }
              style={{
                color: '#c67ae3',
                backgroundColor: '#edc3fc',
                '&:hover': { backgroundColor: '#c67ae3', color: 'white' },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <MyCard
              myicon={'mouse-pointer'}
              head={'Drag & Drop Functionality'}
              para={
                'Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.'
              }
              style={{
                color: '#eb6b3d',
                backgroundColor: '#f9d2c4',
                '&:hover': { backgroundColor: '#eb6b3d', color: 'white' },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <MyCard
              myicon={'bell'}
              head={'Deadline Reminders'}
              para={
                'Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.'
              }
              style={{
                color: '#eb6b3d',
                backgroundColor: '#f9d2c4',
                '&:hover': { backgroundColor: '#eb6b3d', color: 'white' },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <MyCard
              myicon={'send'}
              head={'Modern Keyword Analysis'}
              para={
                'Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.'
              }
              style={{
                color: '#eb6b3d',
                backgroundColor: '#f9d2c4',
                '&:hover': { backgroundColor: '#eb6b3d', color: 'white' },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default OurServices
