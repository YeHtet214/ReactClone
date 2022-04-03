import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import { makeStyles } from '@mui/styles';

const links = [
    { url: '/search', text: 'All', iconName: 'SearchIcon' },
    { url: '/images', text: 'Images', iconName: 'ImageSearchIcon' },
    { url: '/videos', text: 'Videos', iconName: 'VideoSettingsIcon' },
    { url: '/news', text: 'News', iconName: 'NewspaperIcon' },
]

const useStyles = makeStyles(theme => ({
    navItem: {
        textDecoration: 'none',
        marginRight: '0.8em', 
        display: 'inline-flex', 
        flexWrap: 'nowrap',
        alignItems: 'center', 
        fontSize: '0.8em',
        color: 'inherit',
        zIndex: 2500
    },
    activeNavItem: {
        textDecoration: 'none',
        marginRight: '0.8em', 
        display: 'inline-flex', 
        alignItems: 'center', 
        fontSize: '0.8em',
        color: theme.palette.primary.light,
        borderBottom: `1px solid ${theme.palette.primary.light}`,
        zIndex: 222,
    }
}))


export const Links = () => {

    const location = useLocation();
    const classes = useStyles();

    return (
        <Container sx={{ marginBottom: '1.5em' }} >
            {links.map(({ url, text, iconName }, index) => (
                <NavLink 
                    to={url}
                    key={index} 
                    className={url === location.pathname ? classes.activeNavItem : classes.navItem }
                >

                 {text === 'All' ? <SearchIcon /> : text==='Images' ? <ImageSearchIcon /> : text==='Videos' ? <VideoSettingsIcon /> : <NewspaperIcon /> }
                 {text}
                </NavLink>
            ))}
        </Container>
    )
}
