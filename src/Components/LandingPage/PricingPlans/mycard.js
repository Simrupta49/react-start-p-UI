// Simran Gupta

import React from 'react'
import { Box } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

const MyCard = ({ head, bttn, style, headstyle }) => {
  // {myicon, head, para}=props
  return (
    <Box>
      <Card
        sx={{
          marginTop: '0',
          minWidth: 275,
          textAlign: 'center',
          //   padding: '25px 20px 15px 20px',
          marginBottom: '10px',
          border: 'none',
          boxShadow:
            '0 1px 2px 0 rgb(244 240 240 / 20%), 0 1px 8px 0 rgb(240 234 234 / 19%)',
          '&:hover': {
            // boxShadow:
            //   '0 0 0 1px rgb(53 72 91 / 7%), 0 2px 2px rgb(0 0 0 / 1%), 0 4px 4px rgb(0 0 0 / 2%), 0 10px 8px rgb(0 0 0 / 3%), 0 15px 15px rgb(0 0 0 / 3%), 0 30px 30px rgb(0 0 0 / 4%), 0 70px 65px rgb(0 0 0 / 5%)',
            // borderBottom: '4px solid #44ce6f ',
            cursor: 'pointer',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
            boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
          },
        }}
      >
        <CardContent sx={{ padding: '0' }}>
          <Box
            sx={{
              ...style,
              //   width: '35px',
              height: '57px',
              //   borderRadius: '50%',
              textAlign: 'center',
              //   padding: ' 14px 10px 10px 11px',
              paddingTop: '25px',
            //   borderBottom: '1px solid grey',
            //   background: "linear-gradient(135deg,#23bdb8,#43e794)"
            
            }}
          >
            <h3 style={{ ...headstyle, margin: '0',
    fontWeight: "500", }}>BASIC PLAN</h3>
          </Box>
          <Box>
            {head}
            <Button
              variant="contained" 
              size="large"
              sx={{
                ...bttn,
                width: '173px',
                height: '54px',
                marginTop: '15px',
                fontWeight: "600",
                color: 'white',

              }}
            >
              Select Plan
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default MyCard
