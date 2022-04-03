import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardActionArea, CardMedia, CardContent, ButtonBase, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useResultContext } from './ResultContextProvider';
import { Loading } from './Loading';
import ReactPlayer from 'react-player';

const useStyle = makeStyles(theme => ({
  searchStyles: dark => ({
    '& .MuiButtonBase-root': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    '& .MuiTypography-subtitle1': {
      color: dark ? theme.palette.primary.light : theme.palette.primary.light,
    },
    '& .MuiTypography-body2': {
      color: dark ? '#fff8' : '#000',
      fontSize: '0.8em'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      padding: '0 2em'
    }
  }),
  linkTag: dark => ({
    textDecoration: 'none',

    '&:visited': {
      color: dark ? '#223' : '#111',
    }
  }),
  newsStyle: dark => ({
    '& .MuiButtonBase-root': {
     
      fontSize: '0.9em',
    },
    titleText: dark => ({
      color: dark ? theme.palette.primary.dark : theme.palette.info
    }),
  })
})) 

export const RoutePaths = ({ dark }) => {

  const location = useLocation();
  const { results, isLoading, getResults, searchTerm, setSearchTerm } = useResultContext();

  const classes = useStyle(dark);

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      } else if (location.pathname === '/images') {
        getResults(`/image/q=${searchTerm}`)
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`)
      }
    }
  }, [searchTerm, location.pathname])
  
  if (isLoading) return <Loading />

  switch (location.pathname) {
    case '/search':
      return (
        <Container>
          <Grid container spacing={2} justifyContent='center' className={classes.searchStyles} >
            {results?.map(({link, title}, index) => (
              !link.href && (
                <Grid key={index} item xs={12} sm={6} >
                  <Link to={link} rel='noreferrer' underline='hover' target='_blank' >
                    <Typography variant='body2'>
                      {link.length > 60 ? link.substring(0, 40) : link}
                    </Typography>
                    <Typography  className={classes.titleText} variant='subtitle1' >{title}</Typography>
                  </Link>
                </Grid>
              )
            ))
          }
          </Grid>
        </Container>
      );

   

    case '/images':
      return (
        <Container >
          <Grid container spacing={2} >
            {results?.map(( { image, link } , index) => (
              image && (
                <Grid key={index} item xs={6} sm={4} md={3} >
                <Card >
                  <ButtonBase LinkComponent='a' href={link.href}>
                    <CardActionArea >
                      <CardMedia 
                        component='img'
                        src={image.src}
                        height='200'
                        width='100%'
                        aria-label={link.title}
                      />
                      <CardContent>
                          <Typography variant='subtitle2'>{link.title}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </ButtonBase>
                </Card>
              </Grid>
              ))
            )}
          </Grid>
        </Container>
      );

    case '/news':
      return (
        <Grid container spacing={3} px={2} className={classes.newsStyle} >
          { results?.map(({ links, id, source, title }) => (
            <Grid item key={Math.floor(Math.random() * 100000)} xs={12} >
                <ButtonBase style={{ display: 'block' }} LinkComponent='a' href={links?.[0]?.href} target='_blank' >
                  <Typography variant='body2' className={classes.titleText} gutterBottom >{title}</Typography>
                  <Box >
                    { source?.href && (
                      <Link rel='noreferrer' className={classes.linkTag} to={source.href} target='_blank' >
                        {source?.href}
                      </Link>
                    )}
                  </Box>
                </ButtonBase>
            </Grid>
          ))}
        </Grid>
      )
    

    case '/videos':
      return (
        <Grid container justifyContent="center" spacing={2} >
          {results?.map(( video, index ) => (
            <Grid item key={index} >
              { video?.additional_links?.[0]?.href && <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />}
            </Grid>
          ))}
        </Grid>
      );

    
    default:
      return 'Error';
  }
}





