// Simran Gupta

import React from 'react'
import { Box, Container } from '@mui/material'
import MyCard from './mycard'
import Grid from '@mui/material/Grid'

const PricingPlans = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#f9f6f6' }}>
      <Container sx={{ paddingTop: '50px', textAlign: 'center' }}>
        <h1 style={{color: "#0e314c"}}>Pricing Plans</h1>
        <p style={{ margin: '0px 300px 0px 300px',color: "#6084a4",
    lineHeight: "1.8"  }}>
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
            style={{'&:hover': {background: "linear-gradient(135deg,#23bdb8,#43e794)",
            color:"white"
          },
            borderBottom: '1px solid rgb(229 213 213 / 50%)',
        }}
        // headstyle={{color: "#0e314c",'&:hover':{}}}
              head={
                <>
                  <h1 style={{color:"#44ce6f"}}>
                    <sup>$</sup>15.00<sub style={{fontSize: "15px"}}>/Mon</sub>
                  </h1>
                  <p style={{ color: '#6084a4' }}>5 GB Bandwidth</p>
                  <p style={{ color: '#6084a4' }}> Highest Speed </p>
                  <p style={{ color: '#6084a4' }}>1 GB Storage </p>
                  <p style={{ color: '#6084a4' }}>Unlimited Website</p>
                  <p style={{ color: '#6084a4' }}> Unlimited Users </p>
                  <p style={{ color: '#6084a4' }}>24x7 Great Support</p>
                  <p style={{ color: '#b5b5b5' }}>
                    <del>Data Security and Backups</del>
                  </p>
                  <p style={{ color: '#b5b5b5' }}>
                    <del>Monthly Reports and Analytics</del>
                  </p>
                </>
              }
              bttn={{
                backgroundColor: '#44ce6f',
                '&:hover': { backgroundColor: '#c679e3' },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <MyCard
            style={{background: "linear-gradient(135deg,#23bdb8,#43e794)",
           
              borderBottom: '1px solid rgb(229 213 213 / 50%)',
          }}
          headstyle ={{ color:"white"}}
              head={
                <>
                  <h1 style={{color:"#44ce6f"}}>
                    <sup>$</sup>35.00<sub style={{fontSize: "15px"}}>/Mon</sub>
                  </h1>
                  <p style={{ color: '#6084a4' }}>10 GB Bandwidth</p>
                  <p style={{ color: '#6084a4' }}> Highest Speed </p>
                  <p style={{ color: '#6084a4' }}>3 GB Storage </p>
                  <p style={{ color: '#6084a4' }}>Unlimited Website</p>
                  <p style={{ color: '#6084a4' }}> Unlimited Users </p>
                  <p style={{ color: '#6084a4' }}>24x7 Great Support</p>
                  <p style={{ color: '#6084a4' }}>Data Security and Backups</p>
                  <p style={{ color: '#b5b5b5' }}>
                    <del>Monthly Reports and Analytics</del>
                  </p>
                </>
              }
              bttn={{
                backgroundColor: '#c679e3',
                '&:hover': { backgroundColor: '#44ce6f' },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <MyCard
            style={{'&:hover': {background: "linear-gradient(135deg,#23bdb8,#43e794)",
            color:"white"
          },
            borderBottom: '1px solid rgb(229 213 213 / 50%)',
        }}
              head={
                <>
                  <h1 style={{color:"#44ce6f"}}>
                    <sup>$</sup>65.00<sub style={{fontSize: "15px"}}>/Mon</sub>
                  </h1>
                  <p style={{ color: '#6084a4' }}>15 GB Bandwidth</p>
                  <p style={{ color: '#6084a4' }}> Highest Speed </p>
                  <p style={{ color: '#6084a4' }}>5 GB Storage </p>
                  <p style={{ color: '#6084a4' }}>Unlimited Website</p>
                  <p style={{ color: '#6084a4' }}> Unlimited Users </p>
                  <p style={{ color: '#6084a4' }}>24x7 Great Support</p>
                  <p style={{ color: '#6084a4' }}>Data Security and Backups</p>
                  <p style={{ color: '#6084a4' }}>
                    Monthly Reports and Analytics
                  </p>
                </>
              }
              bttn={{
                backgroundColor: '#44ce6f',
                '&:hover': { backgroundColor: '#c679e3' },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default PricingPlans
