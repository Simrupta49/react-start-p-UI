// Simran Gupta

import React from 'react'
import { Box } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import FeatherIcon from 'feather-icons-react'

const MyCard = ({ myicon, head, para, style }) => {
  // {myicon, head, para}=props
  return (
    <Box>
      <Card
        sx={{
          minWidth: 275,
          textAlign: 'left',
          padding: '25px 20px 15px 20px',
          marginBottom: '10px',
          border: 'none',
          boxShadow:
            '0 1px 2px 0 rgb(244 240 240 / 20%), 0 1px 8px 0 rgb(240 234 234 / 19%)',
          '&:hover': {
            // boxShadow:
            //   '0 0 0 1px rgb(53 72 91 / 7%), 0 2px 2px rgb(0 0 0 / 1%), 0 4px 4px rgb(0 0 0 / 2%), 0 10px 8px rgb(0 0 0 / 3%), 0 15px 15px rgb(0 0 0 / 3%), 0 30px 30px rgb(0 0 0 / 4%), 0 70px 65px rgb(0 0 0 / 5%)',
            cursor: 'pointer',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
            boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
            borderBottom: '4px solid #44ce6f ',
          },
        }}
      >
        <CardContent>
          <Box
            sx={{
              ...style,
              width: '35px',
              height: '30px',
              borderRadius: '50%',
              textAlign: 'center',
              padding: ' 14px 10px 10px 11px',
            }}
          >
            <FeatherIcon icon={myicon} sx={{ backgroundColor: 'blue' }} />
          </Box>
          <h3
            style={{
              color: '#0e314c',
              cursor: 'pointer',
              marginBottom: '10px',
              // '&:hover': { color: '#44ce6f', backgroundColor:"red" },
            }}
          >
            {head}
          </h3>
          <p style={{ color: '#6084a4', lineHeight: '1.8', margin: '0' }}>
            {para}
          </p>
        </CardContent>
      </Card>
    </Box>
  )
}

export default MyCard
