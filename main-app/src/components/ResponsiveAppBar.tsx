import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Home', 'About', 'Restaurants'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              width: 32,
              height: 32,
              marginRight: 1,
            }}
          >
            <img
              src={"https://i.ibb.co/FkDhjWmq/Grub-NGo-Icon-White.png"}
              style={{ width: '100%', height: '100%' }}
            />
          </Box>

          <Typography
            variant="h5"
            noWrap
            sx={{
              marginRight: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'text.primary',
              textDecoration: 'none',
            }}
          >
            GRUB N' GO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'text.primary' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    component="a"
                    href={`#${page.toLowerCase()}`} color="inherit" sx={{
                      textAlign: 'center',
                      color: 'text.secondary',
                      '&:hover': {
                        color: 'primary.main',
                      }
                    }}
                  >{page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'center',
              alignItems: 'center',
              width: 32,
              height: 32,
              marginRight: 1,
            }}
          >
            <img
              src={"https://i.ibb.co/FkDhjWmq/Grub-NGo-Icon-White.png"}
              style={{ width: '100%', height: '100%' }}
            />
          </Box>

          <Typography
            variant="h5"
            noWrap
            sx={{
              marginRight: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'text.primary',
              textDecoration: 'none',
            }}
          >
            GRUB N' GO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, color: 'text.primary' }}>
            {pages.map((page) => (
              <Button
                component="a"
                href={`#${page.toLowerCase()}`}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  marginY: 2,
                  color: 'text.primary',
                  display: 'block',
                  '&:hover': {
                    color: '#000000',
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;