import React from 'react'
import { AppBar,
    Toolbar,
    Box,
    Button,
    Grid,
    Link,
    } from '@mui/material';


import { MdAccessTime, MdPhoneInTalk, MdSearch} from 'react-icons/md';
import Image from 'next/image';
import logo from '../../assets/img/logo_mini.png'

function Nav() {
    const pages = [
        'HOME',
        'PAGES',
        'SERVICES',
        'FEATURES',
        'GALLERY',
        'BLOG',
        'SHOP',
      ]
      const p={
        color:"grey",marginBlockStart: 0,
        marginBlockEnd: 0,
        marginInlineStart: 0,
        marginInlineEnd: 0
      }


      return (
        <Grid container>
          <Grid
            style={{
              background: '#1b1b1b',
              height: '95px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Grid md={6}  style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
              <Box>
                <Link
                >
                  <Image
                    src={logo}
                    alt={''}
                    style={{ height: '100%', width: '100%' }}
                  ></Image>
                </Link>
              </Box>
            </Grid>
            <Grid md={6} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding:"10%",
              height:"max-content"
            }}>
              <Box  style={{  display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <MdPhoneInTalk size={32}   style={{color:"#026dfe"}} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1}} />
                  <Box >
                  <p  style={p} >Call to us 24/7</p>
                  <span>0-800-123-4567</span>  
                  </Box> 
              </Box>  
              <Box  style={{  display:"flex", justifyContent:"center", alignItems:"center" }}>
                <MdAccessTime size={32} style={{color:"#026dfe"}} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                  <Box >
                  <p style={p}>	Opening Hours</p>
                  <span>Sat 9.00 - 19.00 </span>  
                  </Box>
              </Box>
            </Grid>
          </Grid>
          <AppBar
            position="static"
            style={{ background:"rgba(0,0,0, 0.7)" , height: '90px' }}
          >
              <Toolbar disableGutters
              style={{display:"flex",
                justifyContent:"space-around"
              }}
              >
    
                <Grid md={6}
                style={{ display:"flex", justifyContent:"space-between"}}
                >
                <Box 
                 style={{ display:"flex", padding:"10%", alignItems:"end", justifyContent:"space-around"}}
                  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                      <Button
                        key={page}
                        // onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                        {page}
                      </Button>
                    ))}
                     <Button
                        // onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                        <MdSearch  size={25} style={{verticalAlign :"bottom", fontWeight:"bolder"}} />
                      </Button>
                </Box>
                </Grid >
                <Grid md={6} style={{ display:"flex", justifyContent:"center"}}>
                <Button 
                    variant="contained"
                    size="large"
                    style={{ width: '256px', height:"52px", background:"#026dfe"}}
                  >
                    MAKE APPOINTMENT
                  </Button>
                  </Grid>
    
              </Toolbar>
          </AppBar>
        </Grid>
  )


}

export default Nav


